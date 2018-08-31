const app = require('express')();
const bodyParser = require('body-parser');

// Constants
const PORT = process.env.PORT || 8080;
const HOST = '0.0.0.0';

// Routes should be declared in their separate files
// This is just an example route
app.get('/api', (req, res, next) => {
  res.status(200).send('We did it');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);