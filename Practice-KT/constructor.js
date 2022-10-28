function Alien(name,tech){
    this.name=name;
    this.tech=tech;
    /*this.work=function(){
        console.log("SOlving bugs");
    }*/
}

let alien1=new Alien('Navin','JS');
let alien2=new Alien('venky','Java')
console.log(alien1);
console.log(alien2);

alien1.tech="Python";
console.log(alien1);
