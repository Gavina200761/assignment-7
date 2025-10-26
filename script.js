console.log("Hello World!");
// 1. Create an array called favoriteFoods with at least 6 foods you love.

let favoriteFoods = ["Pizza", "Zaxby's", "Chipotle", "McDonald's", "Pozole", "Tamales"]

// 2. Loop through the list and print: "One of my favorite foods is ______."


for (let i = favoriteFoods.length; i > 0; i--){
  console.log("One of my favorite foods is " + favoriteFoods[i-1]  + ".");
}


// 3. Print out the rating for each food with a ranking like:
// "My #1 favorite food is Ramen" (copy/paste for all items)
// "My #2 favorite food is Sushi"
// ...etc.


console.log("My #1 favorite food is " + favoriteFoods[0]);
console.log("My #2 favorite food is " + favoriteFoods[1]);
console.log("My #3 favorite food is " + favoriteFoods[2]);
console.log("My #4 favorite food is " + favoriteFoods[3]);
console.log("My #5 favorite food is " + favoriteFoods[4]);
console.log("My #6 favorite food is " + favoriteFoods[5]);


// 4a. Create a function printFoodRecommendation(foodName) that prints out the following for the foodName provided
    // "Have you ever tried ____?"
    // "I always recommend ____ to friends."
    // "Trust me — ____ is delicious."

function printFoodRecommendation(foodName) {
  console.log("Have you ever tried " + foodName + "?");
  console.log("I always recommend " + foodName + " to friends.");
  console.log("Trust me — " + foodName + " is delicious.");
}


// 4b. Call the function at least 3 times

printFoodRecommendation("Menudo")
printFoodRecommendation("Pozole")
printFoodRecommendation("Tamales")

// Here's a list of 50 friends' favorite foods:
let friendFavorites = [
    "Pizza", "Sushi", "Pasta", "Falafel", "Burgers", "Ramen", "Pad Thai", "Curry", "Pho", "Nachos", "Gnocchi", "Donuts", "Steak", "Lasagna", "Biryani", "Tacos", "Croissant", "Churros", "Fried Rice", "Shawarma", "Miso Soup", "BBQ Ribs", "Hotpot", "Enchiladas", "Baklava", "Gyros", "Hummus", "Empanadas", "Pancakes", "Muffins", "Samosas", "Macarons", "Quiche", "Pierogi", "Arepas", "Okonomiyaki", "Ceviche", "Brisket", "Bao Buns", "Poutine", "Clam Chowder", "Fajitas", "Canelé", "Kimchi", "Tamales", "Omelette", "Biscuits", "Tempura", "Spring Rolls", "Crepes"
  ];

// 5. Print out only foods that have an "a" in the name. For example, "Pizza" would not be included, but "Pasta" would be.

//This will print a word if any of it's letters is an 'a'.
console.log("ANY WORDS WITH AN 'A' IN THEM.");
for (let i = 0; i < friendFavorites.length; i++){
  if (friendFavorites[i].includes("a")){
    console.log(friendFavorites[i] + " has an 'a' in the name.");
  }
}

//This will print a word in the index solely if it has an 'a' in it, excluding words that only end with an 'a'.
//I didn't know if capitalized "A's" counted so I implemented that filter just in case.
console.log("ANY WORDS WITH AN 'A' IN THEM, EXCLUDING WORDS THAT ONLY START/END IN AN 'A'.");
for (let i = 0; i < friendFavorites.length; i++){
  if (friendFavorites[i].includes("a")){
    let temp = friendFavorites[i];

    if (temp[0] != ("a", "A") && temp[temp.length - 1] != "a"){
      console.log(friendFavorites[i] + " has an 'a' INSIDE the name.");
    }
  }
}

// 6. Store the result in an array called foodsWithA. Print out the array.

let foodsWithA = [];

for (let i = 0; i < friendFavorites.length; i++){
  if (friendFavorites[i].includes("a")){
    let temp = friendFavorites[i];

    if (temp[0] != ("a", "A") && temp[temp.length - 1] != "a"){
      foodsWithA.push(temp);
    }
  }
}

console.log(foodsWithA);

// 7. Create a new array longFoodNames for foods with names longer than 6 characters.

let longFoodNames = []

for (let i = 0; i < friendFavorites.length; i++){
  if (friendFavorites[i].length > 6){
    longFoodNames.push(friendFavorites[i]);
  }
}

console.log(longFoodNames);

// 8. Create another array shortFoodNames for foods 6 characters or shorter.

let shortFoodNames = []

for (let i = 0; i < friendFavorites.length; i++){
  if (friendFavorites[i].length <= 6){
    shortFoodNames.push(friendFavorites[i]);
  }
}

console.log(shortFoodNames);

// 9. Print both arrays and compare:
// "There are more long-named foods." OR "There are more short-named foods."


// 10. STRETCH: Find the longest food name and print:
// "The longest food name in the list is ______ with ___ characters."
