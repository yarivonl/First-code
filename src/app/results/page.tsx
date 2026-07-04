import { generateTrips } from "@/lib/trips";
import { Plane, Hotel as HotelIcon, Star, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default async function ResultsPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const region = params.region as string;
  const from = params.from as string;
  const to = params.to as string;
  const adults = parseInt(params.adults as string) || 2;
  const children = parseInt(params.children as string) || 0;
  const quality = (params.quality as "cheap" | "good") || "good";

  const trips = await generateTrips(region, from, to, adults, children, quality);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="text-blue-600 hover:underline mb-8 inline-block">
          ← Back to Search
        </Link>
        <h1 className="text-3xl font-bold mb-2">Best Trip Options for You</h1>
        <p className="text-gray-600 mb-8">
          Found {trips.length} combinations in {region} for {adults + children} people.
        </p>

        <div className="space-y-6">
          {trips.map((trip) => (
            <div key={trip.id} className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 flex flex-col md:flex-row">
              <div className="md:w-1/3 relative h-48 md:h-auto">
                <Image
                  src={trip.hotel.image}
                  alt={trip.hotel.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              <div className="p-6 md:w-2/3 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold">{trip.hotel.name}</h3>
                      <div className="flex items-center text-yellow-500 gap-1">
                        <Star size={16} fill="currentColor" />
                        <span className="text-sm font-semibold">{trip.hotel.rating.toFixed(1)}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-blue-600">${trip.totalPrice}</div>
                      <div className="text-xs text-gray-500 italic text-nowrap">Total for {trip.days} days</div>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3 text-sm text-gray-700">
                      <Plane size={18} className="text-gray-400" />
                      <span>{trip.flight.airline} · {trip.flight.departureAirport} → {trip.flight.arrivalAirport}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-700">
                      <HotelIcon size={18} className="text-gray-400" />
                      <span>{trip.hotel.name} · {trip.hotel.address}</span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <a
                    href={trip.flight.referralUrl}
                    target="_blank"
                    className="flex-1 bg-blue-50 text-blue-700 font-semibold py-2 rounded-md text-center hover:bg-blue-100 transition text-sm"
                  >
                    View Flight
                  </a>
                  <a
                    href={trip.hotel.referralUrl}
                    target="_blank"
                    className="flex-1 bg-blue-600 text-white font-semibold py-2 rounded-md text-center hover:bg-blue-700 transition flex items-center justify-center gap-2 text-sm"
                  >
                    Book Trip <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
