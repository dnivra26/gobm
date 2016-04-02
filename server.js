var path = require('path'),
  express = require('express'),
  request = require('request'),
  app = express();

var PORT = 3016;

app.use('/assets', express.static('assets'));

app.get('/api/dashboard', function (req, res) {

  const username = '';
  const password = '';
  const domain = '';

  const headers = {
    Accept: 'application/vnd.go.cd.v1+json',
    Authorization: `Basic ${new Buffer(`${username}:${password}`).toString('base64')}`,
  };

  request({
    headers,
    uri: `http://${domain}:8153/go/api/dashboard.json`,
    method: 'get',
  }, function (err, response, body) {
    res.json(JSON.parse(body));
  });
});

app.get("*", function (req, res) {
  res.render(path.join(__dirname, 'app', 'index.jade'));
});

app.listen(PORT, function (error) {
  if (error) {
    console.error(error);
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", PORT, PORT);
  }
});
