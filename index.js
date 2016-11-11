var express = require('express');

const app = express();
app.get('/', (req, res, next) => {

  const username = typeof(req.query.username)=="undefined" ? "Empty Empty Empty" : req.query.username;
  const result = /[a-z\d_]+$/gi.exec(username.replace(/\?.+$/gi, ''));
  res.send(`Query: ${req.originalUrl} <br>-<br>Вывод: @${result[0]}`);

});

app.listen(3000, () => {
	console.log('App listening on port 3000!');
});
  