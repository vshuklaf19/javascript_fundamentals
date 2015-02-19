// Exercises: Functions

// EXERCISE: The Fortune Teller

// Why pay a fortune teller when you can just program your fortune yourself?
// Write a function named tellFortune that:
// takes 4 arguments: number of children, partner's name, geographic location, job title.
// outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
// Call that function 3 times with 3 different values for the arguments.

function tellFortune(jobTitle, geographicLocation, partnerName, numberOfChildren) {
    var message = "You will be a " + jobTitle + " in " + geographicLocation + ", and married to " + partnerName + " with " + numberOfChildren + " kids.";
    return message;
};

tellFortune("Footballer", "Manchester", "Kate Upton", "5");
tellFortune("Cricketer", "Melbourne", "Mila Kunis", "2");
tellFortune("Electrical Engineer", "London", "Sienna Miller", "3");

// EXERCISE: The Age Calculator

// Forgot how old you are? Calculate it!

// Write a function named calculateAge that:
// takes 2 arguments: birth year, current year.
// calculates the 2 possible ages based on those years.
// outputs the result to the screen like so: "You are either NN or NN"
// Call the function three times with different sets of values.

function calculateAge(birthYear, currentYear) {
  var age1 = currentYear - birthYear;
  var age2 = age1 - 1;

  var message = "You are either " + age2 + " or " + age1;
  return message;
};

calculateAge(1990, 2015);
calculateAge(1947, 2015);
calculateAge(1985, 2012);

// EXERCISE: The Lifetime Supply Calculator

// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!
// Write a function named calculateSupply that:
// takes 2 arguments: age, amount per day.
// calculates the amount consumed for rest of the life (based on a constant max age).
// outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
// Call that function three times, passing in different values each time.

function calculateSupply(age, amountPerDay) {
  var maxAge = 75;
  var amount = (maxAge - age) * amountPerDay * 365;
  var message = "You will need S" + amount + " to last you until the ripe old age of " + maxAge;
  return message;
};

calculateSupply(23, 10);
calculateSupply(37, 15);
calculateSupply(11, 3);

// EXERCISE: The Geometrizer

// Create 2 functions that calculate properties of a circle, using the definitions here.
// Create a function called calcCircumfrence:
// Pass the radius to the function.
// Calculate the circumference based on the radius, and output "The circumference is NN".
// Create a function called calcArea:
// Pass the radius to the function.
// Calculate the area based on the radius, and output "The area is NN".

function calcCircumfrence(radius) {
  var circumfrence = 2 * 3.14 * radius;
  var message = "The circumfrence is " + circumfrence + " units.";
  
  return message;
};

function calcArea(radius) {
  var area = 3.14 * radius * radius;
  var message = "The area is " + area + " units.";
  
  return message;
};

calcCircumfrence(12);
calcArea(3);

// EXERCISE: The Temperature Converter

// It's hot out! Let's make a converter based on the steps here.
// Create a function called celsiusToFahrenheit:
// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Create a function called fahrenheitToCelsius:
// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."

function celsiusToFahrenheit(celsius) {
  var fahrenheit = (celsius * 2) + 30;
  var message = celsius + "*C is " + fahrenheit + "*F." 

  return message;
};

function fahrenheitToCelsius(farheinheit) {
  var celsius = (farheinheit - 32) * 5/9;
  var message = farheinheit + "*F is " + celsius + "*C." 

  return message;
};

celsiusToFahrenheit(24);
fahrenheitToCelsius(88);


