// Class method to add the cart and cost lists

class Cart {
    // Adds cost to list of costs
    addCart(costlist, cost, quantity, orderlist, order) {
        var totalCost = cost * quantity
        costlist.push(totalCost)
        orderlist.push(order)
    }

    // Adds to overall bill
    addBill(bill, cost, quantity) {
        var totalCost = cost * quantity
        bill += totalCost
        return bill
    }

    // Print order
    printOrder(string) {
        var input = require('readline-sync')
        console.log("[ADDED TO CART] " + string)
        input.question('Enter any key to continue...')
    }
}

module.exports = Cart;

