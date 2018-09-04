const app = require('express')();
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());

// Routes should be declared in their separate files
// This is just an example route
app.get('/', (req, res, next) => {
  const obj = {
    data: 'we did it'
  };

  res.status(200).send(obj);
});

module.exports = app;