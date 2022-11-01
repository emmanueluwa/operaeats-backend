const express = require('express');
const cors = require('cors');

const userRoute = require('./routes/user.routes');
const authRoute = require('./routes/auth.routes');
const groupRoute = require('./routes/group.routes');
const profileRoute = require('./routes/profile.routes');

const cookieSession = require('cookie-session');

const app = express();


//middlewares
app.use(cors());
app.use(express.json());
//type accepted
app.use(express.json({ type: 'application/vnd.api+json' }));
app.use(express.urlencoded({ extended: true }));
//allowing access to images in browser
app.use('/uploads', express.static('uploads'));


//logging in
app.use(
  cookieSession({
    name: process.env.COOKIE_NAME,
    secret: process.env.COOKIE_SECRET,
    httpOnly: true,
    nameSite: 'strict',
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
  })
);


//routes
app.use('/api/', userRoute);
app.use('/api/', authRoute);
app.use('/api/', groupRoute);
app.use('/api/', profileRoute);


module.exports = app;