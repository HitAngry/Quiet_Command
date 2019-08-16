let express = require('express'); 
let bodyParser = require('body-parser');
 
let port = 3899; 
let hostname = "localhost";
let app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
 
app.post('/', (req, res) => {
  console.log(req.body);
  res.json({
    "response_type": "in_channel",
    "text":"<!channel> Be quiet please !"
  });
});

app.listen(port, hostname);
