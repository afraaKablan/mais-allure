const express = require('express')
const app = express();
const port = 8081;

var webRouter = require('./Router/rout.js')

app.use('/', webRouter)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
});