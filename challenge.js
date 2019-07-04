/*
1
let password = "password";
if (password.length < 8) {
    console.log ("Wrong password")
}
else if (password.length == 8) {
    console.log("password granted");
}
else if (password.length > 8){
    console.log("Wrong password")
}
*/

2
/*let num = 19
// Note:- when numbers (e.g 19)are changed it will let you know if it can divide or not
if (num % 3 ==0 || num % 5 ==0){
    console.log("diviable by 3 or 5")
}
else {
    console.log ("cant divide")
}
*/

3
/*
let num = 19
if (num % 5 ==0 && num % 3  ==0){
    console.log ("fizzBuzz")
 }
 else if ( num % 3 == 0){
     console.log ("fizz")
 }
 else if (num % 5 == 0){
     console.log("buzz")
 }
 else {
     console.log (num)
 }
 */

4
let num = 2009
if (num.toString(10101) == num.toString().split("").reverse().join("")){
    console.log ("This is a Palindrome")
}
 //Palindrone is a word, phrase, or sequence that reads the same backwards as forwards e.g 10101,madam,civic,redder,refer etc
else {
    console.log ("This is not a Palindrome")
}
