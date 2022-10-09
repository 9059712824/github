
let a=true
let b=true
console.log(a+b)  //output : 2

//Math Function
let num=5
let result=Math.pow(num,3)
console.log(result)

//Data Type comparision
let x="2"
let y=5
console.log(x<y)

//Relational Operators &&, ||,
x=5,y=6;
let z=7;
console.log(!x)

//Conditional Operators <,>,=,==,===
let num1=5,num2=6
if(num2>num1)
    console.log("Greater")
else
    console.log("smaller")

//Terinary Operator
num=9
let res
if(num%2==0){
    res="Even";
}
else{
    res="Odd";
}
console.log(res);

result= num%2==0?"Even" :"Odd";
console.log(result)

//Switch Statement
let day="Tuesday"
switch (day) {
    case 'Monday':
        console.log("7 AM");  
        break;
    case 'Tuesday':
    case 'Friday':
        console.log("8 AM");
        break;
    case 'Wednesday':
    case 'Saturday':
        console.log("9 AM");
        break;
    case 'Thursday':
        console.log("10 AM");
        break;
    default:
        console.log("6 AM");
        break;
}

//Template Literal `
num1=8
num2=4
result=num1+num2;
console.log("Sum of "+num1+" and "+num2+" is: "+result)
console.log(`Sum of ${num1} and ${num2} is: ${result}`)


