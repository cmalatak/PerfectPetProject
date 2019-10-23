const axios = require("axios");

module.exports = {
  getPetInfo: (petType, callback) => {
    axios
      .post("https://api.petfinder.com/v2/oauth2/token", {
        grant_type: "client_credentials",
        client_id: "km6BJFusgyEMPIj4tLYtmyP22GKsKzhNqVbzmIUKjbvOb4aYdn",
        client_secret: "Ye7Fg8NtVkdOFe6sF3mvTuopo7gGfDt2QiPCUQgA"
      })
      .then(function(tokenresponse) {
        console.log(tokenresponse);
        callback(tokenresponse.data);
      });
  }
};

//posting data "body of data" to destiantion.com//
