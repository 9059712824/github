let alien={
    name:"Venky",
    age:10,
}
console.log(alien.name)
console.log(alien.age)
console.log(alien['name'])

//Objects Inside Object
let a1={
    name:"venkata",
    age:21,
    laptop:{
        name:"Hp",
        model:850
    }
}
console.log(a1)
console.log(a1.laptop.model,a1.laptop.name)

for(let key in a1){
    console.log(key,a1[key])
}
for(let key in a1.laptop){
    console.log(key);
}