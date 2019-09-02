let express = require('express'); 
let bodyParser = require('body-parser');
let config = require('./config');
let axios = require('axios');

let app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
 
app.post('/', (req, res) => {
  axios(`https://slack.com/api/users.info?token=${config.token}&user=${req.body.user_id}`)
  .then(result => {
    if(config.whitelist.includes(result.data.user.profile.email)){
      res.json({
        "response_type": "in_channel",
        "text":"<!channel> Be quiet please !"
      });
    } else {
      res.json({
       "response_type": "ephemeral",
       "text":"You got no right for this"
      });
    }
  })
});

app.listen(config.port, config.hostname);
