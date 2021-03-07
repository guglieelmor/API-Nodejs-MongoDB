const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

mongoose.connect('Link from MongoDB Atlas database', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(cors());

app.use(express.json());

app.use(routes);    

app.listen(3333);