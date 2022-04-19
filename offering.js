// Where all food and drink item offerings are stored in objects. Exported in arrays of objects.

// Food Category
var curryRice = {
    text: "Japanese Curry Rice",
    code: "F1",
    cost: 9.0
}

var bowl = {
    text: "Classic Japanese Rice Bowl",
    code: "F2",
    cost: 6.5
}

var ramen = {
    text: "Japanese Ramen Bowl",
    code: "F3",
    cost: 8.3
}
 
// Side Dish Category
var salad = { text: "Salad", code: "S1", cost: 4.0 }
var gyoza = { text: "Gyoza", code: "S2", cost: 5.0 }
var miso = { text: "Miso Soup", code: "S3", cost: 3.4 } 

// Drinks Category
var yuzu = {
    text: "Yuzu Tea",
    code:"D1",
    cost: 2.5
}

var greenTea = {
    text:"Japanese Green Tea",
    code:"D2",
    cost: 3.0

}

var cannedDrink = {
    code:"D3",
    text:"Canned Drink",
    type: "none",
    cost:2.5,
    cannedDrinkTypes: ["Coke", "Sprite", "Root Beer", "Oolong Tea"] // List of canned drinkn brands
}

// Export Lists
exports.foodList = [curryRice, bowl, ramen];
exports.drinksList = [yuzu, greenTea, cannedDrink];
exports.sideDishList = [salad, gyoza, miso];




