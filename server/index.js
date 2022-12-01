// base utility
require("dotenv").config();
const path = require('path');
const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())


app.get('/', (req, res) => {
    res.send('Hi There')
});


const PORT_CONTAINER = 3001
const PORT = process.env.PORT || PORT_CONTAINER
app.listen(PORT, function () {
    console.log(`Running on port ${PORT_CONTAINER}`)
})