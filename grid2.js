/*

let space1 = "x"
let space2 = "o"
let space3 = " "
let space4 = "x"
let space5 = "x"
let space6 = " "
let space7 = "o"
let space8 = " "
let space9 = " "




console.log("    |     |             ");
console.log(` ${space1}  |   ${space2} | ${space3} `);
console.log("    |     |             ");
console.log("_____________");

console.log("    |     |             ");
console.log(` ${space4}  |  ${space5}  | ${space6} `);
console.log("    |     |    ")
console.log("_____________")
console.log("    |     |    ")
console.log(` ${space7}  |  ${space8}  |    `);
console.log("    |     |    ")
*/

let space1 = "x"
let space2 = "o"
let space3 = " "
let space4 = "x"
let space5 = "x"
let space6 = " "
let space7 = "o"
let space8 = " "
let space9 = " "


console.log("    |     |             ");
console.log(`${space1}   | ${space2}   | ${space3} `) ;
console.log("    |     |             ");
console.log("_____________");

console.log("    |     |             ");
console.log(`${space4}   |  ${space5}  | ${space6} `);
console.log("    |     |    ")
console.log("_____________")
console.log("    |     |    ")
console.log(` ${space7}  |  ${space8}  |    `);
console.log("    |     |    ")

if  (space1 && space2 && space3 == "X"){
    console.log("you win");
}
if (space4 && space5 && space6 == "O"){
    console.log("you win");
}