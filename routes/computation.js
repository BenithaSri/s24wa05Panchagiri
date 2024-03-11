var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {

    var x = Math.floor(Math.random() * 50);
    var y = Math.floor(Math.random() * 50);

    if (req.query.x) {
        x = parseInt(req.query.x);
    }


    function calcAngleDegrees(x, y) {
        return (Math.atan2(y, x) * 180) / Math.PI;
    }
    console.log(x);
    console.log(y);
    console.log(calcAngleDegrees(x, y));
    res.send(`Math.atan2() applied to ${x} and  ${y} is ${calcAngleDegrees(x, y)}`);
});


module.exports = router;
