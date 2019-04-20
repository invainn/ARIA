const router = require('express').Router();

router.get('/', (req, res) => {
    res.status(200).send({ message: 'we did it' });
});

module.exports = router;