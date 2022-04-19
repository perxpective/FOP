// Main Application Logic

// ASCII Art Title
console.log(`
==========================================================================
█▄░█ █ █▀▀ █▀▀ █▀▄▀█ █▀▀ ▄▀█ █░░   █▀█ █▀▀ █▀ ▀█▀ ▄▀█ █░█ █▀█ ▄▀█ █▄░█ ▀█▀
█░▀█ █ █▄▄ ██▄ █░▀░█ ██▄ █▀█ █▄▄   █▀▄ ██▄ ▄█ ░█░ █▀█ █▄█ █▀▄ █▀█ █░▀█ ░█░
==========================================================================
`)

// Imports
var input = require('readline-sync')
var offering = require('./offering')
var sideDishList = offering.sideDishList
var drinksList = offering.drinksList
var foodList = offering.foodList
var Order = require('./order')
var Cart = require('./orderCart')
const fs = require('fs')

// Class Imports
const utilities = require('./class')
const fn = new utilities()
const print = require('./display')
const orderCart = new Cart()

// Variable Declartions
var meatList = ["Beef", "Chicken", "Pork"]  // List of meat choices
var sizeList = ["S", "M", "L", "XL"]    // List of size choices
var spicyLevelList = ['1', '2', '3', '4']   // List of spiciness level choices
var costList = []   // List of costs of ordered items
var bill = 0    // Total cost of orders added
var orderList = []  // List of orders
var discount = ""

// Writes coupon into text file coupon.txt
const coupon = fn.couponCode()
fs.writeFileSync('coupon.txt', coupon, (err) => {
    // In case of a error throw err.
    if (err) throw err;
})

