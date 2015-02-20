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