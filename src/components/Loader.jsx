export default function Loader() {
  return (
    <div className="flex justify-center items-center h-24">
      <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-blue-500"></div>
      <span className="ml-4 text-blue-700 font-medium animate-pulse">
        Loading weather data...
      </span>
    </div>
  );
}
