let nums=[42,51,24,98,65,12]

nums.filter(n => n%2===0)
.forEach(n=> {
    console.log(n);
});

nums.filter(n => n%2===0)
.map(n=>n*2)
.forEach(n=> {
    console.log(n);
});

let res=nums.filter(n => n%2===0)  //to filter based on conditions
.map(n=>n*2)                //to implement specific operations
.reduce((a,b)=>a+b);        //add all elements
console.log(rescal);

/*nums.forEach(element => {
    console.log(element);
});*/