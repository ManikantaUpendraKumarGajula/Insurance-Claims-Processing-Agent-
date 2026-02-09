// import { useState } from "react";
// import FileUpload from "../components/upload/FileUpload";
// import AllDetails from "../components/extraction/AllDetails";
// import MissingFields from "../components/extraction/MissingFields";
// import RoutingResult from "../components/routing/RoutingResult";
// import JsonOutput from "../components/output/JsonOutput";

// import { extractFields } from "../services/fieldExtractor.service";
// import { validateFields } from "../services/validation.service";
// import { routeClaim } from "../services/routing.service";

// export default function ClaimsProcessor() {
//   const [result, setResult] = useState(null);

//   const handleSubmit = (text) => {
//     const extractedFields = extractFields(text);
//     const missingFields = validateFields(extractedFields);
//     const routing = routeClaim(
//       {
//         claimType: extractedFields.otherMandatoryFields.claimType,
//         description: extractedFields.incidentInformation.description,
//         estimatedDamage: extractedFields.assetDetails.estimatedDamage,
//       },
//       missingFields
//     );

//     setResult({
//       extractedFields,
//       missingFields,
//       ...routing,
//     });
//   };

//   return (
//     <div className="max-w-7xl mx-auto space-y-6">
//       <h1 className="text-2xl font-bold">
//         Autonomous Insurance Claims Processing Agent 
//       </h1>

// <div className="flex flex-col items-start space-y-4 text-xl">
//   <p>Please Upload the Claim File<span className="text-red-500"> *</span></p>

// <FileUpload onProcessed={handleSubmit} />
// </div>
      

//       {result && (
//         <>
//           <AllDetails data={result.extractedFields} />

//           <MissingFields fields={result.missingFields} />

//           <RoutingResult
//             route={result.recommendedRoute}
//             reasoning={result.reasoning}
//           />

//           <JsonOutput data={result} />
//         </>
//       )}
//     </div>
//   );
// }


import { useState } from "react";

import FileUpload from "../components/upload/FileUpload";
import AllDetails from "../components/extraction/AllDetails";
import MissingFields from "../components/extraction/MissingFields";
import RoutingResult from "../components/routing/RoutingResult";
import JsonOutput from "../components/output/JsonOutput";

import { extractFields } from "../services/fieldExtractor.service";
import { validateFields } from "../services/validation.service";
import { routeClaim } from "../services/routing.service";

export default function ClaimsProcessor() {
  const [result, setResult] = useState(null);

  const handleSubmit = (text) => {
    const extractedFields = extractFields(text);
    const missingFields = validateFields(extractedFields);

    const routing = routeClaim(
      {
        claimType: extractedFields.otherMandatoryFields.claimType,
        description: extractedFields.incidentInformation.description,
        estimatedDamage: extractedFields.assetDetails.estimatedDamage,
      },
      missingFields
    );

    setResult({
      extractedFields,
      missingFields,
      ...routing,
    });
  };

  return (
    <div className="min-h-screen animated-bg py-10 px-4">
      <div className="max-w-7xl mx-auto space-y-8">

        {/* ===== Header ===== */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 p-8 shadow-xl animate-fadeIn">
          
          {/* Glow Effects */}
          <div className="absolute -top-24 -right-24 h-72 w-72 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 h-72 w-72 bg-white/10 rounded-full blur-3xl"></div>

          <h1 className="text-4xl font-extrabold text-white tracking-wide">
            Autonomous Insurance Claims Processing Agent
          </h1>

          <div className="w-24 h-1 bg-white mt-4 rounded-full"></div>

          <p className="text-white/90 mt-4 max-w-3xl text-lg">
            Modernizing insurance claims with intelligent document processing
          </p>
        </div>

        {/* ===== Upload Section ===== */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <p className="text-lg font-semibold text-gray-700 mb-4">
            Upload Claim File <span className="text-red-500">*</span>
          </p>

          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 hover:border-blue-400 transition">
            <FileUpload onProcessed={handleSubmit} />
          </div>
        </div>

        {/* ===== Results Section ===== */}
        {result && (
          <div className="space-y-6">
            
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Extracted Claim Details
              </h2>
              <AllDetails data={result.extractedFields} />
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Missing Information
              </h2>
              <MissingFields fields={result.missingFields} />
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Routing Recommendation
              </h2>
              <RoutingResult
                route={result.recommendedRoute}
                reasoning={result.reasoning}
              />
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Raw JSON Output
              </h2>
              <JsonOutput data={result} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
