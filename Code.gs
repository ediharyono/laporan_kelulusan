// Code.gs
function doGet(e) {

  return HtmlService
  .createTemplateFromFile("index")
  .evaluate()
  .setTitle("Laporan Kelulusan")
  .setSandboxMode(HtmlService.SandboxMode.IFRAME);


}

function getSpreadsheetData() {
//https://docs.google.com/spreadsheets/d/1n5GmuhaAEYrM0HSjSuOrJK-bxQknsg65h6DRu-1AVj0/edit?usp=sharing
  var ssID   = "1n5GmuhaAEYrM0HSjSuOrJK-bxQknsg65h6DRu-1AVj0",
      sheet  = SpreadsheetApp.openById(ssID).getSheets()[0],
      data   = sheet.getDataRange().getValues();
 
  return data;

 
}
