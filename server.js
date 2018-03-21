const express = require('express');
const fs = require('fs'); 	// filesystem
const util = require('util');

const app = express();
const port = process.env.PORT || 5000;

app.get('/receiver', (req, res) => {
	const ip = req.header('x-forwarded-for') || req.connection.remoteAddress;
  	fs.appendFile('visitors-data', `#DATE#${Date()}#IP#${ip}#REFERER#${req.header('referer')}#USER-AGENT#${req.header('user-agent')}\n`, function (err) {
	  if (err) throw err;
	  console.log('Saved!');
	});
	res.statusCode = 404;
	res.end();
});

app.listen(port, () => console.log(`Listening on port ${port}`));

