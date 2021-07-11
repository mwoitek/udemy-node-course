const path = require("path");
const express = require("express");

const app = express();

const publicDirectoryPath = path.join(__dirname, "../public");
app.use(express.static(publicDirectoryPath));

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
