const router = require('express').Router();

router.get('/', (req, res) => {
    res.status(200).send(req.user);
});

module.exports = router;