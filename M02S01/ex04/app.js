// BEM object oriented CSS

class Car {
  constructor(
    posX = 0,
    posY = 0,
    bodyColor = 'black',
    // tireColor = 'black',
    // hubCapColor = 'white',
  ) {
    this.posX = posX;
    this.posY = posY;
    this.bodyColor = bodyColor;
    // this.tireColor = tireColor;
    // this.hubCapColor = hubCapColor;
  }

  setPos(posX, posY) {
    this.setPosX(posX);
    this.setPosY(posY);
  }

  setPosX(posX) {
    this.frame.style.left = `${posX}px`;
  }

  setPosY(posY) {
    this.frame.style.top = `${posY}px`;
  }

  setBodyColor() {
    this.carTop.style.backgroundColor = color;
    this.carBody.backgroundColor = color;
  }

  turnHeadlightsOn() {
    this.lightFront.classList.add('light--on');
  }

  turnHeadlightsOff() {
    this.lightFront.classList.remove('light--on');
  }

  render() {
    // decorative frame
    this.frame = document.createElement('div'); // this e instanta aici
    this.frame.classList.add('frame'); // classList update/adaug cls pe obj
    const positionCss = `left: ${this.posX}px; top: ${this.posY}px;`;
    this.frame.style.cssText = positionCss;

    // car block (BEM)
    this.car = document.createElement('div');
    this.car.classList.add('car');
    this.frame.append(this.car);

    // car top (element BEM)
    this.carTop = document.createElement('div');
    this.carTop.classList.add('car__top');
    this.carTop.style.backgroundColor = this.bodyColor;
    this.car.append(this.carTop);

    // car body (el. BEM)
    this.carBody = document.createElement('div');
    this.carBody.classList.add('car__body');
    this.carBody.style.backgroundColor = this.bodyColor;
    this.car.append(this.carBody);

    // light front(block BEM)
    this.lightFront = document.createElement('div');
    this.lightFront.classList.add('light', 'light--front');
    this.carBody.append(this.lightFront);

    // light back(block BEM)
    this.lightBack = document.createElement('div');
    this.lightBack.classList.add('light', 'light--back');
    this.carBody.append(this.lightBack);

    // wheel back ( block BEM / elem al lui car)
    this.wheelBack = document.createElement('div');
    this.wheelBack.classList.add('wheel', 'car__wheel', 'car__wheel--back');
    this.hubCapBack = document.createElement('din');
    this.hubCapBack.classList.add('wheel__cap');
    this.wheelBack.append(this.hubCapBack);
    this.carBody.append(this.wheelBack);

    // wheel front ( block BEM / elem al lui car)
    this.wheelFront = document.createElement('div');
    this.wheelFront.classList.add('wheel', 'car__wheel', 'car__wheel--front');
    this.hubCapFront = document.createElement('div');
    this.hubCapFront.classList.add('wheel__cap');
    this.wheelFront.append(this.hubCapFront);
    this.carBody.append(this.wheelFront);

    document.body.append(this.frame);
  }
}

// tema ex04 - 3, 4 + 5 (mai dif cred)

// play in console.log & help la pt 5:
// const test = new Car(50, 50, 'magenta', 'blue', 'black')

// test.render()

// let x = 10;
// const interval = setInterval(() => {
//     if (x >= 100) {
//         clearInterval(interval);
//      }

//      x += 5

//      test.setPosX(x);
// }, 60)
