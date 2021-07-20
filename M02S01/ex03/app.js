const Car = {
  make: '',
  color: '',
  wheels: 0,
  speed: 0,
  topSpeed: 160,
  topReverseSpeed: -50,
  displaySpeed: function () {
    console.log('Viteza curenta este: ', this.speed);
  },
  accelerate: function () {
    this.setSpeed(this.speed + 1);
  },
  decelerate: function () {
    this.setSpeed(this.speed - 1);
  },
  setSpeed: function (speed) {
    if (speed > this.topSpeed) {
      this.speed = topSpeed;
      this.displaySpeed();

      return;
    }

    if (speed < this.topReverseSpeed) {
      this.speed = topReverseSpeed;

      this.displaySpeed();

      return;
    }

    this.speed = speed;
    this.displaySpeed();
  },
};

const audi = Object.create(Car); //ia lit car si il fol ca inst;
// proto e car in sine; audi.proto e acelasi pointer ca variabila Car
// obj se transm prin ref nu prin val; modificand protot lui audi am modif car
audi.make = 'Audi';
audi.color = 'black';
audi.wheels = 4;
audi.speed = 0;

console.log(audi);

// live pt 1
