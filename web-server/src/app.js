const express = require("express");

const app = express();

app.get("", (req, res) => {
    res.send("<h1>Weather</h1>");
});

app.get("/about", (req, res) => {
    res.send("<h1>About</h1>");
});

app.get("/help", (req, res) => {
    res.send([{ name: "Marcio" }, { name: "Marli" }]);
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
