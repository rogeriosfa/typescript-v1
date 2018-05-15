var Car = /** @class */ (function () {
    function Car(name, color, power) {
        this.name = name;
        this.color = color;
        this.power = power;
    }
    Car.prototype.printCar = function () {
        console.log(this.name, this.color, this.power);
    };
    return Car;
}());
var camaro = new Car("GM", "red", 4000);
camaro.printCar();
var Car2 = /** @class */ (function () {
    function Car2(name, color, power) {
        this.name = name;
        this.color = color;
        this.power = power;
    }
    return Car2;
}());
var ferrari = new Car2("Ferrari", "Blue", 2000);
console.log(ferrari);
