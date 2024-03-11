var express = require('express');
var router = express.Router();
var x = Math.floor(Math.random());

/* GET users listing. */
router.get('/', function(req, res, next) {

  var y = (Math.cbrt(x));
  res.send(`Math.cbrt() to ${x} is ${y} `);
});


module.exports = router;
