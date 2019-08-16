var express = require('express'); 
var bodyParser = require('body-parser')
 
// Nous définissons ici les paramètres du serveur.
var hostname = 'localhost'; 
var port = 3899; 
 
var app = express(); 

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
 
app.post('/', (req, res) => {
  console.log(req.body);
  res.json({
    "response_type": "in_channel",
    "text":"<!channel> Chute svp !"
  })
})

// Démarrer le serveur 
app.listen(port, hostname, function(){
	console.log("Mon serveur fonctionne sur http://"+ hostname +":"+port+"\n"); 
});
