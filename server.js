var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;

  var routes = require('./api/routes/helloBlockchainRoutes'); //importing route
routes(app); //register the route

app.listen(port);

console.log('Hello Blockchain RESTful API server started on: ' + port);