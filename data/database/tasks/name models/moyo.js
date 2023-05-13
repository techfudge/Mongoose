const mongoose = require('mongoose');
const Person = require('../../../first person');


mongoose.connect('mongodb+srv://norss8y:checkpoint@checkpoint.85yl0wl.mongodb.net/checkpoint?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });


const newPerson = new Person({
  name: 'moyo',
  age: 20,
  favoriteFoods: ['Rice', 'Fish']
});


newPerson.save((err, person) => {
  if (err) {
    console.log(err);
  } else {
    console.log(person);
  }
});