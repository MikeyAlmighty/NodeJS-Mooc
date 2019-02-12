const request = require("request");

var geocodeAddress = address => {
  return new Promise((resolve, reject) => {
    request(
      {
        url: `http://www.mapquestapi.com/geocoding/v1/address?key=KL2K0aNtfFrR06CiwLkLeKv40cMVYttz&location=${address}`,
        json: true
      },
      (error, response, body) => {
        if (error) {
          reject("Could not connect to mapQuestAPI");
        } else if (!error && response.statusCode === 200) {
          resolve({
            address: body.results[0].providedLocation.location,
            lat: body.results[0].locations[0].latLng.lat,
            lng: body.results[0].locations[0].latLng.lng
          });
        } else {
          console.log("Could not fetch address");
        }
      }
    );
  });
};

geocodeAddress("31 Disa Crescent Bellville 7530").then(location => {
  console.log(JSON.stringify(location, undefined, 2));
});
