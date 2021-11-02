//alert("Hello World! , succesfully Loaded JS file.");

const car = {
    type:"Suvs",
    model:"500",
    color:"White",
    samplefun : function() {
        return this.model;
    }
};

const mycar = car;
mycar.type = "Luxurious.";
const myanothercar = car;
mycar.color = "blue";
//console.log(car.type);      //two ways of accessing datatype.
//console.log(car["model"]);
//console.log(car.samplefun());
//console.log(f);

console.log(myanothercar == mycar);
console.log(myanothercar === mycar);


function f(a,b){

    return a+b;
}