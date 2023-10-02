const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const blogroute = require("./routes/blogroute");

const app = express();

const sequelize = require('./utils/database');
const Blog = require('./models/form');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


app.use(blogroute);


sequelize
    .sync()
    .then(result => {
        // return User.findByPk(1);
        // console.log(result);
    })
    .then(() => {
        app.listen(3000);
    })
    .catch(err => console.log(err));