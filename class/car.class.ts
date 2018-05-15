class Car {
  constructor(
    public name: string,
    public color: string,
    public power: number
  ) {}

  printCar(): void {
    console.log(this.name, this.color, this.power);
  }
}

var camaro = new Car("GM", "red", 4000);
camaro.printCar();

class Car2 {
    private name: string;
    private color: string;
    private power: number;
    constructor(name: string, color: string, power: number) {
        this.name = name;
        this.color = color;
        this.power = power;
    }
}

var ferrari = new Car2("Ferrari", "Blue", 2000);
console.log(ferrari);
