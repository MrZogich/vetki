const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/testMongoose2024');

const Topic = mongoose.model('Topic', { name: String });

const item = new Topic({ name: 'Promise' });
item.save().then(() => console.log('Готово'));
