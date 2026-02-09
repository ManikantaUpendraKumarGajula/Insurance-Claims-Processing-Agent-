export default function AllDetails({ data }) {
  const renderSection = (title, obj) => (
    <div className="bg-white p-4 rounded-xl shadow">
      <h3 className="font-semibold mb-2">{title}</h3>
      <ul className="text-sm space-y-1">
        {Object.entries(obj).map(([key, value]) => (
          <li key={key}>
            <span className="font-medium">{key}:</span>{" "}
            {value || "—"}
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="grid grid-cols-2 gap-6">
      {renderSection("Policy Information", data.policyInformation)}
      {renderSection("Incident Information", data.incidentInformation)}
      {renderSection("Involved Parties", data.involvedParties)}
      {renderSection("Asset Details", data.assetDetails)}
      {renderSection(
        "Other Mandatory Fields",
        data.otherMandatoryFields
      )}
    </div>
  );
}
