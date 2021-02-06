require("colors");
require("dotenv/config");
const express = require("express")
const morgan = require("morgan")
const path = require("path")
const mainRoutes = require("./routes/mainRoutes")

const app = express()
const PORT = process.env.PORT ?? 3000

app.use(morgan("tiny"))
app.use(express.static("public"))
app.use("/", mainRoutes)
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "pug")

app.listen(PORT, () => {
    console.log(`GitHub API running at http//:127.0.0.1:${PORT}`.bold.blue)
})