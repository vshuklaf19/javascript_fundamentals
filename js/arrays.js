// Exercises: Arrays

// EXERCISE: Your top choices
// Create an array to hold your top choices (colors, presidents, whatever).
// For each choice, log to the screen a string like: "My #1 choice is blue."


var colors = ["Blue", "Red", "Yellow", "Green"];

for (var i = 0; i < colors.length; i++){
  if (i == 0) {
    console.log("My 1st choice is " + colors[i]);
  }
  else if (i == 1) {
    console.log("My 2nd choice is " + colors[i]);
  }
  else if (i == 2) {
    console.log("My 3rd choice is " + colors[i]);
  }
  else if (i == 3){
    console.log("My 4th choice is " + colors[i]);
  }
};