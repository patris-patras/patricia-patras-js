class Vehicle {
  constructor(
    make,
    color,
    wheels,
    speed,
    topSpeed = 160,
    topReverseSpeed = -15,
  ) {
    this.make = make;
    this.color = color;
    this.wheels = wheels;
    this.speed = speed;
    this.topSpeed = topSpeed;
    this.topReverseSpeed = topReverseSpeed;
  }

  displaySpeed() {
    console.log(`Viteza curenta este: ${this.speed}.`);
  } // e ca o fct normala

  accelerate() {
    // this.speed++;
    // this.displaySpeed();

    // am viteza speed. vreau sa invoc setSpeed cu o val cu + 1 unitate fata de viteza curenta:
    this.setSpeed(this.speed + 1);
  }

  decelerate() {
    // this.speed--;
    // this.displaySpeed();

    this.setSpeed(this.speed - 1);
  }

  setSpeed(speed) {
    if (speed > this.topSpeed) {
      this.speed = this.topSpeed;
      this.displaySpeed();

      return;
    }

    if (speed < this.topReverseSpeed) {
      this.speed = this.topReverseSpeed;
      this.displaySpeed();

      return;
    }

    this.speed = speed;
    this.displaySpeed();
  }
}

class Car extends Vehicle {
  constructor(make, color, speed, topSpeed, topReverseSpeed) {
    // echivalent cu new Vehicle()
    // clasa vehicle e 'super-clasa' lui car/ cls car e sub-cls la vehicle
    super(make, color, 4, speed, topSpeed, topReverseSpeed);
  }
}

class Bicycle extends Vehicle {
  constructor(make, color, speed, topSpeed) {
    super(make, color, 2, speed, topSpeed, 0);
  }

  decelerate() {
    //   if (--this.speed < this.topReverseSpeed) {
    //     this.speed = this.topReverseSpeed;
    //   }
    // }
    // if (this.speed - 1 < this.topReverseSpeed) {
    //   this.speed = this.topReverseSpeed;
    // }    ---> am scris ; 27 + 34 => nu mai am nev de asta
  }
}

class Tricycle extends Vehicle {
  constructor(make, color, speed, topSpeed, topReverseSpeed) {
    super(make, color, 3, speed, topSpeed, topReverseSpeed);
  }
}

const bike = new Bicycle('Pegas', 'red', 8, 20);
const trike = new Tricycle('Tryke', 'red', 2, 9, -2);

// dupa ce am facut trike Pixelltab mi-a pus in nerezolvat ultima cerinta:
//Cerinta este: Clasa Bicycle trebuie sa limiteze proprietatea topReverseSpeed la 0.
//Instanta de test are valoarea -15 pentru proprietatea topReverseSpeed, dar trebuia sa aiba 0.

const audi = new Car('audi', 'blue', 3, 140, -50);
audi.setSpeed(140);

trike.setSpeed(0);
trike.setSpeed(-10);

// home pt 5+ (excl 10)
