/** @format */

const path = require("path");
const express = require("express");
const hbs = require("hbs");

const app = express();

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

// Setup Handlebars engine and views location
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

// Setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.get("", (req, res) => {
    res.render("index", {
        title: "Weather",
        name: "Marcio Woitek",
    });
});

app.get("/about", (req, res) => {
    res.render("about", {
        title: "About Me",
        name: "Marcio Woitek",
    });
});

app.get("/help", (req, res) => {
    res.render("help", {
        title: "Help",
        name: "Marcio Woitek",
        helpText: "This is some helpful text!",
    });
});

app.get("/weather", (req, res) => {
    res.send({
        location: "Curitiba, Paraná, Brazil",
        forecast:
            "Clear. It is currently 18 degrees out. It feels like 18 degrees out.",
    });
});

app.get("/help/*", (req, res) => {
    res.render("404", {
        title: "404",
        name: "Marcio Woitek",
        errorMessage: "Help article not found!",
    });
});

app.get("*", (req, res) => {
    res.render("404", {
        title: "404",
        name: "Marcio Woitek",
        errorMessage: "Page not found!",
    });
});

app.listen(3000, () => {
    console.log("Server is up on port 3000.");
});
