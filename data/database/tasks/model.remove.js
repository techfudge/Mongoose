Person.remove({ name: "Mary" }, function(err, result) {
  if (err) return console.log(err);
  console.log(result);
});
