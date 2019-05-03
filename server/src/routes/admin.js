const router = require('express').Router();

const db = require('../db');
const Event = require('../class/Event');

// POST Event (Create an Event)
router.post('/event', async (req, res) => {
    if (req.user.type !== 2) {
        res.status(401).send();
    }

    await (new Event(req.body)).Save();

    res.status(200).send('Event created successfully!');
});

module.exports = router;
