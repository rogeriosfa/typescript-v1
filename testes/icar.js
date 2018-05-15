var Car = /** @class */ (function () {
    function Car() {
    }
    return Car;
}());
var getCar = function (car) {
    console.log(car.brand, car.name, car.power);
};
var Camaro = new Car();
//Camaro.name = 'cararo rogério';
Camaro.brand = 'GM';
//Camaro.age = 2018;
Camaro.power = 46;
getCar(Camaro);
