const router = require('express').Router();

// Routes should be declared in their separate files
// This is just an example route
router.get('/', (req, res, next) => {
  if(req.user.type === 0) {
    res.status(200).send(req.user);
  } else {
    res.status(401).send('Unauthorized');
  }
});

module.exports = router;