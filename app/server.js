(function() {
  'use strict';
  var express = require('express');

  var app = express();
  app.use(express.static('./'));

	app.get('/pdf/a08.pdf', function (req, res) {
		res.sendFile(__dirname + '/public/a08.pdf');
	})
  app.listen(80);
})();