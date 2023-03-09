const express = require("express");
const app = express();

const Pizza = require('../server/models/pizzaModel');
const pizzaRoute = require("../server/routes/pizzasRoute");
const userRoutes = require("../server/routes/userRoutes");

//middlewares
app.use(express.json());
// app.use(morgan("dev"));


// const dotenv = require("dotenv");
// const path = require("path");

const database = require("./config/database");
// require("colors");
// const morgan = require("morgan");

// //config dotenv
// dotenv.config();


//route
app.use("/api/pizzas", pizzaRoute);
app.use("/api/users", userRoutes);


app.get("/", (req, res) => {
    res.send("Server Working on " + port);
});


const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(
        `Server Running On mode on port ` + port
    );
});

