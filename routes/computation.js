var express = require('express');
var router = express.Router();
var x = Math.floor(Math.random()*100);
var y = Math.floor(Math.random()*100);

/* GET users listing. */
router.get('/', function (req, res, next) {

    function calcAngleDegrees(x, y) {
        return (Math.atan2(y, x) * 180) / Math.PI;
    }

    console.log(calcAngleDegrees(x, y));
    res.send(`Math.atan2() applied to ${x} and  ${y} is ${calcAngleDegrees(x, y)}`);
});


module.exports = router;
