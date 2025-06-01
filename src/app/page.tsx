'use client';

import { useEffect, useState } from 'react';
import Layout from '@/components/Layout';
import { prayers } from '@/data/prayers';

const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'] as const;
type Day = typeof days[number];

export default function Home() {
  const [currentDay, setCurrentDay] = useState<Day>('sunday');
  const [isToday, setIsToday] = useState(true);

  useEffect(() => {
    const today = days[new Date().getDay()];
    setCurrentDay(today);
  }, []);

  const handleDayChange = (day: Day) => {
    setCurrentDay(day);
    setIsToday(day === days[new Date().getDay()]);
  };

  const renderPrayer = (prayer: { title: string; content: string[] }) => (
    <div key={prayer.title} className="mb-8">
      <h2 className="text-xl font-serif mb-4">{prayer.title}</h2>
      <div className="space-y-2">
        {prayer.content.map((line, index) => (
          <p key={index} className={line.trim() === '' ? 'my-4' : 'leading-relaxed'}>
            {line}
          </p>
        ))}
      </div>
    </div>
  );

  if (!currentDay) {
    return null;
  }

  return (
    <Layout>
      <div className="prose dark:prose-invert max-w-none">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          <h1 className="text-3xl font-serif text-center sm:text-left mb-0">
            {isToday ? "Today's Prayers" : `Prayers for ${currentDay.charAt(0).toUpperCase() + currentDay.slice(1)}`}
          </h1>
          <div className="flex items-center gap-2">
            <label htmlFor="day-select" className="sr-only">Select day</label>
            <select
              id="day-select"
              value={currentDay}
              onChange={(e) => handleDayChange(e.target.value as Day)}
              className="px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-500 text-gray-900 dark:text-gray-100"
            >
              {days.map((day) => (
                <option 
                  key={day} 
                  value={day}
                  className="bg-gray-100 dark:bg-gray-700"
                >
                  {day.charAt(0).toUpperCase() + day.slice(1)}
                  {day === days[new Date().getDay()] ? ' (Today)' : ''}
                </option>
              ))}
            </select>
          </div>
        </div>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-serif mb-6">Daily Prayers</h2>
            {prayers.everyday.map(renderPrayer)}
          </section>

          <section>
            <h2 className="text-2xl font-serif mb-6">Prayers for {currentDay.charAt(0).toUpperCase() + currentDay.slice(1)}</h2>
            {prayers[currentDay].map(renderPrayer)}
          </section>

          <section>
            <h2 className="text-2xl font-serif mb-6">Conclusion</h2>
            {prayers.conclusion.map(renderPrayer)}
          </section>
        </div>
      </div>
    </Layout>
  );
}
