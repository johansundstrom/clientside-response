/*------------------------------------
documentation: http://expressjs.com/en/5x/api.html
1. setup
2. definiera inkommande JSON data
3. serve static assets from 'public'
4. Routes HTTP POST requests to the specified path och callback
5. Binds and listens for connections on the specified host and port
------------------------------------*/

//setup
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

//definiera inkommande JSON data
const options = {
  limit: '10kb', 
  type: 'application/json'
};
app.use(express.json(options));

//serve static assets from 'public'
app.use(express.static('public'));

//Routes HTTP POST requests to the specified path och callback
app.post('/api', (request, response) => {
  const data = request.body;
  console.log(data);

  //Sends a JSON response
  response.json({
    response: 'success',
    timestamp: data.timestamp,
    lon: data.lon,
    lat: data.lat
  });
});

//Binds and listens for connections on the specified host and port
app.listen(port, function() {
 console.log('App listening on port: ' + port);
});
