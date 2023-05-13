const mongoose = require("mongoose");
const connection = mongoose.createConnection("mongodb+srv://norss8y:checkpoint@checkpoint.85yl0wl.mongodb.net/checkpoint?retryWrites=true&w=majority");
module.exports = connection;

Person.create(arrayOfPeople, (err, people) => {
  if (err) {
    console.log(err);
  } else {
    console.log(people);
  }
});

Person.find({ name: 'John' }, (err, people) => {
  if (err) {
    console.log(err);
  } else {
    console.log(people);
  }
});

Person.findOne({ favoriteFoods: 'pizza' }, (err, person) => {
  if (err) {
    console.log(err);
  } else {
    console.log(person);
  }
});
