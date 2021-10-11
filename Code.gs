// Code.gs
function doGet(e) {

  return HtmlService
  .createTemplateFromFile("index")
  .evaluate()
  .setTitle("Laporan Kelulusan")
  .setSandboxMode(HtmlService.SandboxMode.IFRAME);


}

function getSpreadsheetData() {
//https://docs.google.com/spreadsheets/d/YOUR_ID/edit?usp=sharing
  var ssID   = "YOUR_ID",
      sheet  = SpreadsheetApp.openById(ssID).getSheets()[0],
      data   = sheet.getDataRange().getValues();
 
  return data;

 
}
