var express = require("express");
var router = express.Router();
var db = require("../config/db");

router.get('/home', (req, res) => {
    res.render('index');
});

module.exports = router;