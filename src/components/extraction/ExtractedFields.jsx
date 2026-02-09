export default function ExtractedFields({ data }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h2 className="font-semibold mb-2">Extracted Fields</h2>
      <pre className="text-sm bg-gray-100 p-2 rounded">
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  );
}
