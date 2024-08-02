const express = require('express');
const app = express();
require('dotenv').config();
require('./Schema/mongoDB');
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = process.env.PORT || 8080;


app.get('/ping', (req, res) => {
    res.send('PONG')
})


app.use(bodyParser.json());
app.use(cors());


app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`);
})