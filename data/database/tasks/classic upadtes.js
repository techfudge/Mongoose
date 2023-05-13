Person.findById(personId, function(err, person) {
  if (err) return console.log(err);
  person.favoriteFoods.push("rice");
  person.save(function(err, updatedPerson) {
    if (err) return console.log(err);
    console.log(updatedPerson);
  });
});
