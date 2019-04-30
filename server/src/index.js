require('dotenv').config();

const app = require('express')();

const cors = require('cors');
const bodyParser = require('body-parser');
const passport = require('passport');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());

// Passport Strategies
require('./passport');

// Constants
const PORT = process.env.PORT || 8080;
const HOST = '0.0.0.0';

const db = require('./db');

// Test DB connection since Knex doesn't do it lol
db.raw('SELECT 1+1 AS result')
.then(() => {
    console.log('Connection to DB successful!');
})
.catch((err) => {
    console.error('Connection to DB failed', err);
});

// Routes
app.use('/', require('./routes/app'));
app.use('/account', require('./routes/account'));
app.use('/payment', passport.authenticate('jwt', { session: false }), require('./routes/payment'));

if (process.env.NODE_ENV !== 'test') {
    app.listen(PORT, HOST);
    console.log(`Running on http://${HOST}:${PORT}`);
}

module.exports = app;
