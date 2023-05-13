Person.findByIdAndRemove(personId, function(err, removedPerson) {
  if (err) return console.log(err);
  console.log(removedPerson);
});
