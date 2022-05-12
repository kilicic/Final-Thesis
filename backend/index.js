const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
const pg = require('pg');

app.use(cors());
app.use(express.json());

const homeRouter = require('./routes/home.route')
const galleryRouter = require('./routes/gallery.route')
const pictureRouter = require('./routes/picture.route')
const dataRouter = require('./routes/data.route')

app.use('/', homeRouter)
app.use('/gallery', galleryRouter)
app.use('/picture', pictureRouter)
app.use('/data', dataRouter)

app.listen(5000, () => {
    console.log("Server has started on port 5000")
})