export default function MissingFields({ fields }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h2 className="font-semibold mb-2 text-red-600">Missing Fields</h2>
      {fields.length === 0 ? (
        <p className="text-green-600">None</p>
      ) : (
        <ul className="list-disc pl-5 text-red-500">
          {fields.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
