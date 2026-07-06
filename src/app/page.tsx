import SearchForm from "@/components/SearchForm";
import { Plane, Hotel, Globe } from "lucide-react";

// Main landing page for the Trip Planner
export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-blue-900 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-extrabold mb-6">Your Perfect Trip, Simplified.</h1>
          <p className="text-xl mb-10 text-blue-100">
            We find the best flight and hotel combos so you don&apos;t have to.
          </p>
          <SearchForm />
        </div>
      </div>

      {/* Features */}
      <section className="max-w-6xl mx-auto py-20 px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="text-center">
          <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
            <Plane className="text-blue-600" size={32} />
          </div>
          <h3 className="text-xl font-bold mb-4">Smart Flight Matching</h3>
          <p className="text-gray-600">We pick the best routes and companies based on your quality preference.</p>
        </div>
        <div className="text-center">
          <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
            <Hotel className="text-blue-600" size={32} />
          </div>
          <h3 className="text-xl font-bold mb-4">Top-Rated Hotels</h3>
          <p className="text-gray-600">Only highly-rated accommodations that fit your budget.</p>
        </div>
        <div className="text-center">
          <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
            <Globe className="text-blue-600" size={32} />
          </div>
          <h3 className="text-xl font-bold mb-4">All-In-One Price</h3>
          <p className="text-gray-600">See the total cost for the whole family upfront. No hidden fees.</p>
        </div>
      </section>
    </main>
  );
}
