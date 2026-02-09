import { saveAs } from "file-saver";

export default function JsonOutput({ data }) {
  const download = () => {
    const blob = new Blob([JSON.stringify(data, null, 2)], {
      type: "application/json",
    });
    saveAs(blob, "claim-output.json");
  };

  return (
    <div className="bg-gray-900 text-green-400 p-4 rounded-xl">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-white font-semibold">JSON Output</h3>
        <button
          onClick={download}
          className="bg-blue-600 px-3 py-1 rounded text-white text-sm"
        >
          Download JSON
        </button>
      </div>

      <pre className="text-sm overflow-auto">
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  );
}
