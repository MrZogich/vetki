var express = require('express');
var router = express.Router();
var data = require('../data').data;

/* GET home page. */
router.get('/', function(req, res, next) {
  var order = ['async', 'arrays', 'closures'];
  var topics = data.slice().sort(function(a, b) {
    return order.indexOf(a.nick) - order.indexOf(b.nick);
  });
  res.render('index', { title: 'JavaScript', topics: topics, active: 'home' });
});

module.exports = router;
