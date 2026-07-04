import { Flight, Hotel } from '@/types';

// Mock data generator for demonstration purposes
// In a real application, these would call Amadeus/Booking.com APIs

export async function searchFlights(
  toAirport: string,
  fromDate: string,
  toDate: string,
  passengers: number,
  quality: 'cheap' | 'good'
): Promise<Flight[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 800));

  const airlines = quality === 'good'
    ? ['Lufthansa', 'British Airways', 'Air France', 'Delta']
    : ['Ryanair', 'EasyJet', 'Wizz Air', 'Spirit'];

  return airlines.map((airline, index) => ({
    id: `f-${index}-${toAirport}`,
    airline,
    departureAirport: 'JFK', // Default origin for demo
    arrivalAirport: toAirport,
    departureTime: `${fromDate}T10:00:00`,
    arrivalTime: `${fromDate}T18:00:00`,
    price: quality === 'good' ? 400 + index * 50 : 150 + index * 30,
    referralUrl: `https://example.com/flights/${airline.toLowerCase()}`,
  }));
}

export async function searchHotels(
  city: string,
  fromDate: string,
  toDate: string,
  passengers: number,
  quality: 'cheap' | 'good'
): Promise<Hotel[]> {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const names = quality === 'good'
    ? ['Hilton', 'Marriott', 'Four Seasons', 'Ritz-Carlton']
    : ['Ibis', 'Holiday Inn Express', 'Hostel World', 'Motel 6'];

  return names.map((name, index) => ({
    id: `h-${index}-${city}`,
    name: `${name} ${city}`,
    rating: quality === 'good' ? 4 + Math.random() : 2 + Math.random() * 2,
    pricePerNight: quality === 'good' ? 200 + index * 40 : 60 + index * 20,
    address: `Street ${index + 1}, ${city}`,
    referralUrl: `https://example.com/hotels/${name.toLowerCase().replace(' ', '-')}`,
    image: `https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop`,
  }));
}
