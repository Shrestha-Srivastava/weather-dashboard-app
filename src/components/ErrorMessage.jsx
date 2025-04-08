export default function ErrorMessage({ message }) {
  return (
    <div className="text-red-600 text-center p-4">
      ⚠️ {message}
    </div>
  );
}