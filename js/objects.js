// Exercises: Objects

// EXERCISE: The Recipe Card

// Never forget another recipe!
// Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings).
// On separate lines (one console.log statement for each), log the recipe information so it looks like:
// Mole
// Serves: 2
// Ingredients:
// cinnamon
// cumin
// cocoa

var recipe = {
  title: "Rajma",
  servings: 4,
  ingredients: ["beans", "onions", "tomoatoes", "salt"]
};

console.log(recipe["title"]);
console.log("Serves: " + recipe["servings"]);
console.log("Ingredients:");
  for (var i = 0; i < recipe["ingredients"].length; i++){
    console.log(recipe["ingredients"][i]);
  }

  // EXERCISE: The Reading List

// Keep track of which books you read and which books you want to read!
// Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).
// Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
// Now use an if/else statement to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'

var readingList = [
  {title: "Harry Potter",
    author: "J K Rowling",
    alreadyRead: true},
    {title: "The Hobbit",
    author: "J.R.R. Tolkien",
    alreadyRead: false},
  {title: "Game of Thrones",
    author: "George R. R. Martin",
    alreadyRead: false}
]

for (var i = 0; i < readingList.length; i ++){
  console.log(readingList[i].title + " by " + readingList[i].author);
  if (readingList[i].alreadyRead == true){
    console.log('You already read "' + readingList[i].title + '" by ' + readingList[i].author);
  }else {
    console.log('You still need to read "' + readingList[i].title + '" by ' + readingList[i].author);
  }
}

// EXERCISE: The Movie Database

// It's like IMDB, but much much smaller!
// Create an object to store the following information about your favorite movie: title (a string), duration (a number), and stars (an array of strings).
// Create a function to print out the movie information like so: "Puff the Magic Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes."


var movieDB = {
  title: "Guardians of the Galaxy",
  duration: 100,
  stars: ["Chris Pratt", "Zoe Saldana", "Vin Diesel", "Bradley Cooper"]
}

function printMovie(movie) {
  stars = movie.stars.toString();
  console.log(movie.title + " lasts for " + movie.duration + " minutes. Stars: " + stars);
}

printMovie(movieDB);