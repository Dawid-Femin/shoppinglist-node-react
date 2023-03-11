const express = require('express');
const app = express();
const { PORT } = require('./config');
const bodyParser = require('body-parser');

//Database connection
require('./database/mongoose');

//Parsers
//Content-type: application/json
app.use(bodyParser.json());

//Routes
const apiRouter = require('./routes/api');

app.use('/api/', apiRouter);

//Server
app.listen(PORT, () => {
    console.log(`Server is working on http://localhost:${PORT}`);
});