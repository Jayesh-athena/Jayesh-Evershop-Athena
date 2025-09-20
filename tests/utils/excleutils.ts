import * as XLSX from "xlsx";
 
export function getTestData(filePath: string, sheetName: string) {
  const workbook = XLSX.readFile("C:/Playwright - Jayesh/flightdata.xlsx");
  const sheet = workbook.Sheets[sheetName];
 
  // Convert to JSON with safe options
  const jsonData = XLSX.utils.sheet_to_json(sheet, {
    defval: "",   // keep empty cells instead of skipping
    raw: false,   // keep strings/numbers as they are
  });
 
  return jsonData;
 
}
 