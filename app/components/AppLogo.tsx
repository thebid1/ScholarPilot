'use client';

import Image from 'next/image';

interface AppLogoProps {
  className?: string;
  size?: number;
}

export default function AppLogo({ className = '', size = 40 }: AppLogoProps) {
  return (
    <Image
      src="/scholar_crop.png"
      alt="ScholarPilot"
      width={size}
      height={size}
      style={{ width: size, height: size }}
      className={`rounded-xl object-cover ${className}`}
      unoptimized
    />
  );
}
