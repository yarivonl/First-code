import { REGIONS } from "@/lib/regions";

export default function SearchForm() {
  return (
    <form action="/results" className="bg-white p-6 rounded-xl shadow-lg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="flex flex-col gap-2">
        <label className="text-sm font-semibold text-gray-700">Region</label>
        <select name="region" className="p-2 border border-gray-300 rounded-md text-black" required>
          {REGIONS.map((r) => (
            <option key={r.id} value={r.id}>{r.name}</option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-sm font-semibold text-gray-700">Dates</label>
        <div className="flex gap-2">
          <input type="date" name="from" className="p-2 border border-gray-300 rounded-md w-full text-black" required defaultValue="2024-07-01" />
          <input type="date" name="to" className="p-2 border border-gray-300 rounded-md w-full text-black" required defaultValue="2024-07-08" />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-sm font-semibold text-gray-700">Passengers</label>
        <div className="flex gap-2">
          <input type="number" name="adults" placeholder="Adults" className="p-2 border border-gray-300 rounded-md w-full text-black" min="1" defaultValue="2" required />
          <input type="number" name="children" placeholder="Children" className="p-2 border border-gray-300 rounded-md w-full text-black" min="0" defaultValue="0" />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-sm font-semibold text-gray-700">Quality Preference</label>
        <select name="quality" className="p-2 border border-gray-300 rounded-md text-black" required>
          <option value="good">Best Hotels & Airlines</option>
          <option value="cheap">Cheapest but Decent</option>
        </select>
      </div>

      <div className="lg:col-span-4 mt-2">
        <button type="submit" className="w-full bg-blue-600 text-white font-bold py-3 rounded-md hover:bg-blue-700 transition">
          Find My Trip
        </button>
      </div>
    </form>
  );
}
