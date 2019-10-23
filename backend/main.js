const express = require("express");
const app = express();
const port = 3000;
const apiClient = require("./apiClient");

app.get("/get-pet/:perfectPet", (request, response) => {
  apiClient.getPetInfo(request.params.perfectPet, data => {
    response.send(data);
  });
});

app.listen(port, () => {
  console.log("Listening...");
});
