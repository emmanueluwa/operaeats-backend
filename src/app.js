const express = require('express');
const cors = require('cors');
const userRoute = require('./routes/user.routes');

const app = express();

//middlewares
app.use(cors());
app.use(express.json());
//type accepted
app.use(express.json({ type: 'application/vnd.api+json' }));
app.use(express.urlencoded({ extended: true }));


//routes
app.use('/api/', userRoute);



module.exports = app;