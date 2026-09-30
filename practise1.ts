
interface IVehincle {
    name: string;
    model: string;
    year: number;
    color: string;
    brand: any;
    displayInfo(): void;
    move():void;
}


abstract class Vehincle implements IVehincle  {
    public name: string;
    public model: string;
    public year: number;
    public color: string = "Red";

    constructor(name: string, model: string, year: number) {
        this.name = name;
        this.model = model;
        this.year = year;
    }

    public displayInfo(): void {
        console.log(`Vehicle Name: ${this.name}`);
        console.log(`Model: ${this.model}`);
        console.log(`Year: ${this.year}`);
        console.log(`Color: ${this.color}`);
    }
    public move(): void {
        console.log(`${this.name} is moving.`);
    }
}

class Car extends Vehincle {
    public numberOfDoors: number;

    constructor(name: string, model: string, year: number, numberOfDoors: number) {
        super(name, model, year);
        this.numberOfDoors = numberOfDoors;
    }

    public displayInfo(): void {
        super.displayInfo();
        this.model = "Updated Model"; 
        this.name = "Updated Name"; 
        this.color = "Updated Color"; 
        // Modifying the model property
        console.log(`Number of Doors: ${this.numberOfDoors}`);
    }
}

class Motorcycle extends Vehincle {
    public requiresHelmet: boolean;

    constructor(name: string, model: string, year: number, requiresHelmet: boolean) {
        super(name, model, year);
        this.requiresHelmet = requiresHelmet;
    }

    public displayInfo(): void {
        super.displayInfo();
        console.log(`Requires Helmet: ${this.requiresHelmet}`);
    }
}


const myCar = new Car("Toyota", "Camry", 2022, 4);
const myCar1 = new Car("Toyota", "Venza", 2024, 4);
myCar.displayInfo();
console.log(" ")
myCar1.displayInfo();
console.log(" ")

myCar.model = "Corolla";
const myMotorcycle = new Motorcycle("Harley-Davidson", "Street 750", 2021, true);
myMotorcycle.displayInfo();
console.log(" ")