// Loop iterates until '0' is inputted to break out of loop and end the program
while (true) {
    print.printMainMenu() // prints main menu
    var menuPrompt = fn.userSelection(0, 3) // Main menu options
    // Main Menu Options

    // Choice 1: Food Menu
    if (menuPrompt === 1) {
        // Prints Food Menu
        print.printFoodMenu()
        // Category Choices
        var categoryPrompt = fn.userSelection(0, 3)
        // User chooses to order food by choosing option 1
        if (categoryPrompt == 1) {
            // Print Food Menu
            console.log("\t\t[FOOD MENU]")
            console.log("\t\tSelect your dish: ")
            fn.printListMenu(foodList)
            console.log("- Press '0' to cancel selection")

            // Food Choice Selection
            var foodOrderPrompt = fn.userSelection(0, foodList.length)
            // User chooses to order curry rice by choosing option 1
            if (foodOrderPrompt == 1) {
                // User given choice of meat for curry rice dish
                console.log("\t\t\tChoose your meat:")
                fn.printChoices(meatList)

                // Obtain user input for meat choice and store it in a choice variable
                var meatPrompt = fn.userSelection(1, meatList.length)
                var meatChoice = meatList[meatPrompt - 1]

                console.log("\t\t\tChoose your Spice Level: ")

                // Obtain user input for spice level and store it in a choice variable
                var spicyLevelPrompt = fn.slider(1, spicyLevelList.length, 1)
                var spiceLevelChoice = spicyLevelList[spicyLevelPrompt - 1]

                console.log("\n\t\t\tChoose your size: ")
                fn.printChoices(sizeList)

                // Obtain user input for size choice and store it in a choice variable
                var sizePrompt = fn.userSelection(1, sizeList.length)
                var sizeChoice = sizeList[sizePrompt - 1]

                // Prompt user for order quantity
                quantity = fn.quantity()

                // Create a new order class to gather all prompts into a single string
                var order = new Order()
                var curryOrder = order.getCurryOrder(meatChoice, spiceLevelChoice, sizeChoice, foodList[foodOrderPrompt - 1].cost, quantity)  // Compiles all customizations into one order string
                orderCart.addCart(costList, foodList[foodOrderPrompt-1].cost, quantity, orderList, curryOrder)  // Adds to cart
                bill = orderCart.addBill(bill, foodList[foodOrderPrompt - 1].cost, quantity)    // Adds to bill
                orderCart.printOrder(curryOrder)    // Print orders added to cart

            }
            // User chooses to order rice bowl by choosing option 2
            else if (foodOrderPrompt == 2) {
                // Choice of meat prompt
                console.log("\t\t\tChoose your meat:")
                fn.printChoices(meatList)

                // Obtain user input for meat choice and store it in a choice variable
                var meatPrompt = fn.userSelection(1, meatList.length)
                var meatChoice = meatList[meatPrompt - 1]

                // Choice of bowl size
                console.log("\t\t\t Choose your size: ")
                fn.printChoices(sizeList)

                // Obtain user input for size choice and store it in a choice variable
                var sizePrompt = fn.userSelection(1, sizeList.length)
                var sizeChoice = sizeList[sizePrompt - 1]

                // prompt user for order quantity
                var quantity = fn.quantity()

                // create a new order class to gather all prompts into a single string
                var order = new Order()
                var bowlOrder = order.getBowlOrder(meatChoice, sizeChoice, foodList[foodOrderPrompt - 1].cost, quantity)
                orderCart.addCart(costList, foodList[foodOrderPrompt - 1].cost, quantity, orderList, bowlOrder)
                bill = orderCart.addBill(bill, foodList[foodOrderPrompt - 1].cost, quantity)
                orderCart.printOrder(bowlOrder)

            } else if (foodOrderPrompt == 3) {

                // Choice of meat prompt
                console.log("\t\t\tChoose your meat:")
                fn.printChoices(meatList)

                // Obtain user input for meat choice and store it in a choice variable
                var meatPrompt = fn.userSelection(1, meatList.length)
                var meatChoice = meatList[meatPrompt - 1]

                // Choice of size prompt
                console.log("\t\t\t Choose your size: ")
                fn.printChoices(sizeList)

                // Obtain user input for size choice and store it in a choice variable
                var sizePrompt = fn.userSelection(1, sizeList.length)
                var sizeChoice = sizeList[sizePrompt - 1]

                // prompt user for order quantity
                var quantity = fn.quantity()

                // create a new order class to gather all prompts into a single string
                var order = new Order()
                var ramenOrder = order.getRamenOrder(meatChoice, sizeChoice, foodList[foodOrderPrompt - 1].cost, quantity)
                orderCart.addCart(costList, foodList[foodOrderPrompt - 1].cost, quantity, orderList, ramenOrder)
                bill = orderCart.addBill(bill, foodList[foodOrderPrompt - 1].cost, quantity)
                orderCart.printOrder(ramenOrder)

            } else if (foodOrderPrompt == 0) {
                continue
            }
        } else if (categoryPrompt == 2) {
            // Print Side Dish Menu
            console.log("\t\t[SIDE DISH MENU]")
            console.log("\t\tChoose a side dish:")
            fn.printListMenu(sideDishList)
            console.log("\t\t- Press '0' to exit selection")
            var sideDishPrompt = fn.userSelection(0, sideDishList.length) // Side Dish Choice Selection
            if (sideDishPrompt != 0) {
                // Adds side dish order to cart based on choice selected (No customizations prompted)
                var quantity = fn.quantity()
                var order = new Order()
                var sideDishOrder = order.getGeneralOrder(sideDishList, sideDishPrompt, quantity)
                orderCart.addCart(costList, sideDishList[sideDishPrompt - 1].cost, quantity, orderList, sideDishOrder)
                bill = orderCart.addBill(bill, sideDishList[sideDishPrompt - 1].cost, quantity)
                orderCart.printOrder(sideDishOrder)
                continue
            }
        } else if (categoryPrompt == 3) {
            // Print Drinks Menu
            console.log("\t\t[DRINKS MENU]")
            console.log("\t\tChoose a drink:")
            fn.printListMenu(drinksList)
            console.log("\t\t- Press '0' to exit the selection")

            // Drinks Choice Selection
            var drinksPrompt = fn.userSelection(0, 3)
            if (drinksPrompt != 0) {
                if (drinksPrompt == 3) {
                    // Users can choose a canned drink type
                    console.log("\t\t\t[SELECT A DRINK]")
                    fn.printChoices(drinksList[drinksPrompt - 1].cannedDrinkTypes)
                    var order = new Order()
                    var cannedDrinksChoice = fn.userSelection(1, drinksList[drinksPrompt - 1].cannedDrinkTypes.length)
                    var quantity = fn.quantity()
                    var drinksOrder = order.getCannedDrinkOrder(drinksList, drinksPrompt, cannedDrinksChoice, quantity)
                } else {
                    var order = new Order()
                    var quantity = fn.quantity()
                    var drinksOrder = order.getGeneralOrder(drinksList, drinksPrompt, quantity)
                }

                orderCart.addCart(costList, drinksList[drinksPrompt - 1].cost, quantity, orderList, drinksOrder)
                var bill = orderCart.addBill(bill, drinksList[drinksPrompt - 1].cost, quantity)
                orderCart.printOrder(drinksOrder)
            } else {
                continue
            }
        }
    }
    // Choice 2: View Cart 
    else if (menuPrompt == 2) {
        // Print Cart Menu        
            console.log("=====================================================")
            fn.displayCart(orderList, bill)
            console.log("=====================================================")
            print.displayCartMenu()
            cartPrompt = fn.userSelection(0, 2)
            if (cartPrompt == 1) {
                if (orderList.length == 0) {
                    console.log("You have no items in your cart!")
                    continue
                } if (bill > 50) {
                    // Lucky Draw Prompt
                    luckyDrawPrompt = input.keyInYNStrict("You are eligible for our lucky draw! Do you want to participate?")

                    // If user wants to participate, initialize lucky draw function
                    if (luckyDrawPrompt) {
                        fn.luckyDraw()
                    }
                }

                // Prompt to use coupon
                var couponPrompt = input.keyInYNStrict("Do you want to use your coupon?")

                // If yes, prompt user for coupon code
                if (couponPrompt) {
                    var couponCodePrompt = input.question("Enter coupon code (Type 0 to cancel): ")
                    while (true) {
                        if (couponCodePrompt == coupon) {
                            console.log("You have successfully redeemed a 30% discount! Enjoy your meal!")
                            bill *= 0.7
                            discount = "- 30% coupon discount"
                            break
                        }
                        if (couponCodePrompt == '0') {
                            break
                        }
                        var couponCodePrompt = input.question("Enter coupon code (Type 0 to cancel): ")
                    }
                }
                var data = fn.writeOrder(orderList, bill, discount)
                fs.writeFileSync('order.txt', data, (err) => {
                    // In case of a error throw err.
                    if (err) throw err;
                })
                console.log("Your order has successfully sent")
                input.question("Press any key to continue...")

                // Cart Variables reset when order is sent
                orderList = []
                bill = 0
                costList = []

            } else if (cartPrompt == 2) {   // Users choose an item number to remove an item from a cart
                // function performs removal of index on orderList and costList, but returns updated bill total
                bill = fn.removeIndex(orderList, costList, bill)    
            } else if (cartPrompt == 0) {
                continue
            }

    } 
    // Choice 3: Display Promotions
    else if (menuPrompt == 3) {   // Promotion Display
            print.displayPromotions()
            input.question("Enter any key to continue...")
    } 
    // Quit Prompt
    else if (menuPrompt == 0) {
            var quit = input.keyInYNStrict("Are you sure you want to quit?")    // Confirm quit prompt
            if (quit) {
                break
            }
    }
}

// Thank you message
console.log(`
████████╗██╗░░██╗░█████╗░███╗░░██╗██╗░░██╗  ██╗░░░██╗░█████╗░██╗░░░██╗██╗██╗██╗
╚══██╔══╝██║░░██║██╔══██╗████╗░██║██║░██╔╝  ╚██╗░██╔╝██╔══██╗██║░░░██║██║██║██║
░░░██║░░░███████║███████║██╔██╗██║█████═╝░  ░╚████╔╝░██║░░██║██║░░░██║██║██║██║
░░░██║░░░██╔══██║██╔══██║██║╚████║██╔═██╗░  ░░╚██╔╝░░██║░░██║██║░░░██║╚═╝╚═╝╚═╝
░░░██║░░░██║░░██║██║░░██║██║░╚███║██║░╚██╗  ░░░██║░░░╚█████╔╝╚██████╔╝██╗██╗██╗
░░░╚═╝░░░╚═╝░░╚═╝╚═╝░░╚═╝╚═╝░░╚══╝╚═╝░░╚═╝  ░░░╚═╝░░░░╚════╝░░╚═════╝░╚═╝╚═╝╚═╝
`)
