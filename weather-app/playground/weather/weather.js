const request = require("request");

const getWeather = (lat, lng, callBack) => {
  const latitude = encodeURIComponent(lat);
  const longitude = encodeURIComponent(lng);
  request(
    {
      url: `https://api.darksky.net/forecast/ae05c8936c9d9f858c6ff57ad934043d/${latitude},${longitude}?units=si`,
      json: true
    },
    (error, response, body) => {
      if (error) {
        callBack("Could not connect to weatherAPI");
      } else if (!error && response.statusCode === 200) {
        callBack(
          undefined,
          `It is currently: ${body.currently.temperature} it feels like: ${
            body.currently.apparentTemperature
          } `
        );
      } else {
        callBack(undefined, "Unable to fetch weather");
      }
    }
  );
};

module.exports = {
  getWeather
};
