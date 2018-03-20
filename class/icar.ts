interface iCar {
    brand: string;
    name: string;
    power: number;
}

class Car {
    brand: string;
    name: string;
    power: number;
}

var getCar = function(car: iCar) {
    console.log(car.brand, car.name, car.power);
}

var Camaro = new Car();
Camaro.name = 'cararo rogério';
Camaro.brand = 'GM';
Camaro.power = 45;

getCar(Camaro);