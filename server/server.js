require('./config/config');

const express = require ('express');

const PORT = process.env.PORT;

var app = express();

app.get('/', (req, res) => {
    res.send("hello");
});

app.listen(PORT, () => {
    console.log(`Started app at ${PORT}`);
});

module.exports = {app};