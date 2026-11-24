var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Страница: Асинхронность */
router.get('/async', function(req, res, next) {
    res.render('topic', {
        title: "Асинхронность",
        picture: "/images/async.png",
        desc: "Современный способ работы с асинхронным кодом через async/await. Читается как синхронный, работает как асинхронный."
    });
});

/* Страница: Массивы и методы */
router.get('/arrays', function(req, res, next) {
    res.render('topic', {
        title: 'Массивы и методы',
        picture: "/images/arrays.jpeg",
        desc: "Цепочки методов map, filter, reduce — сердце функционального стиля в JS."
    });
});

/* Страница: Замыкания */
router.get('/closures', function(req, res, next) {
    res.render('topic', {
        title: 'Замыкания',
        picture: "/images/closures.png",
        desc: "Функция «запоминает» своё лексическое окружение — основа для модулей, счётчиков и приватных переменных."
    });
});

module.exports = router;
