const express = require("express");
const app = express();
const port = 3000;

app.get("/get-pet/:perfectPet", (req, res) => {
  res.send(req.params.perfectPet);
});

app.listen(port, () => {
  console.log("Listening...");
});
