// *******************************
// START HERE IF YOU WANT A MORE CHALLENGING STARTING POINT FOR THIS ASSIGNMENT
// *******************************
//
// Module 4 Assignment Solution

// STEP 1:
(function () {

  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  // STEP 10:
  for (var i = 0; i < names.length; i++) {

    // STEP 11:
     var firstLetter = names[i].charAt(0).toLowerCase();

    // STEP 12:
    if (firstLetter == 'j') {
      byeSpeaker.speak(names[i])
    } else {
      helloSpeaker.speak(names[i])
    }
  }
})();

