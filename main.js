function getHello(name) {
    return "Hello " + name;
}
var name_ = "Rogério";
document.body.innerHTML = getHello(name_);
var Car = /** @class */ (function () {
    function Car() {
    }
    return Car;
}());
var getCar = function (car) {
    console.log(car.brand, car.name, car.power);
};
var Camaro = new Car();
Camaro.name = 'cararo rogério';
Camaro.brand = 'GM';
Camaro.power = 45;
getCar(Camaro);
