 function greet(user) {
    console.log(user);
   return "Hello "+user;    
 }

let user="venky";
let str= greet(user);
console.log(str)

//Function Expression
/*let add=function(num1,num2){
    return num1+num2;
}
console.log(add(5,6))*/

//Setting default value in Fucntions Parameter
function add(num1,num2,num3=1){
    console.log(num1,num2,num3);
    return num1+num2+num3;
}
console.log(add(4,7))
console.log(add(3,5,9))