var express = require['express'];
var bodyParser = require['body-parser'];

var app = express();
var part = process.env.PORT || 1337;

app.use(bodyParser.urlencoded({ectended: true}));

//health check 
app.get('/', function(req, res) {res.status(200).send('hello world!'); });

app.listen(port, function() {
    consol.log('Lisenting on port ' + port);
});

app.post('/hello', function(req, res, next) {
    var userName = req.body.user_name;
    var botPayload = {
        text: 'Hello ' + userName + ', Welcome to the Adam Slack Channel, Enjoy!'
    };

    if (userName !== 'slackbot') {
        return res.status(200).json(botPayload);
    } else {
        return res.status(200).end();
    }
});