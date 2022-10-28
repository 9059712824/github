let num=new Set();
num.add(3);
num.add(4);
num.add(3);
num.add("venky");
num.add("Krishna");
num.add("Repalle");


num.forEach(n =>{
    console.log(n);
})

console.log(num.has(3));