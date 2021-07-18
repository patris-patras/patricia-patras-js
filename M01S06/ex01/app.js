const car = {
  make: 'Audi',
  color: 'black',
  wheels: 4,
  speed: 50,
  isTrunkOpen: false,
  areLightsOn: false,
  topSpeed: 1600,
  topReverseSpeed: -50,
  accelerate: function () {
    this.speed++;
  },
  decelerate: function () {
    this.speed--;
  },
  openTrunk: function () {
    this.isTrunkOpen = true;
  },
  closeTrunk: function () {
    this.isTrunkOpen = false;
  },
  turnLightsOn: function () {
    this.areLightsOn = true;
  },
  turnLightsOff: function () {
    this.areLightsOn = false;
  },
  // flashLights: function () {
  //   this.turnLightsOff();

  //   setTimeout(function () {
  //     this.turnLightsOff();
  //   }, 5000);
  // },
  // mai sus: am deschis new scope aici pentru ca am facut o functie noua
  // deci this imi devine window

  // metoda istorica v1:
  flashLights: function () {
    this.turnLightsOn();

    setTimeout(() => {
      this.turnLightsOff();
    }, 3000);
  },

  decelerate5: function () {
    this.speed -= 5;
  },

  stop: function () {
    this.speed = 0;
  },

  setSpeed: function (speed) {
    if (speed <= this.topSpeed && speed >= this.topReverseSpeed) {
      this.speed = speed;
    }
  },

  // v2
  // setSpeed: function (newSpeed) {
  //   if (newSpeed <= this.topSpeed && newSpeed >= this.topReverseSpeed) {
  //     this.speed = newSpeed;
  //   }
  // },
};

console.warn(
  `Afiseaza propozitia: "Masina era marca make si se deplasa cu speed km/h.`,
);
console.log(`Masina era marca ${car.make} si se deplasa cu ${car.speed} km/h.`);

console.warn(
  `Decelereaza masina cu 5 unitati apoi afisaza propozitia: "Viteza noua este speed km/h"`,
);
car.decelerate5();
console.log(`Viteza noua este ${car.speed} km/h`);

console.warn(
  ` Adauga o proprietate numita topSpeed si asigneaza-i valoarea 16"
  Adauga o proprietate numita topReverseSpeed si asigneaza-i valoarea -50
  Adauga o metoda numita stop() care sa faca proprietatea speed 0, apoi afiseaza viteza`,
);
car.stop();
console.log(car.speed);

console.warn(`Adauga  o metoda numita setSpeed() care sa poata primi un parametru fix pentru viteza.
Metoda trebuie sa verifice ca nu se depasesc limitele inferioare si superioare, caz in care se folosesc proprietatile topSpeed si topReverseSpeed`);

car.setSpeed(20);
console.log(`Viteza noua topSpeed e ${car.speed} km/h.`);
