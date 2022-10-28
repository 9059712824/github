function fun(laptop,laptop1){
    if(laptop.cpu>laptop1.cpu){
        return laptop;
    }
    else{
        return laptop1;
    }
}
let laptop={
    cpu:'i9',
    ram:16,
    brand:'hp',

    getConfig:function(){
        console.log(this.cpu,this.ram,this.brand)
    }
}

let laptop1={
    cpu:'i7',
    ram:32,
    brand:'hp',

    compare:function(laptop){
        if(this.cpu<laptop.cpu){
            return laptop1;
        }
        else{
            return laptop;
        }
    },

    getConfig:function(){
        console.log(this.cpu,this.ram,this.brand)
    }
}

console.log(fun(laptop,laptop1));
laptop.getConfig();

console.log(laptop1.compare(laptop))