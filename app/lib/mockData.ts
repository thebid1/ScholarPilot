import { Scholarship, UserProfile, Application, Milestone } from '@/app/types';

const now = new Date();

function addDays(days: number): string {
  const d = new Date(now);
  d.setDate(d.getDate() + days);
  return d.toISOString().split('T')[0];
}

export const DISCIPLINES = [
  'Engineering',
  'Computer Science',
  'Medicine',
  'Business',
  'Law',
  'Arts',
  'Social Sciences',
  'Natural Sciences',
  'Agriculture',
  'Education',
];

export const COUNTRIES = ['UK', 'US', 'Germany', 'Canada', 'Australia', 'Netherlands'];

export const scholarships: Scholarship[] = [
  {
    id: 'chevening',
    title: 'Chevening Scholarship',
    funder: 'UK Foreign, Commonwealth & Development Office',
    country: 'UK',
    degreeLevel: "Master's",
    amount: 'Full tuition, monthly stipend, flights, arrival allowance',
    deadline: addDays(45),
    eligibility: [
      'Nigerian citizen with an undergraduate degree',
      'At least two years of work experience',
      'Leadership potential and strong academic background',
      'Applying for a one-year taught Master’s in the UK',
    ],
    requiredDocs: [
      'Valid international passport',
      'University degree certificate/transcript',
      'Two reference letters',
      'Offer letter from a UK university (by the deadline)',
      'English proficiency test result',
    ],
    description:
      'Prestigious UK government scholarship for future leaders to study a one-year Master’s at any UK university.',
    url: 'https://www.chevening.org/',
  },
  {
    id: 'commonwealth',
    title: 'Commonwealth Shared Scholarship',
    funder: 'Commonwealth Scholarship Commission (UK)',
    country: 'UK',
    degreeLevel: "Master's",
    amount: 'Full tuition, living allowance, travel costs, thesis grant',
    deadline: addDays(62),
    eligibility: [
      'Nigerian citizen and permanent resident',
      'First degree of at least upper second class',
      'Unable to afford study in the UK without this scholarship',
      'Applying for an eligible taught Master’s program',
    ],
    requiredDocs: [
      'Academic transcript',
      'References from two academic/professional referees',
      'Supporting statement of motivation',
      'Scan of passport or national ID',
    ],
    description:
      'For talented individuals from Commonwealth countries who would not otherwise afford UK study.',
    url: 'https://cscuk.fcdo.gov.uk/apply/',
  },
  {
    id: 'fulbright',
    title: 'Fulbright Foreign Student Program',
    funder: 'U.S. Department of State',
    country: 'US',
    degreeLevel: "Master's / PhD",
    amount: 'Full tuition, health insurance, living stipend, airfare',
    deadline: addDays(80),
    eligibility: [
      'Nigerian citizen resident in Nigeria',
      'Bachelor’s degree completed before program start',
      'Strong academic record and English proficiency',
      'Commitment to return to Nigeria after study',
    ],
    requiredDocs: [
      'Completed online application',
      'Academic transcripts and degree certificate',
      'Three letters of recommendation',
      'Statement of purpose',
      'CV/resume',
    ],
    description:
      'U.S. flagship program supporting graduate study and research for international students.',
    url: 'https://foreign.fulbrightonline.org/',
  },
  {
    id: 'mastercard',
    title: 'Mastercard Foundation Scholars Program',
    funder: 'Mastercard Foundation (U.S. university partners)',
    country: 'US',
    degreeLevel: "Bachelor's / Master's",
    amount: 'Full financial support including tuition, housing, and mentoring',
    deadline: addDays(98),
    eligibility: [
      'Young Nigerian demonstrating academic talent and leadership',
      'Strong financial need',
      'Applying to a partner U.S. or African institution',
      'Commitment to giving back to community',
    ],
    requiredDocs: [
      'Academic records',
      'Financial need documentation',
      'Essays on leadership and community service',
      'Recommendation letters',
      'Proof of English proficiency',
    ],
    description:
      'Comprehensive scholarship for academically talented yet economically disadvantaged young people.',
    url: 'https://mastercardfdn.org/all-programs/scholars-program/',
  },
  {
    id: 'daad',
    title: 'DAAD Scholarship for Development-Related Postgraduate Courses',
    funder: 'German Academic Exchange Service (DAAD)',
    country: 'Germany',
    degreeLevel: "Master's",
    amount: 'Full tuition, monthly stipend, travel allowance, insurance',
    deadline: addDays(115),
    eligibility: [
      'Nigerian professional with a Bachelor’s degree',
      'At least two years of relevant work experience',
      'Development-related discipline preferred',
      'Strong motivation to contribute to national development',
    ],
    requiredDocs: [
      'DAAD application form',
      'Motivation letter (max 3 pages)',
      'Full CV',
      'Two professional reference letters',
      'Employer’s recommendation',
    ],
    description:
      'German government-funded scholarship for professionals from developing countries pursuing development-focused Master’s degrees.',
    url: 'https://www.daad.de/en/study-and-research-in-germany/scholarships/daad-development-related-postgraduate-courses/',
  },
  {
    id: 'heinrich',
    title: 'Heinrich Böll Foundation Scholarship',
    funder: 'Heinrich Böll Foundation (Germany)',
    country: 'Germany',
    degreeLevel: "Master's / PhD",
    amount: 'Full tuition, monthly stipend, mobility allowance',
    deadline: addDays(132),
    eligibility: [
      'International student committed to green/social values',
      'Outstanding academic record',
      'Active engagement in social or environmental causes',
      'University admission or application in progress',
    ],
    requiredDocs: [
      'Online application form',
      'Motivation letter',
      'Project proposal (for research students)',
      'Two references',
      'Language proficiency proof',
    ],
    description:
      'For students and doctoral candidates who stand up for green and social ideals in Germany.',
    url: 'https://www.boell.de/en/foundation/scholarship',
  },
  {
    id: 'vanier',
    title: 'Vanier Canada Graduate Scholarship',
    funder: 'Government of Canada',
    country: 'Canada',
    degreeLevel: 'PhD',
    amount: 'CAD $50,000 per year for up to three years',
    deadline: addDays(155),
    eligibility: [
      'Nominated by a Canadian institution',
      'Pursuing a doctoral degree (PhD)',
      'Exceptional academic achievement and research potential',
      'Leadership skills and community involvement',
    ],
    requiredDocs: [
      'Research proposal',
      'Leadership statement',
      'Two leadership reference letters',
      'Transcripts',
      'Nomination by institution',
    ],
    description:
      'Canada’s most prestigious doctoral scholarship, awarded to students who demonstrate leadership and research excellence.',
    url: 'https://vanier.gc.ca/',
  },
  {
    id: 'idrc',
    title: 'IDRC Research Awards',
    funder: 'International Development Research Centre (Canada)',
    country: 'Canada',
    degreeLevel: "Master's / PhD",
    amount: 'CAD $20,000–$40,000 research grant plus travel support',
    deadline: addDays(172),
    eligibility: [
      'Nigerian citizen enrolled in a Master’s or PhD program',
      'Research aligned with IDRC thematic priorities',
      'Strong academic background',
      'Ability to conduct fieldwork in development context',
    ],
    requiredDocs: [
      'Research proposal',
      'Academic transcripts',
      'Supervisor support letter',
      'CV',
      'Budget narrative',
    ],
    description:
      'Canadian research awards supporting development-focused graduate research in low- and middle-income countries.',
    url: 'https://www.idrc.ca/en/funding',
  },
];

