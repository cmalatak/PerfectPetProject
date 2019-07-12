const express = require("express");
const app = express();
const port = 3000;
const apiClient = require("./apiClient");

app.get("/get-pet/:perfectPet", (req, res) => {
  const petInfo = apiClient.getPetInfo(req.params.perfectPet);
  res.send(petInfo);
});

app.listen(port, () => {
  console.log("Listening...");
});
