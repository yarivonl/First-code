export interface Airport {
  code: string;
  city: string;
  country: string;
}

export interface Region {
  id: string;
  name: string;
  airports: Airport[];
}

export const REGIONS: Region[] = [
  {
    id: 'west-europe',
    name: 'West Europe',
    airports: [
      { code: 'LHR', city: 'London', country: 'UK' },
      { code: 'CDG', city: 'Paris', country: 'France' },
      { code: 'AMS', city: 'Amsterdam', country: 'Netherlands' },
      { code: 'FRA', city: 'Frankfurt', country: 'Germany' },
    ],
  },
  {
    id: 'east-europe',
    name: 'East Europe',
    airports: [
      { code: 'WAW', city: 'Warsaw', country: 'Poland' },
      { code: 'PRG', city: 'Prague', country: 'Czech Republic' },
      { code: 'BUD', city: 'Budapest', country: 'Hungary' },
      { code: 'OTP', city: 'Bucharest', country: 'Romania' },
    ],
  },
  {
    id: 'us-east-coast',
    name: 'US East Coast',
    airports: [
      { code: 'JFK', city: 'New York', country: 'USA' },
      { code: 'BOS', city: 'Boston', country: 'USA' },
      { code: 'MIA', city: 'Miami', country: 'USA' },
      { code: 'IAD', city: 'Washington D.C.', country: 'USA' },
    ],
  },
];
