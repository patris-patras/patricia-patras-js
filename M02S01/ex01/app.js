//CERINTE:
// Adauga o proprietate booleana numita isTrunkOpen si asigneaza-i valoarea false.
// Adauga metode numite openTrunk() si closeTrunk() care sa seteze proprietatea isTrunkOpen pe true, respectiv false.
// Adauga o proprietate booleana numita areLightsOn si asigneaza-i valoarea false.
// Adauga metode numite turnLightsOn() si turnLightsOff() care sa manipuleze valoarea.
// Adauga o metoda numita flashLights() care sa apeleze cele doua metode in succesiune, folosind metoda window.setTimeout().

// Adauga cele doua variabile (opel si audi) intr-un array numit cars. (var cars = [opel, audi])
// Ruleaza o bucla prin forEach si afiseaza propozitiile (pentru fiecare din masini)
// “Masina era marca make si se deplasa cu speed km/h.”
// In fiecare iteratie, decelereaza masina cu 5 unitati, apoi afiseaza: “Viteza noua este speed km/h.”

class Car {
  topReverseSpeed = -50; // v1 pentru l 9
  isTrunkOpen = false;
  areLightsOn = false;

  constructor(make, color, wheels, speed) {
    this.make = make;
    this.color = color;
    this.wheels = wheels;
    this.speed = speed;
    this.topSpeed = 160;
  }

  accelerate() {
    this.speed++;
  }

  decelerate() {
    this.speed--;
  }

  stop() {
    this.speed = 0;

    console.log(this.speed);
  }

  setSpeed(speed) {
    if (speed > this.topSpeed) {
      this.speed = this.topSpeed;

      return;
    }

    if (speed < this.topReverseSpeed) {
      this.speed = this.topReverseSpeed;

      return;
    }

    this.speed = speed;
  }

  openTrunk() {
    this.isTrunkOpen = true;
  }

  closeTrunk() {
    this.isTrunkOpen = false;
  }

  turnLightsOn() {
    this.areLightsOn = true;
  }

  turnLightsOff() {
    this.areLightsOn = false;
  }

  flashLights() {
    this.turnLightsOn();

    setTimeout(() => {
      this.turnLightsOff();
    }, 3000);
  }
}

// sin sugar  - ca sa semene cu clase din alte lbj

const audi = new Car('Audi', 'black', 4, 50);
const opel = new Car('Opel', 'red', 4, 3);

const cars = [audi, opel];

cars.forEach(function (car) {
  console.log(
    `Masina era marca ${car.make} si se deplasa cu ${car.speed} km/h.`,
  );

  car.decelerate();
  car.decelerate();
  car.decelerate();
  car.decelerate();
  car.decelerate();

  console.log(`Viteza noua este ${car.speed} km/h.`);
});

// SOS
// ultimul punct nu stiu sa il fac altfel; doar asa sau dum am facut la S06-exc01 adaugand
// o functie
// decelerate5: function () {
//   this.speed -= 5;
// },

// si NU am inverzit tot pixeltabu!
