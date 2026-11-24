const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/testMongoose2024');

var Topic = require('./models/topic.js').Topic

var topic = new Topic({
    title: "Асинхронность",
    nick: "async",
})

topic.save();
