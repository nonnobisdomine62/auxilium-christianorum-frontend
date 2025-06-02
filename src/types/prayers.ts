export interface Prayer {
  title: string;
  content: string[];
}

export interface DailyPrayers {
  everyday: Prayer[];
  sunday: Prayer[];
  monday: Prayer[];
  tuesday: Prayer[];
  wednesday: Prayer[];
  thursday: Prayer[];
  friday: Prayer[];
  saturday: Prayer[];
  conclusion: Prayer[];
}

export type Day = 'sunday' | 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday'; 