class Car {
  constructor(make, color, wheels, speed) {
    this.make = make;
    this.color = color;
    this.wheels = wheels;
    this.speed = speed;
  }

  accelerate() {
    this.speed++;

    return this;
  }

  decelerate() {
    this.speed--;

    return this;
  }
}

var audi = new Car('Audi', 'black', 4, 50);

audi
  .accelerate()
  .accelerate()
  .accelerate()
  .accelerate()
  .accelerate()
  .decelerate()
  .decelerate()
  .decelerate();

const paragraphElement = document.createElement('p'); // la DOM nu e nev de <> ca in jQ
paragraphElement.innerText = `Viteza masinii ${audi.make} e ${audi.speed}.`;

document.body.append(paragraphElement);

// home pt 6-11
