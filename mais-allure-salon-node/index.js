const express = require('express')
const cookiesMiddleware = require('universal-cookie-express');

const app = express();
const port = 8081;
 
var webRouter = require('./Router/rout.js')

app.use('/', webRouter)

// app
//   .use(cookiesMiddleware())
//   .use(function(req, res) {
//     // get the user cookies using universal-cookie
//     req.universalCookies.get('username')
//     console.log("cookie" + req)

//   });

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
});