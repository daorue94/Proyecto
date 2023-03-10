const mongoose = require("mongoose");

// aqui va la URL de mi repositorio, lo borré por seguridad ()
var mongodbURL = 'mongodb+srv://xxxxxxxxxxxxxxxx@cluster0.ngs84ho.mongodb.net/PizzaApp'

mongoose.connect(mongodbURL, { useUnifiedTopology: true, useNewUrlParser: true })

var database = mongoose.connection

database.on('connected', () => {
    console.log(`Mongodb DataBase Connected!`)
})

database.on('error', () => {
    console.log(`Mongodb DataBase FAILED`)
})

module.exports = mongoose