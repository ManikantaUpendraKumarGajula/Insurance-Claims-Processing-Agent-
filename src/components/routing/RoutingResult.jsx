export default function RoutingResult({ route, reasoning }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="font-semibold text-lg">Recommended Route</h2>
      <p className="text-blue-600 font-bold">{route}</p>
      <p className="mt-2 text-gray-700">{reasoning}</p>
    </div>
  );
}
