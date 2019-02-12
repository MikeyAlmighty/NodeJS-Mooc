const yargs = require("yargs");
const axios = require("axios");

const geocode = require("./geocode/geocode");
const weather = require("./weather/weather");

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: "address",
      describe: "Address to fetch weather for",
      string: true
    }
  })
  .help()
  .alias("help", "help").argv;

const address = encodeURIComponent(argv.address);

var geocodeURL = `http://www.mapquestapi.com/geocoding/v1/address?key=KL2K0aNtfFrR06CiwLkLeKv40cMVYttz&location=${address}`;

axios
  .get(geocodeURL)
  .then(resp => {
    if (resp.data.status === "ZERO_RESULTS") {
      throw new Error("Unable to find that address");
    }
    const lat = resp.data.results[0].locations[0].latLng.lat;
    const lng = resp.data.results[0].locations[0].latLng.lng;
    const weatherURL = `https://api.darksky.net/forecast/ae05c8936c9d9f858c6ff57ad934043d/${lat},${lng}?units=si`;

    return axios.get(weatherURL);
  })
  .then(resp => {
    const temp = resp.data.currently.temperature;
    const apparentTemp = resp.data.currently.apparentTemperature;
    console.log(`It is currently ${temp} and feels like ${apparentTemp}`);
  })
  .catch(e => {
    if (e.code === "ENOTFOUND") {
      console.log("Unable to connect to API servers");
    } else {
      console.log(e.message);
    }
  });
