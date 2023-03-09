const express = require('express');
const app = express();
const { PORT } = require('./config');

//Routes
const apiRouter = require('./routes/api');

app.use('/', apiRouter);

//Server
app.listen(PORT, () => {
    console.log(`Server is working on http://localhost:${PORT}`);
});