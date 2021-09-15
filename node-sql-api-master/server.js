const express = require("express");
const cors = require("cors");

const app = express();

const db = require("./models");
//Only for dev mode : to drop existing tables and re-sync database
// db.sequelize.sync({ force: true }).then(() => {
//     console.log("Drop and re-sync db.");
// });
db.sequelize.sync();

var corsOptions = {
    origin: "http://localhost:3000"
};

app.use(cors());

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to Mokakhari." });
});

//Import routes
require("./routes/user.routes")(app);
require("./routes/auth.routes")(app);
require("./routes/sample.routes")(app);
require("./routes/donation.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});