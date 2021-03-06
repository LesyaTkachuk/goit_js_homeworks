/* eslint-disable no-underscore-dangle */
class Car {
  static getSpecs(car) {
    console.log(
      `maxspeed: ${car.maxSpeed}, speed: ${car.speed}, isOn: ${car.isOn}, distance: ${car.distance}, price: ${car.price}`,
    );
  }

  constructor({ price, maxSpeed, distance = 0 }) {
    this.speed = 0;
    this._price = price;
    this.maxSpeed = maxSpeed;
    this.isOn = false;
    this.distance = distance;
  }

  set price(newPrice) {
    this._price = newPrice;
  }

  get price() {
    return this._price;
  }

  turnOn() {
    this.isOn = true;
  }

  turnOff() {
    this.isOn = false;
    this.speed = 0;
  }

  accelerate(value) {
    this.speed += value;
    if (this.speed > this.maxSpeed) {
      this.speed = this.maxSpeed;
    }
  }

  decelerate(value) {
    this.speed -= value;
    if (this.speed < 0) {
      this.speed = 0;
    }
  }

  drive(hours) {
    if (this.isOn) {
      this.distance += hours * this.speed;
    }
  }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000
