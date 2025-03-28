// Importing
const express = require("express");
const dbconfig = require("./mongoconnect");
const path = require("path");
const app = express();
// Port:
const port = 4500;

// Middleware usage
app.use(express.json());
app.use(express.static(path.join(__dirname, "components")));
// Function for insertion of data
const insertion = async (req) => {
  let data = await dbconfig();
  let inserted_data = await data.insertOne(req.body)
  return inserted_data
};
// Routes
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});
app.post("/submit", async (req, res) => {
  await insertion(req)
  res.send("The form has been submitted.")
});
// Port for server
app.listen(port);
