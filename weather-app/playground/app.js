const yargs = require("yargs");

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

geocode.geocodeAddress(argv.address, (errorMessage, addressResults) => {
  if (errorMessage) {
    console.log("Error");
  } else {
    weather.getWeather(
      addressResults.lat,
      addressResults.lng,
      (errorMessage1, weatherResults) => {
        if (errorMessage1) {
          console.log("ERROR1", errorMessage1);
        } else {
          console.log(weatherResults);
        }
      }
    );
  }
});
