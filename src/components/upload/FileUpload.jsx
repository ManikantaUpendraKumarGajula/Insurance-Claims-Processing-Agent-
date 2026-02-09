import { useState } from "react";
import { parseDocument } from "../../services/documentParser.service";

export default function FileUpload({ onProcessed }) {
  const [file, setFile] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleSubmit = async () => {
    if (!file) return alert("Please upload a FNOL file");
    const text = await parseDocument(file);
    onProcessed(text);
  };

  const handleDragEnter = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) {
      setFile(droppedFile);
    }
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl shadow-lg border-2 border-blue-200 space-y-6">
      {/* Upload Area */}
      <div
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        className={`relative border-3 border-dashed rounded-xl p-12 text-center transition-all duration-200 ${
          isDragging
            ? "border-blue-500 bg-blue-100 scale-105"
            : "border-blue-400 bg-white hover:border-blue-500 hover:bg-blue-50"
        }`}
      >
        {/* File Input */}
        <input
          type="file"
          id="file-input"
          accept=".pdf,.docx,.txt"
          onChange={(e) => setFile(e.target.files[0])}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        />

        {/* Upload Icon and Text */}
        <label htmlFor="file-input" className="cursor-pointer">
          <div className="space-y-3">
            <div className="text-5xl">📄</div>
            <div className="text-lg font-semibold text-gray-700">
              {file ? "✓ File Selected" : "Drag & Drop Your FNOL File Here"}
            </div>
            <div className="text-sm text-gray-500">
              {file ? (
                <span className="text-blue-600 font-medium">{file.name}</span>
              ) : (
                <>
                  <p>or click to browse</p>
                  <p className="text-xs mt-2">
                    Supported: PDF, DOCX, TXT
                  </p>
                </>
              )}
            </div>
          </div>
        </label>
      </div>

      {/* Submit Button */}
      <button
        onClick={handleSubmit}
        disabled={!file}
        className={`w-full py-3 px-6 rounded-lg font-semibold text-white transition-all duration-200 ${
          file
            ? "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-md hover:shadow-lg cursor-pointer"
            : "bg-gray-400 cursor-not-allowed opacity-50"
        }`}
      >
        {file ? "Submit  ✓" : "Please Upload a File"}
      </button>
    </div>
  );
}
