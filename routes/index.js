var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Страница: Асинхронность */
router.get('/async', function(req, res, next) {
    res.send("<h1>Страница: Асинхронность</h1>")
});

/* Страница: Массивы и методы */
router.get('/arrays', function(req, res, next) {
    res.send("<h1>Страница: Массивы и методы</h1>")
});

/* Страница: Замыкания */
router.get('/closures', function(req, res, next) {
    res.send("<h1>Страница: Замыкания</h1>")
});

module.exports = router;
