'use strict';

const express = require('express');
const app = express();

const repeat = require('./routes/repeat.js');
const talk = require('./routes/repeat.js');
const log = require('./middleware/log.js');

app.use(express.json());
app.use(log);

app.use(function(req, res, next) {
    console.log(req.method);
    next();
});

app.post('/talk', talk);
app.get('/repeat', repeat);

module.exports = app;