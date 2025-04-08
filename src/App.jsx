import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import ErrorMessage from "./components/ErrorMessage";
import Loader from "./components/Loader";
import { fetchWeather } from "./api";
import { Moon, Sun } from "lucide-react";

function App() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [searchHistory, setSearchHistory] = useState([]);

  const handleSearch = async (city) => {
    setLoading(true);
    setError("");
    setWeather(null);

    try {
      const data = await fetchWeather(city);
      setWeather(data);
      setSearchHistory((prev) => {
        const updated = [city, ...prev.filter((c) => c !== city)].slice(0, 5);
        return updated;
      });
    } catch (err) {
      setError("City not found or API error.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center px-4 relative">
      <div className="absolute top-4 right-4">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="bg-white dark:bg-gray-700 text-black dark:text-white p-2 rounded-full shadow hover:scale-105 transition"
        >
          {darkMode ? (
            <Sun className="w-5 h-5" />
          ) : (
            <Moon className="w-5 h-5" />
          )}
        </button>
      </div>

      <div className="absolute top-4 left-4 text-sm text-left space-y-2 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md w-40">
        <h2 className="font-semibold text-gray-800 dark:text-white">
          Recent Searches
        </h2>
        {searchHistory.length === 0 ? (
          <p className="text-gray-500 dark:text-gray-400">No recent searches</p>
        ) : (
          searchHistory.map((city, index) => (
            <div
              key={index}
              className="text-blue-700 dark:text-blue-300 cursor-pointer hover:underline"
              onClick={() => handleSearch(city)}
            >
              {city}
            </div>
          ))
        )}
      </div>

      <div className="w-full text-center">
        <h1 className="text-4xl font-bold text-blue-800 dark:text-white mb-6">
          🌤️ Weather Dashboard
        </h1>
        <SearchBar onSearch={handleSearch} />
        {loading && <Loader />}
        {error && <ErrorMessage message={error} />}
        {weather && <WeatherCard weather={weather} />}
      </div>
    </div>
  );
}

export default App;
