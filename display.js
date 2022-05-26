// Printing and Displaying Functions

// Prints main menu
function printMainMenu() {
    console.log(`
    [WELCOME TO NICEMEAL RESTAURANT!]
    Main Menu:
    [1] View Menu
    [2] View Your Cart!
    [3] View Promotions
    - Press '0' to quit
    `)
}

// Prints the cart menu
function displayCartMenu() {
    console.log(`
    Cart Options:
    [1] Proceed to Payment
    [2] Remove Item
    [0] Back to Main Menu
    `)
}

// Displays list of promotions available in restaurant
function displayPromotions() {
    console.log("[PROMOTIONS]")
    console.log(`
        1. JOIN OUR LUCKY DRAW! 
        Spend a minimum of $50 to qualify for our lucky draw. Stand a chance to win:
        - $100 worth of NiceMeal vouchers
        - A free Windows laptop
        - Free Airpods
        - Free 1TB Hard Drive
        - Free Canon DSLR Camera

        2. COUPON DISCOUNT
        Simply enter a coupon code you previously redeemed from the restaurant for 30% off your next bill!
        `)
}

// Prints food categories
function printFoodMenu() {
    console.log(`
    \t[FOOD MENU]
    \tCategories:
    \t  1. Food
    \t  2. Side Dishes
    \t  3. Drinks
    \t - Press '0' to exit selection
    `)
}

// Exports all functions
module.exports = {
    printMainMenu,
    displayCartMenu,
    displayPromotions,
    printFoodMenu
}