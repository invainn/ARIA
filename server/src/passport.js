const bcrypt = require('bcrypt');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const jwtStrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;

const db = require('./db');

const options = {
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET, 
};

// LocalStrategy for user/pass logins
// This strategy retrieves the email and password from req.body called as middleware
// then attempts to find the account with the same email (fails if cannot find)
// then compares the password given to the one that is hashed in the database (fails if not equal)
// and authenticates the user if successful
passport.use('local', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    session: false,
},
async (email, password, done) => {
    try {
        const user = await db.from("Account").select('*').where('email', email);

        if(user[0]) {
            const passwordMatches = await bcrypt.compare(password, user[0].password)

            if(passwordMatches) {
                return done(null, user[0]);
            } else {
                return done(null, false, { message: 'invalid password'});
            }
        } else {
            done('invalid email');
        }
    } catch(err) {
        done(err);
    }
}));

// JWT Strategy for accessing protected routes
// This strategy accesses the email in the JWT and attempts to find it in the database
// if the user exists, it authenticates the user, if it does not, then they are given a 401 Unauthorized
passport.use('jwt', new jwtStrategy(options, async (jwt_payload, done) => {
    try {
        const user = await db.from("Account").select('*').where('email', jwt_payload.email);

        if(user[0]) {
            done(null, user[0]);
        } else {
            done(null, false);
        }
    } catch(err) {
        done(err);
    }
}));

// TODO: Facebook Strategy
// The idea is to authenticate using OAuth and check token from client by sending to FB
// If token is valid, then send them a JWT token while registering their information in the database

exports.modules = passport;