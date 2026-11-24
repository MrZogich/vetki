const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/testMongoose2024');

var schema = mongoose.Schema({ name: String })

schema.methods.describe = function(){
    console.log(this.name + " — тема сохранена")
}

const Topic = mongoose.model('Topic', schema);

const item = new Topic({ name: 'Promise' });
item.save().then(() => item.describe());
