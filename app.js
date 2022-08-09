const express = require("express");
const cors = require("cors");
const gSheetRoutes = require("./routes/sheet");

const dotenv = require("dotenv");
dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());

app.use("/google-sheet", gSheetRoutes);

app.listen(8080, async () => {
  console.log("Server listning on http://localhost:8080");
});
