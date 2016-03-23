var path = require('path'),
    express = require('express'),
    app = express();

var PORT = 3016;

app.use('/assets', express.static('assets'));
app.get("*", function(req, res) {
    res.render(path.join(__dirname, 'app', 'index.jade'));
});

app.listen(PORT, function(error) {
    if (error) {
        console.error(error);
    } else {
        console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", PORT, PORT);
    }
});
