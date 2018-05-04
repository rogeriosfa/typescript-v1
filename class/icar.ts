interface iCar {
    brand: string;
    name: string;
    power: number;
}

class Car {
    brand: string;
    name: string;
    //age: number;
    power: number;
}

var getCar = function(car: iCar) {
    console.log(car.brand, car.name, car.power);
}

var Camaro = new Car();
//Camaro.name = 'cararo rogério';
Camaro.brand = 'GM';
//Camaro.age = 2018;
Camaro.power = 45;

getCar(Camaro);