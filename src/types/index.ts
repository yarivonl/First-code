export interface Flight {
  id: string;
  airline: string;
  departureAirport: string;
  arrivalAirport: string;
  departureTime: string;
  arrivalTime: string;
  price: number;
  referralUrl: string;
}

export interface Hotel {
  id: string;
  name: string;
  rating: number;
  pricePerNight: number;
  address: string;
  referralUrl: string;
  image: string;
}

export interface Trip {
  id: string;
  flight: Flight;
  hotel: Hotel;
  totalPrice: number;
  days: number;
}
