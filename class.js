// All functions and processes of application stored in one ultilities class

class utilities {

    // Function to randomly generate coupon code
    couponCode() {
        var code = '' // for loop that adds a random character to code string from a random ascii code
        for (var i = 0; i < 6; i++) {
            const asciiChar = 65 + Math.floor(Math.random() * 26)
            code += String.fromCharCode(asciiChar)  // Converts random ASCII code number into a character
        }
        return code
    }

    // Function to write order string to be written to txt file
    writeOrder(list, bill, discount) {
        var number = ''    // randomly generates a three digit order number 
        for (var i = 0; i < 3; i++) {
            number += (Math.floor(Math.random() * 9) + 1)
        }
        // String order compilation
        var string = "====================================================\n[YOUR ORDER]\n"
        for (var i = 0; i < list.length; i++) {
            string += ((i + 1) + ". " + list[i] + "\n")
        }
        string += (discount + "\n")
        string += "====================================================\n"
        string += ("Total Bill: $" + bill.toFixed(2) + "\n")
        string += ("[ORDER NUMBER] => " + number)
        return string
    }

    // Function that validates user input
    userSelection(start, stop) {
        var input = require('readline-sync')
        var prompt = parseFloat(input.question("> ")) // user input prompt 
        // Validates user prompt including floats, loops if input is invalid
        while (prompt < start || prompt > stop || prompt % 1 !== 0) {   
            console.log("Invalid Input. Please try again!")
            var prompt = parseFloat(input.question("> "))
        }
        return prompt
    }

    // Prompt and validate quantity of user
    quantity() {
        console.log("Enter quantity of order")
        var input = require('readline-sync')
        var prompt = parseFloat(input.question("> "))
        while (prompt % 1 !== 0 || prompt <= 0) {
            console.log("Invalid Input. Please try again!")
            var prompt = parseFloat(input.question("> "))
        }
        return prompt
    }

    // Function to print out the customization choices for each food item
    printChoices(list) {
        for (var i = 0; i < list.length; i++) {
            console.log(`\t\t\t${i + 1}. ${list[i]}`)
        }
    }

    // Function to display order cart
    displayCart(list, bill) {
        console.log("[YOUR CART]")
        console.log("=====================================================")
        for (var i = 0; i < list.length; i++) {
            console.log((i + 1) + ". " + list[i])
        }
        console.log("=====================================================")
        console.log(`Total Cost >>> $${bill.toFixed(2)}`)
    }

    // Function to list menu based on array of food item objects 
    printListMenu(list) {
        for (var i = 0; i < list.length; i++) {
            console.log(`\t\t${i + 1}. [${list[i].code}] ${list[i].text} ($${(list[i].cost).toFixed(2)})`)
        }
    }

    // Function for slider
    slider(min, max, num) {
        var input = require('readline-sync'),
            MAX = max, MIN = min, value = num, key;
        console.log('\t\t\t\n\n' + '\t\t\t[Z] <- -> [X]  FIX: [SPACE]\n');
        while (true) {
            console.log('\t\t\t\x1B[1A\x1B[K|' +
                (new Array(value + 1)).join('------') + 'O' +
                (new Array(MAX - value + 1)).join('------') + '| ' + value);
            key = input.keyIn('',
                { hideEchoBack: true, mask: '', limit: 'zx ' });
            if (key === 'z') { if (value > MIN) { value--; } }
            else if (key === 'x') { if (value < MAX) { value++; } }
            else {
                break 
            }
        }
            return value
    }

    // Function for lucky draw
    luckyDraw() {
        var prizeList = ["$100 worth of NiceMeal vouchers", "Free Windows Laptop", "Free Airpods", "Free 1TB Hard Drive", "Free Canon DSLR Camera"]
        var input = require('readline-sync')
        console.log(`
            Prizes to WIN!
            1. $100 worth of NiceMeal vouchers
            2. A free Windows laptop
            3. Free Airpods
            4. Free 1TB Hard Drive
            5. Free Canon DSLR Camera
            `)
        input.question("Enter any key to roll lucky draw!!!")
        var randomDraw = Math.floor(Math.random() * 5) + 1
        console.log("You rolled " + randomDraw + "!!!")
        console.log(`You won ${prizeList[randomDraw - 1]}`)
    }

    // Function to remove an order item based on item number user enters
    removeIndex(orderlist, costlist, bill) {
        var input = require('readline-sync')
        // Function to remove element from array based on index
        function remove(array, index) {
            for (var i = 0; i < array.length; i++) {
                if (i == index) {
                    array.splice(i, 1)
                }
            }
        }
        console.log("Enter Item Number to Remove")
        var removeItem = input.questionInt('> ')
        if (orderlist.length == 0) {
            console.log("You have no items in your cart!")
        } else if (removeItem > (orderlist.length)) {
            console.log("Out of range!")
        } else {
            bill -= costlist[removeItem - 1]
            remove(orderlist, (removeItem - 1))
            remove(costlist, (removeItem - 1))
        }

        return bill
    }
}

module.exports = utilities;