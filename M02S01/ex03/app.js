const Car = {
  make: '',
  color: '',
  wheels: 0,
  speed: 0,
  topSpeed: 160,
  topReverseSpeed: -50,
  areLightsOn: false,
  displaySpeed: function () {
    console.log(`Viteza curenta este: ${this.speed}.`);
  },
  accelerate: function () {
    this.setSpeed(this.speed + 1);
  },
  decelerate: function () {
    this.setSpeed(this.speed - 1);
  },
  setSpeed: function (speed) {
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
  },

  turnLightsOn: function () {
    this.areLightsOn = true;
  },

  turnLightsOff: function () {
    this.areLightsOn = false;
  },

  flashLights: function () {
    this.turnLightsOn();

    setTimeout(() => {
      this.turnLightsOff();
    }, 3000);
  },
};

const audi = Object.create(Car); // ia lit car si il fol ca inst;
// proto e car in sine; audi.proto e acelasi pointer ca variabila Car
// obj se transm prin ref nu prin val; modificand protot lui audi am modif car
audi.make = 'Audi';
audi.color = 'black';
audi.topSpeed = 140;
audi.wheels = 4;
audi.speed = 0;
audi.setSpeed(140);
audi.accelerate();

// live pt 1

// Adauga o proprietate booleana numita areLightsOn si asigneaza-i valoarea false.
// Adauga metode numite turnLightsOn() si turnLightsOff() care sa manipuleze valoarea.
// Adauga o metoda numita flashLights() care sa apeleze cele doua metode in succesiune, folosind metoda window.setTimeout().
