const request = require("request");

const geocodeAddress = (addr, callBack) => {
  const address = encodeURIComponent(addr);
  request(
    {
      url: `http://www.mapquestapi.com/geocoding/v1/address?key=KL2K0aNtfFrR06CiwLkLeKv40cMVYttz&location=${address}`,
      json: true
    },
    (error, response, body) => {
      if (error) {
        callBack("Could not connect to mapQuestAPI");
      } else if (!error && response.statusCode === 200) {
        callBack(undefined, {
          address: body.results[0].providedLocation.location,
          lat: body.results[0].locations[0].latLng.lat,
          lng: body.results[0].locations[0].latLng.lng
        });
      } else {
        console.log("Could not fetch address");
      }
    }
  );
};

module.exports = {
  geocodeAddress
};
