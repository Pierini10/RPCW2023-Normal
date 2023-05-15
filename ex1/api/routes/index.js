var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.writeHead(200, { "Content-Type": "text/json; charset=utf-8" });
  res.write(
    "API de Dados"
  );
  res.end();
});

module.exports = router;
