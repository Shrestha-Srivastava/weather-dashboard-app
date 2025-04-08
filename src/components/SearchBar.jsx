import { useState } from "react";
import { Search } from "lucide-react";

export default function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city);
      setCity("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-1/3 min-w-[300px] mx-auto flex gap-3 p-5 justify-center bg-white dark:bg-gray-900 rounded-3xl shadow-xl mb-10 border border-gray-200 dark:border-gray-700"
    >
      <input
        type="text"
        placeholder="Search for a city..."
        className="border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white bg-gray-50 dark:bg-gray-800 p-3 rounded-full w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white px-5 py-3 rounded-full shadow-md flex items-center justify-center transition-all">
        <Search className="w-5 h-5" />
      </button>
    </form>
  );
}
