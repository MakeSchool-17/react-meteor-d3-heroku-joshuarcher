Hours = new Meteor.Collection("Hours");

Meteor.methods({
  // 2 params, # hours and date
  insertHour: function(nHours, date) {
    nHours = parseInt(nHours);
    check(nHours, Number);
    check(date, Date);

    return Hours.insert({
      numberHours: nHours,
      date: date
    });
    // parse first paramter to make sure it's an int
    // use the check functions to ensure that the first parameter is a number
    // use the check function to ensure the second paramater is a date
    // return the insert function (add a key value pair of first and second paramter into the hours collection)
  },
  // 1 param, the id to remove an entry
  removeHour: function(itemId) {
    check(itemId, String);
    return Hours.remove(itemId);
    // use the check function to make sure the paramter is a string
    // return the remove funciton (remove an entry from the hourse collection)
  }
});
