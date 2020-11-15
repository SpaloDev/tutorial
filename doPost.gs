function doPost(e) {
  // get data
  const jsonString = e.postData.getDataAsString();
  const body = JSON.parse(jsonString);

  // data setting
  const eventTime = body.eventTime;
  const workspaceName = body.workspaceName;
  const groupName = body. groupName;
  const botName = body. botName;
  const historyId = body.historyId;
  const senderName = body.senderName;
  const hizuke = body.data['日付'];
  const jikan = body.data['時間'];
  const name = body.data['名前'];
  const age = body.data['年齢'];
  const mail = body.data['メールアドレス'];
    
  // get sheet
  const ss = SpreadsheetApp.openById(SpreadsheetApp.getActiveSpreadsheet().getId());
  const sheet = ss.getSheetByName("シート1");
    
  // insert
  try {
    sheet.appendRow([historyId, senderName, hizuke, jikan, name, age, mail, eventTime]);    
    
    const result = {message:'success'};
    const output = ContentService.createTextOutput();
    output.setMimeType(ContentService.MimeType.JSON);
    output.setContent(JSON.stringify(result));
    
    return output;
  }
  catch(e) {
    const result = {message:'error'};
    const output = ContentService.createTextOutput();
    output.setMimeType(ContentService.MimeType.JSON);
    output.setContent(JSON.stringify(result));
    
    return output;
  }    
}
