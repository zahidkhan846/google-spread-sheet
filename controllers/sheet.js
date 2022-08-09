const { GoogleSpreadsheet } = require("google-spreadsheet");

const getSingleSheet = async (req, res) => {
  const CLIENT_EMAIL = process.env.GOOGLE_SHEET_EMAIL;
  const GOOGE_SHEET_PRIVATE_KEY = process.env.GOOGE_SHEET_PRIVATE_KEY;

  const { sheetUrl, emailToVerify } = req.body;
  let spreadsheetId = new RegExp("/spreadsheets/d/([a-zA-Z0-9-_]+)").exec(
    sheetUrl
  )[1];

  const doc = new GoogleSpreadsheet(spreadsheetId);

  await doc.useServiceAccountAuth({
    client_email: CLIENT_EMAIL,
    private_key: GOOGE_SHEET_PRIVATE_KEY,
  });

  await doc.loadInfo();

  const sheet = doc.sheetsByIndex[0]; // or use doc.sheetsById[id] or doc.sheetsByTitle[title]
  const rows = await sheet.getRows();

  let emailArr = [];
  rows.forEach((row) => {
    emailArr.push(row.Email);
  });

  const isValidEmail = emailArr.includes(emailToVerify);
  return res.status(200).json({ email: isValidEmail });
};

module.exports = getSingleSheet;
