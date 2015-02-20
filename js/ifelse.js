// Exercises: if/else statements

// EXERCISE: What number's bigger?
// Write a function named greaterNum that:
// takes 2 arguments, both numbers.
// returns whichever number is the greater (higher) number.
// Call that function 2 times with different number pairs, and log the output to make sure it works (e.g. "The greater number of 5 and 10 is 10.").

function greaterNum(num1, num2) {
  if (num1 > num2) {
    return num1 + " is greater than " + num2;
  } 
  else {
    return num2 + " is greater than " + num1;
  }
};

greaterNum(10,68);
greaterNum(12,2);

// EXERCISE: The World Translator

// Write a function named helloWorld that:
// takes 1 argument, a language code (e.g. "es", "de", "en")
// returns "Hello, World" for the given language, for atleast 3 languages. It should default to returning English.
// Call that function for each of the supported languages and log the result to make sure it works.

function helloWorld(langCode) {
  if (langCode === "esp") {
    return "Hola, Mundo";
  }
  else if (langCode ==="de") {
    return "Bonjour, le Monde";
  }
  else if (langCode === "ger") {
    return "Hallo, Welt"; 
  }
  else {
    return "Hello, World";
  }
};

helloWorld("potato");
helloWorld("ger");

// EXERCISE: The Grade Assigner

// Write a function named assignGrade that:
// takes 1 argument, a number score.
// returns a grade for the score, either "A", "B", "C", "D", or "F".
// Call that function for a few different scores and log the result to make sure it works.

function assignGrade(numberScore) {
  if (numberScore >= 80) {
    return "A";
  }
  else if (80 > numberScore  && numberScore >= 70) {
    return "B";
  }
  else if (70 > numberScore && numberScore >= 60) {
    return "C";
  }
  else if (60 > numberScore && numberScore >= 50) {
    return "D";
  }
  else {
    return "F";
  }
};

assignGrade(34);
assignGrade(65);
assignGrade(89);
assignGrade(51);

// EXERCISE: The Pluralizer

// Write a function named pluralize that:
// takes 2 arguments, a noun and a number.
// returns the number and pluralized form, like "5 cats" or "1 dog".
// Call that function for a few different scores and log the result to make sure it works.
// Bonus: Make it handle a few collective nouns like "sheep" and "geese".

function pluralize(noun, number) {
  if (number === 1) {
    return number + " " + noun;
  }
  else {
    return number + " " + noun + "s";
  }
};

pluralize("parrot", 3);
pluralize("chocolate", 1);
