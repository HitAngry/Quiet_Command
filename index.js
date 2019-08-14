// const SlackBot = require('slackbots');
// const dotenv = require('dotenv')

// const bot = new SlackBot({
//   token: process.env.TOKEN,
//   name: process.env.NAME
// });

// bot.on('message', function(data) {
//   if(data.type !== 'error' && data.content !== undefined) {
//     bot.postMessageToChannel(process.env.STAFF_CHANNEL, data.content);
//   }
// });

var express = require('express'); 
 
// Nous définissons ici les paramètres du serveur.
var hostname = 'localhost'; 
var port = 3000; 
 
var app = express(); 
 
app.post('/', (req, res) => {
  console.log(req);
  res.send(200)
})

// Démarrer le serveur 
app.listen(port, hostname, function(){
	console.log("Mon serveur fonctionne sur http://"+ hostname +":"+port+"\n"); 
});