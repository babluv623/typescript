import { carConfiguration } from "./car-config";

export class Car {
  // properties
  carName: string;
  brand: string;
  color: string;
  transmission: boolean;
  makeYear: number;

  constructor(data: carConfiguration) {
    this.carName = data.carValue;
    this.brand = data.brandValue;
    this.color = data.colorValue;
    this.transmission = data.trans;
    this.makeYear = data.make;
  }

  // methods
  carStart() {
    console.log("car started");
  }
  carMoving() {
    console.log("Car is on the move");
  }
  carStopped() {
    console.log("Car stopped");
  }

  getData() {
    console.log(this.carName, this.color, this.brand, this.transmission);
  }
}