function degreeMatches(s: Scholarship, target: string): boolean {
  const level = s.degreeLevel.toLowerCase();
  if (target === 'PhD') return level.includes('phd');
  if (target === 'MSc') return level.includes("master's") || level.includes('phd');
  if (target === 'BSc') return level.includes("bachelor's");
  return true;
}

function disciplineMatches(s: Scholarship, discipline: string): number {
  const text = `${s.description} ${s.eligibility.join(' ')}`.toLowerCase();
  const disc = discipline.toLowerCase();
  if (text.includes(disc)) return 25;
  const broad = ['engineering', 'science', 'technology', 'social sciences', 'humanities', 'any discipline'];
  if (broad.some((b) => text.includes(b))) return 12;
  return 0;
}

export function computeRelevance(s: Scholarship, profile: UserProfile): number {
  let score = 0;

  if (profile.countryPreference.includes(s.country)) score += 30;
  if (degreeMatches(s, profile.targetDegree)) score += 25;
  score += disciplineMatches(s, profile.discipline);

  if (profile.cgpa >= 3.7) score += 20;
  else if (profile.cgpa >= 3.5) score += 15;
  else if (profile.cgpa >= 3.0) score += 10;
  else score += 5;

  return Math.min(100, Math.max(0, score));
}

export function enrichScholarships(profile: UserProfile): Scholarship[] {
  return scholarships
    .map((s) => ({ ...s, relevanceScore: computeRelevance(s, profile) }))
    .sort((a, b) => (b.relevanceScore ?? 0) - (a.relevanceScore ?? 0));
}

export function getScholarshipById(id: string): Scholarship | undefined {
  return scholarships.find((s) => s.id === id);
}

export function findScholarshipByName(name: string): Scholarship | undefined {
  const lower = name.toLowerCase();
  return scholarships.find(
    (s) =>
      s.title.toLowerCase().includes(lower) ||
      s.funder.toLowerCase().includes(lower) ||
      s.id.toLowerCase().includes(lower)
  );
}

export function daysUntil(dateString: string): number {
  const target = new Date(dateString);
  const diff = target.getTime() - new Date().getTime();
  return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));
}

export function generateMilestones(deadline: string): Milestone[] {
  const d = new Date(deadline);
  const offset = (days: number) => {
    const x = new Date(d);
    x.setDate(x.getDate() - days);
    return x.toISOString().split('T')[0];
  };
  return [
    { label: 'Draft SOP', dueDate: offset(45), completed: false },
    { label: 'Request Recommendations', dueDate: offset(30), completed: false },
    { label: 'Finalise Documents', dueDate: offset(14), completed: false },
    { label: 'Submit Application', dueDate: deadline, completed: false },
  ];
}

export function computeHealthScore(milestones: Milestone[]): number {
  if (milestones.length === 0) return 0;
  const completed = milestones.filter((m) => m.completed).length;
  return Math.round((completed / milestones.length) * 100);
}

export function createApplication(scholarshipId: string): Application {
  const s = getScholarshipById(scholarshipId);
  const milestones = s ? generateMilestones(s.deadline) : [];
  return {
    id: `${scholarshipId}-${Date.now()}`,
    scholarshipId,
    status: 'Discovered',
    healthScore: computeHealthScore(milestones),
    milestones,
    createdAt: new Date().toISOString(),
  };
}
