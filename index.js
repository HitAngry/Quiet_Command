let express = require('express'); 
let bodyParser = require('body-parser');
let config = require('./config');

let app = express();
console.log(config);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
 
app.post('/', (req, res) => {
  console.log(req.body);
  fetch(`//https://slack.com/api/users.info?token=${config.token}&user=${req.body.user_id}`)
  .then(result => result.json)
  .then(result => {
    console.log(result);
  })
  res.json({
    "response_type": "in_channel",
    "text":"<!channel> Be quiet please !"
  });
});

app.listen(config.port, config.hostname);
