export default function WeatherCard({ weather }) {
  const { name, main, weather: details, wind } = weather;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 text-center max-w-md mx-auto mt-6 transition-all">
      <h2 className="text-3xl font-bold text-blue-700 dark:text-white mb-2">
        {name}
      </h2>
      <img
        src={`http://openweathermap.org/img/wn/${details[0].icon}@4x.png`}
        alt={details[0].description}
        className="mx-auto w-28 h-28 mb-2 animate-pulse"
      />
      <p className="text-xl font-semibold text-gray-700 dark:text-gray-300 capitalize mb-4">
        {details[0].description}
      </p>
      <div className="grid grid-cols-3 gap-4 text-sm text-gray-600 dark:text-gray-300">
        <div className="flex flex-col items-center">
          <span className="text-lg font-bold">{main.temp}°C</span>
          <span>Temp</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-lg font-bold">{main.humidity}%</span>
          <span>Humidity</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-lg font-bold">{wind.speed} km/h</span>
          <span>Wind</span>
        </div>
      </div>
    </div>
  );
}
