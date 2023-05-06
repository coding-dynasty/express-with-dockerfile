const express = require("express")

const app = express()

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    console.log(req.ip)
    res.send(JSON.stringify({ msg: "Hello World" }))
})

app.listen(3000, () => {
    console.log(`listening on PORT ${PORT}`)
})