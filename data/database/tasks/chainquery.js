Person.find({ favoriteFoods: "Chicken" })
  .sort("Dayo")
  .limit(2)
  .select("-age")
  .exec(function(err, data) {
    if (err) return console.log(err);
    console.log(data);
  });
