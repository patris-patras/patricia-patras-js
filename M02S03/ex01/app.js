class Car {
  constructor(make, color, wheels, speed) {
    this.make = make;
    this.color = color;
    this.wheels = wheels;
    this.speed = speed;
  }

  accelerate(coefficient) {
    // this.speed++;
    this.speed += coefficient;

    return this;
  }

  decelerate(coefficient) {
    // this.speed--;
    this.speed -= coefficient;

    return this;
  }

  setSpeed(speed) {
    this.speed = speed;

    return this;
  }
}

var audi = new Car('Audi', 'black', 4, 50);

// audi
//   .accelerate()
//   .accelerate()
//   .accelerate()
//   .accelerate()
//   .accelerate()
//   .decelerate()
//   .decelerate()
//   .decelerate();

// 7.Ridica viteza cu 12 apoi coboar-o cu 3 si apoi inca o data cu 4. 8.Afiseaza viteza noua in DOM.
audi.accelerate(12).decelerate(3).accelerate(4);

const paragraphElement = document.createElement('p'); // la DOM nu e nev de <> ca in jQ
paragraphElement.innerText = `Viteza masinii ${audi.make} e ${audi.speed}.`;

document.body.append(paragraphElement);

// home pt 6-11

//6. Modifica metodele accelerate si decelerate
// astfel incat sa primeasca un coeficient cu care sa mareasca sau sa reduca viteza
// si pastreaza conceptele de chaining. (inclusiv parametrii negativi)

// 9.Creeaza o metoda chainable noua, numita setSpeed() care sa seteze viteza la o anumita valoare (fara limite superioare sau inferioare pentru simplitate).
// 10.Folosind noua metoda seteaza viteza la 4, apoi accelereaza la 5 folosind chaining.

audi.setSpeed(4).accelerate(1);
paragraphElement.innerText = `Viteza masinii ${audi.make} cu setSpeed e ${audi.speed}.`;
