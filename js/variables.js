// EXERCISE: The Fortune Teller

// Why pay a fortune teller when you can just program your fortune yourself?
// Store the following into variables: number of children, partner's name, geographic location, job title.
// Output your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."

var jobTitle = "Software Developer";
var geographicLocation = "Toronto";
var partnerName = "Adriana Lima";
var numberOfChildren = 2;

document.write("You will be a " + jobTitle + " in " + geographicLocation + ", and married to " + partnerName + " with " + numberOfChildren + " kids."); 
document.write("<br>");

// EXERCISE: The Age Calculator

// Forgot how old someone is? Calculate it!
// Store the current year in a variable.
// Store their birth year in a variable.
// Calculate their 2 possible ages based on the stored values.
// Output them to the screen like so: "They are either NN or NN", substituting the values.

var currentYear = 2015;
var birthYear = 1990;

var age1 = currentYear - birthYear;
var age2 = age1 - 1;

document.write("They are either " + age1 + " or " + age2 + ".");
document.write("<br>");

// EXERCISE: The Lifetime Supply Calculator

// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!
// Store your current age into a variable.
// Store a maximum age into a variable.
// Store an estimated amount per day (as a number).
// Calculate how many you would eat total for the rest of your life.
// Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".

var currentAge = 25;
var maxAge = 70;
var amount = 5;

var lifeTimeSupplyCost = (maxAge - currentAge) * amount * 365;

document.write("You will need $" + lifeTimeSupplyCost + " to last until the ripe old age of " + maxAge + ".");
document.write("<br>");

// EXERCISE: The Geometrizer

// Calculate properties of a circle, using the definitions here.
// Store a radius into a variable.
// Calculate the circumference based on the radius, and output "The circumference is NN".
// Calculate the area based on the radius, and output "The area is NN".

var radius = 10;
var circumference = 2 * 3.14 * radius;
var area = 3.14 * radius * radius;

document.write("The circumference is " + circumference + " units.");
document.write("The area is " + area + " units.");
document.write("<br>");

// EXERCISE: The Temperature Converter

// It's hot out! Let's make a converter based on the steps here.
// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."

var celcius1 = 24;
var farheinheit1 = (celcius1 * 2) + 30;

document.write(celcius1 + "*C is " + farheinheit1 + "*F.");
document.write("<br>");

var farheinheit2 = 80;
var celcius2 = (farheinheit2 - 32) * 5/9;

document.write(farheinheit2 + "*F is " + celcius2 + "*C.");