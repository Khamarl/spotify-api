const express = require ("express")
const cors = require ("cors")
const app = express()
const homeRouter = require("./routes/homeRoute")
const artistRouter = require("./routes/artistRoute")


app.use(cors());
app.use(express.json());


app.use("/", homeRouter)

app.use("/artists", artistRouter )

module.exports = app;
