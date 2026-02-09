import * as pdfjsLib from "pdfjs-dist";
import mammoth from "mammoth";
import pdfjsWorker from "pdfjs-dist/build/pdf.worker.min?url";

pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorker;

export async function parseDocument(file) {
  const ext = file.name.split(".").pop().toLowerCase();

  if (ext === "pdf") return parsePDF(file);
  if (ext === "docx") return parseDocx(file);
  if (ext === "txt") return file.text();

  throw new Error("Unsupported file type");
}

async function parsePDF(file) {
  const buffer = await file.arrayBuffer();
  const pdf = await pdfjsLib.getDocument({ data: buffer }).promise;

  let text = "";
  for (let i = 1; i <= pdf.numPages; i++) {
    const page = await pdf.getPage(i);
    const content = await page.getTextContent();
    text += content.items.map((item) => item.str).join(" ") + "\n";
  }
  return text;
}

async function parseDocx(file) {
  const buffer = await file.arrayBuffer();
  const result = await mammoth.extractRawText({ arrayBuffer: buffer });
  return result.value;
}
