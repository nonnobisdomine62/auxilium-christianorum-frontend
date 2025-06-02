'use client';

interface Prayer {
  title: string;
  content: string[];
}

interface PrayerSectionProps {
  prayers: Prayer[];
}

export default function PrayerSection({ prayers }: PrayerSectionProps) {
  return (
    <div className="space-y-7 font-serif">
      {prayers.map((prayer, index) => (
        <div key={index} className="space-y-2.5">
          <h2 className="text-xl font-bold italic tracking-wide">{prayer.title}</h2>
          {prayer.content.map((line, i) => (
            <p key={i} className={`${line === '' ? 'my-2.5' : ''} text-lg leading-normal`}>
              {line}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
} 