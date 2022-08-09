## Get started

### Steps

- Go to google console create api for google sheet. (Give all CRUD access)

- It will return and url and json file like we have in config/node-g-sheet.json.

- Add .env file update with following data.

```bash
GOOGE_SHEET_PRIVATE_KEY="THIS IS PRIVATE KEY CAN BE FOUND IN CONFIG FILE WE GET WHEN CREATE AND ENABLE GOOGLE SHEET API. private_key property"
GOOGLE_SHEET_EMAIL="This Is email also in client_email property"
```

- Make sure share your google sheet with GOOGLE_SHEET_EMAIL. (full read write access)

- To call this api body must be like this (POST REQUEST)

```bash
{
    "sheetUrl": "https://docs.google.com/spreadsheets/d/1-ENoDIMX6P44lAhJH1uZmbaJDYoDzLaFZyJ59yD02Sw/edit#gid=1569084414",
    "emailToVerify":"zake@domain.com"
}

# WILL RETURN FALSE
```
