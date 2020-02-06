const selfDriving = (constructor: Function) => {
  constructor.prototype.selfDriving = true;
}

const wheels = (numberOfWheels: number) => (constructor: Function) => {
  constructor.prototype.wheels = numberOfWheels;
}

@selfDriving
@wheels(4)
class Car {
  constructor(public brand: string) { }
}

const tida = new Car('Nissan');

console.log(tida.selfDriving);
console.log(tida.wheels);
