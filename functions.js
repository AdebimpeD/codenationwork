/*
const coffeeorder = (size, latte) => {
    console.log(`order received: ${size} from ${latte} `);
   }
   coffeeorder("small" , "latte");
   coffeeorder("medium" , "chocolate");
   coffeeorder("large" , "expresso");
*/
//Activity 1
/*
let orderCount = 0;
const takeOrder = (topping1, topping2, topping3 ) => {
    console.log(`Pizza with ${topping1}, ${topping2}, ${topping3}
    `);
 orderCount++;
}
//topping 1
takeOrder("pineapple", "pepperoni", "chicken");
//topping 2
takeOrder("onions","mushroom","garlic");
//topping 3
takeOrder("tomatoes","chicken","onio.logns")
*/

//Activity 2

/*
let amount = 500
const cashWithdrawal = (pin, amount) => {
    console.log(`your pin is ${pin} amount is ${amount}`);
    if (pin == 3543) {
        console.log("pin correct")
    else {
        console.log("pin wrong")
    }
    if (amount > 500) {
        console.log ("insuffiecent Fund")
    }
    else {
        console.log("take cash")
    }
    
}
   cashWithdrawal(3542, 550);
*/
/*
const coffeeorder = (size, latte) => {
    console.log(`order received: ${size} from ${latte} `);
   }
   coffeeorder("small" , "latte");
   coffeeorder("medium" , "chocolate");
   coffeeorder("large" , "expresso");
*/

//Activity 1

let orderCount = 0;
const takeOrder = (topping1, topping2, topping3, topping4, topping5) => {
    console.log(`Sandwich with ${topping1}, ${topping2}, ${topping3}, ${topping4}, ${topping5}
    `);
 orderCount++;
}
//topping 1
takeOrder("pineapple", "pepperoni", "chicken", "onions","mayo");
//topping 2 (below is saying underfined because the topping hasnt being filled in)
takeOrder("onions","mushroom","garlic", "tuna");
//topping 3
takeOrder("tomatoes","chicken","onio.logns");
//topping 4
takeOrder("tuna","mayo","sweetcorn");
//topping 5
takeOrder("egg", "cucumber", "lettuces")


