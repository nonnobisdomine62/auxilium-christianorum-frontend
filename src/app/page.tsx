'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Layout from '@/components/Layout';
import PrayerSection from '@/components/PrayerSection';
import { prayers } from '@/data/prayers';
import { latinPrayers } from '@/data/latin-prayers';
import { spanishPrayers } from '@/data/spanish-prayers';
import { portuguesePrayers } from '@/data/portuguese-prayers';
import { italianPrayers } from '@/data/italian-prayers';
import { polishPrayers } from '@/data/polish-prayers';
import { frenchPrayers } from '@/data/french-prayers';
import { germanPrayers } from '@/data/german-prayers';
import { czechPrayers } from '@/data/czech-prayers';
import { dutchPrayers } from '@/data/dutch-prayers';
import { indonesianPrayers } from '@/data/indonesian-prayers';
import { arabicPrayers } from '@/data/arabic-prayers';
import { romanianPrayers } from '@/data/romanian-prayers';
import { vietnamesePrayers } from '@/data/vietnamese-prayers';
import { Language, languageNames, dayTranslations, uiTranslations } from '@/translations/ui';
import { useLanguage } from '@/hooks/useLanguage';
import { Day, DailyPrayers } from '@/types/prayers';

const days: Day[] = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

const prayersByLanguage: Record<Language, DailyPrayers> = {
  english: prayers,
  latin: latinPrayers,
  spanish: spanishPrayers,
  portuguese: portuguesePrayers,
  italian: italianPrayers,
  polish: polishPrayers,
  french: frenchPrayers,
  german: germanPrayers,
  czech: czechPrayers,
  dutch: dutchPrayers,
  indonesian: indonesianPrayers,
  arabic: arabicPrayers,
  romanian: romanianPrayers,
  vietnamese: vietnamesePrayers
};

export default function Home() {
  const [currentDay, setCurrentDay] = useState<Day>('sunday');
  const { language, setLanguage } = useLanguage();
  const router = useRouter();

  useEffect(() => {
    const today = days[new Date().getDay()];
    setCurrentDay(today);
  }, []);

  // Update the page title when language changes
  useEffect(() => {
    document.title = uiTranslations[language].siteTitle;
  }, [language]);

  const handleDayChange = (day: Day) => {
    setCurrentDay(day);
  };

  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(event.target.value as Language);
    // Force a client-side navigation to update the URL
    router.refresh();
  };

  const currentPrayers = prayersByLanguage[language];
  const translations = uiTranslations[language];
  const dayNames = dayTranslations[language];

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <div className="flex flex-col items-center space-y-4 w-full max-w-4xl px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center w-full gap-4">
            <div className="flex flex-wrap gap-2" role="tablist" aria-label={translations.dailyPrayers}>
              {days.map((day) => (
                <button
                  key={day}
                  onClick={() => handleDayChange(day)}
                  role="tab"
                  aria-selected={currentDay === day}
                  aria-controls={`prayers-${day}`}
                  className={`px-3 py-1.5 rounded text-base sm:text-lg font-serif ${
                    currentDay === day
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {dayNames[day]}
                </button>
              ))}
            </div>
            <select
              id="language-select"
              value={language}
              onChange={handleLanguageChange}
              className="px-3 py-1.5 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 font-serif text-lg"
              aria-label={translations.selectLanguage}
            >
              {Object.entries(languageNames)
                .sort(([,a], [,b]) => a.localeCompare(b))
                .map(([value, label]) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
            </select>
          </div>

          <div className="w-full space-y-12">
            <section aria-label={translations.dailyPrayers}>
              <PrayerSection prayers={currentPrayers.everyday} />
            </section>

            <section 
              id={`prayers-${currentDay}`}
              aria-label={`${translations.prayersFor} ${dayNames[currentDay]}`}
            >
              <PrayerSection prayers={currentPrayers[currentDay]} />
            </section>

            <section aria-label={translations.conclusion}>
              <PrayerSection prayers={currentPrayers.conclusion} />
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
}
