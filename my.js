//alert("Hello World! , succesfully Loaded JS file.");

const car = {
    type:"Suvs",
    model:"500",
    color:"White",
    samplefun : function() {
        return this.model;
    }
};
console.log(car.type);      //two ways of accessing datatype.
//console.log(car["model"]);
console.log(car.samplefun());


//console.log(f);





function f(a,b){

    return a+b;
}