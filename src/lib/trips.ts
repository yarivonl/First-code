import { searchFlights, searchHotels } from './api';
import { Trip, Flight, Hotel } from '@/types';
import { REGIONS } from './regions';

export async function generateTrips(
  regionId: string,
  fromDate: string,
  toDate: string,
  adults: number,
  children: number,
  quality: 'cheap' | 'good'
): Promise<Trip[]> {
  const region = REGIONS.find((r) => r.id === regionId);
  if (!region) return [];

  const totalPassengers = adults + children;
  const start = new Date(fromDate);
  const end = new Date(toDate);
  const days = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));

  const allTrips: Trip[] = [];

  // Search across multiple airports in the region
  const airportSearches = region.airports.slice(0, 3).map(async (airport) => {
    try {
      const [flights, hotels] = await Promise.all([
        searchFlights(airport.code, fromDate, toDate, totalPassengers, quality),
        searchHotels(airport.city, fromDate, toDate, totalPassengers, quality),
      ]);

      // Combine flights and hotels into trip packages
      flights.forEach((flight) => {
        hotels.forEach((hotel) => {
          const totalPrice = flight.price + hotel.pricePerNight * days;
          allTrips.push({
            id: `${flight.id}-${hotel.id}`,
            flight,
            hotel,
            totalPrice,
            days,
          });
        });
      });
    } catch (error) {
      console.error(`Error fetching data for ${airport.city}:`, error);
    }
  });

  await Promise.all(airportSearches);

  // Sort by price and take the best 10 options
  return allTrips.sort((a, b) => a.totalPrice - b.totalPrice).slice(0, 10);
}
