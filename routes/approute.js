var express = require("express");
var router = express.Router();

router.get('/home', (req, res) => {
    res.render('index');
});

module.exports = router;