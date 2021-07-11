/** @format */

const path = require("path");
const express = require("express");

const app = express();

app.set("view engine", "hbs");

const publicDirectoryPath = path.join(__dirname, "../public");
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

app.listen(3000, () => {
    console.log("Server is up on port 3000.");
});
