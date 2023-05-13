Person.findOneAndUpdate({ name: moyo }, { age: 20 }, { new: true }, function(err, updatedPerson) {
  if (err) return console.log(err);
  console.log(updatedPerson);
});
