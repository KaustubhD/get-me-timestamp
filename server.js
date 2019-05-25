// server.js
// where your node app starts

// init project
const express = require('express');
const app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function(request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get('/api/timestamp/:date?', (req, res) => {
  let date_str = req.params.date
  
  let d
  let obj = {}
  
  console.log(date_str)
  if(!date_str){
    d = new Date()
  }
  else if(!isNaN(Number(date_str))){
    d = new Date(Number(date_str))
  }
  else{
    d = new Date(date_str)
  }
  obj = {
    unix: d.getTime(),
    utc: d.toUTCString()
  }
  res.json(obj)
})
// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
