const express = require('express');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');

const app = express();

//SETTINGS
app.set("port", process.env.PORT || 8080);

//MIDDLEWARE
app.use(bodyParser.json());
app.use(expressValidator());

//ROUTERS
const user = require('./routes/index');
app.use("/api/user", user);

app.listen(app.get("port"), () => {
    console.log(`Listening on port: ${app.get("port")}`);
});