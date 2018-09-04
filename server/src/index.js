const app = require('express')();
const bodyParser = require('body-parser');
const cors = require('cors');

// Constants
const PORT = process.env.PORT || 8080;
const HOST = '0.0.0.0';

app.use(cors());

// Routes should be declared in their separate files
// This is just an example route
app.get('/', (req, res, next) => {
  const obj = {
    data: 'we did it'
  };

  res.status(200).send(obj);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);