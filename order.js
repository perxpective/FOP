// Class for taking orders for food
class Order {
    
    getCurryOrder(meat, spicyLevel, size, cost, quantity) {
        var string = meat + " Curry Rice (Level " + spicyLevel + ") Size: " + size + " >>> $" + (cost).toFixed(2) + " [x" + quantity + "]"
        return string
    }

    getBowlOrder(meat, size, cost, quantity) {
        var string = meat + " Bowl (Size: " + size + ") >>> $" + (cost).toFixed(2) + " [x" + quantity + "]"
        return string
    }

    getRamenOrder(meat, size, cost, quantity) {
        var string = meat + " Ramen (Size: " + size + ") >>> $" + (cost).toFixed(2) + " [x" + quantity + "]"
        return string
    }

    getGeneralOrder(list, prompt, number) {
        var string = list[prompt - 1].text + " >>> $" + (list[prompt - 1]).cost.toFixed(2) + " [x" + number + "]"
        return string
    }

    getCannedDrinkOrder(list, prompt, choice, quantity) {
        var drinksOrder = list[prompt - 1].cannedDrinkTypes[choice - 1] + " >>> $" + (list[prompt - 1]).cost.toFixed(2) + " [x" + quantity + "]"
        return drinksOrder
    }
}
module.exports = Order;