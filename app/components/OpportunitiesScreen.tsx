'use client';

import { useMemo, useState } from 'react';
import { UserProfile } from '@/app/types';
import { enrichScholarships } from '@/app/lib/mockData';
import OpportunityCard from './OpportunityCard';
import ScreenHeader from './ScreenHeader';
import ChatFAB from './ChatFAB';
import { Search, SlidersHorizontal } from 'lucide-react';

interface OpportunitiesScreenProps {
  profile: UserProfile;
  applications: { scholarshipId: string }[];
  onTrack: (scholarshipId: string) => void;
}

const FILTERS = ['All', 'UK', 'US', 'Germany', 'Canada'];

export default function OpportunitiesScreen({ profile, applications, onTrack }: OpportunitiesScreenProps) {
  const enriched = useMemo(() => enrichScholarships(profile), [profile]);
  const trackedIds = useMemo(() => new Set(applications.map((a) => a.scholarshipId)), [applications]);

  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState('All');

  const filtered = useMemo(() => {
    return enriched.filter((s) => {
      const matchesFilter = filter === 'All' || s.country === filter;
      const q = query.trim().toLowerCase();
      const matchesQuery =
        !q ||
        s.title.toLowerCase().includes(q) ||
        s.funder.toLowerCase().includes(q) ||
        s.country.toLowerCase().includes(q);
      return matchesFilter && matchesQuery;
    });
  }, [enriched, filter, query]);

  return (
    <div className="space-y-4">
      <ScreenHeader title="Discover" subtitle={`${filtered.length} scholarship${filtered.length === 1 ? '' : 's'}`} />

      <div className="flex items-center gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-tertiary" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search scholarships..."
            className="input pl-9 py-2.5"
          />
        </div>
        <button
          className="p-2.5 rounded-xl surface-muted text-secondary transition-colors"
          aria-label="Filters"
        >
          <SlidersHorizontal className="w-5 h-5" />
        </button>
      </div>

      <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
        {FILTERS.map((f) => {
          const active = filter === f;
          return (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`shrink-0 px-4 py-2 rounded-full text-xs font-bold border transition-all ${
                active
                  ? 'text-white border-transparent shadow-sm'
                  : 'text-secondary border-[var(--border)] hover:border-[var(--primary)]'
              }`}
              style={{ backgroundColor: active ? 'var(--primary)' : undefined }}
            >
              {f}
            </button>
          );
        })}
      </div>

      <div className="flex flex-col gap-3">
        {filtered.map((s) => (
          <OpportunityCard
            key={s.id}
            scholarship={s}
            isTracked={trackedIds.has(s.id)}
            onTrack={() => onTrack(s.id)}
          />
        ))}
      </div>

      <ChatFAB />
    </div>
  );
}
