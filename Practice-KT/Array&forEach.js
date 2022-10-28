let values=new Array(5,7,8);
console.log(values);
console.log(values.length);
//adding values to array
values.push(55)
console.log(values);
//Fetching data from array
console.log(values[2]);

//New Array
let name1=[];
name1.push('Venky');
name1.push("repalle");
name1.push("Krishna");
console.log(name1);
console.log(name1.pop())
//console.log(name1.shift());
name1.unshift("venkata");
console.log(name1);

//New Array
let arr=new Array(5,7,9,4,8,6);
arr.splice(2,3,1,2,5)
console.log(arr);

//For of with an Array
/*let num=[]
num[0]=5
num[99]=9
for(let n of num){
    console.log(n);
}*/
/*for(let n in num){
    console.log(n);
}*/

//ForEach with Array
let nums=[42,51,24,98,65,12]
nums.forEach((n) => {
    console.log(n);
});
nums.forEach((n,i,nums) => {
    console.log(n,i,nums);
});
