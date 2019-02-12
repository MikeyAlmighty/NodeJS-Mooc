const express = require("express");
const hbs = require("hbs");

var app = express();

hbs.registerPartials(__dirname + "/views/partials");

app.set("view engine", "hbs");
app.use(express.static(__dirname + "/public"));

hbs.registerHelper("getCurrentYear", () => {
  return new Date().getFullYear();
});

hbs.registerHelper("toUpper", text => {
  return text.toUpperCase();
});

app.get("/", (req, resp) => {
  resp.render("home.hbs", {
    pageTitle: "Home Page",
    message: "Darkness will prevail!"
  });
});

app.get("/about", (req, resp) => {
  resp.render("about.hbs", {
    pageTitle: "About Page"
  });
});

app.get("/bad", (req, resp) => {
  resp.send({
    error: {
      message: "Francis destroyed the internet"
    }
  });
});

app.listen(3000, () => {
  console.log("Server listeing on port 3000");
});
