const axios = require("axios");

module.exports = {
  getPetInfo: (petType, callback) => {
    axios
      .post("https://api.petfinder.com/v2/oauth2/token", {
        grant_type: "client_credentials",
        client_id: "km6BJFusgyEMPIj4tLYtmyP22GKsKzhNqVbzmIUKjbvOb4aYdn",
        client_secret: "Ye7Fg8NtVkdOFe6sF3mvTuopo7gGfDt2QiPCUQgA"
      })
      .then(function(tokenResponse) {
        axios
          .get(`https://api.petfinder.com/v2/animals?type=${petType}&limit=3`, {
            headers: {
              Authorization: "Bearer " + tokenResponse.data.access_token
            }
          })
          .then(function(petInformation) {
            const animals = petInformation.data.animals;
            const desiredInfo = ["url", "age", "name", "photos"];
            const finalResult = animals.reduce((petArray, elem) => {
              const singlePetInfo = Object.keys(elem)
                .filter(key => desiredInfo.includes(key))
                .reduce((obj, key) => {
                  obj[key] = elem[key];
                  return obj;
                }, {});
              petArray.push(singlePetInfo);
              return petArray;
            }, []);
            callback(finalResult);
          });
      });
  }
};

//posting data "body of data" to destiantion.com//
