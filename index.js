const { request } = require('express');
let express = require('express');
let port = process.env.PORT || 3000;
let app = express();

app.use(express.static('public'));
app.use(express.json({limit: '10kb'}));

app.post('/api', (request, response) => {
  console.log(request.body);
  const data = request.body;
  const timestamp = Date.now();
  data.timestamp = timestamp;
  response.json({
    status: 'success',
    timestamp: data.timestamp,
    first: data.first,
    last: data.last,
    age: data.age
  });
});

app.listen(port, function() {
 console.log('App listening on port: ' + port);
});