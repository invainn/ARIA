const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const router = require('express').Router();

const db = require('../db');
const Account = require('../class/Account');

// POST Account (Check if email exists)
router.post('/email', async (req, res) => {
    const { email } = req.body;

    const emailExists = await db.from("Account").select('*').where('email', email);
    
    if(emailExists[0]) {
        return res.status(400).send({ error: 'email exists!' });
    } 

    return res.status(200).send({ error: 'email does not exist' });
});

// POST Account (Check if token is valid)
router.post('/token', passport.authenticate('jwt', { session: false }), (req, res) => {
    res.status(200).send({ 
        message: 'token is valid',
        type: req.user.type,
        name: `${req.user.first_name} ${req.user.last_name}`,
        id: req.user.id,
    });
});

// POST Account (Register)
// This function creates an Account object off of data retrieved from req.body
// then saves the Account object to the database
router.post('/register', async (req, res, next) => {
    const { 
        email,
        password,
        first_name,
        last_name,
    } = req.body;

    try {
        const hash = await bcrypt.hash(password, 12);
        const user = new Account({ email, password: hash, first_name, last_name, });

        await user.Save();

        return res.status(201).send('Successful Registration!');
    } catch(err) {
        return res.status(400).send({ error: 'invalid body request' });
    }
});

// POST Account (Login)
// Check LocalStrategy in passport.js for authentication details
// This function creates a payload, attaches it to the req.user object
// then creates a token with the payload and signs it with our secret
// and sends it off to the frontend which gets stored in Redux
router.post('/login', (req, res, next) => {
    passport.authenticate('local', { session: false }, (err, user, info) => {
        if (err || !user) {
            return res.status(401).send({ err });
        }

        const payload = {
            email: user.email,
            exp: Math.floor(Date.now() / 1000) + (60 * 60), // Expires in 1 hour
        };

        req.login(payload, { session: false }, (err) => {
            if(err) {
                return res.status(401).send({ error });
            }

            const token = jwt.sign(payload, process.env.JWT_SECRET);

            res.json({ 
                token, 
                type: user.type,
                name: `${user.first_name} ${user.last_name}`,
                id: req.user.id,
            }).status(200);
        });
    })(req, res, next);
});


module.exports = router;