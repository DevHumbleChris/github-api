require("colors");
const route = require("express").Router();
const bodyParser = require("body-parser")
const mainControllers = require("../controllers/mainControllers")

const urlEncoded = bodyParser.urlencoded({
    extended: true
})

route.get("/", mainControllers.index)

route.post("/", urlEncoded, mainControllers.getUsername)

module.exports = route;