// BEM object oriented CSS

class Car {
  constructor(
    posX = 0,
    posY = 0,
    bodyColor = 'black',
    tireColor = 'black',
    hubCapColor = 'white',
    areHazardsOn = false,
  ) {
    this.posX = posX;
    this.posY = posY;
    this.bodyColor = bodyColor;
    this.tireColor = tireColor;
    this.hubCapColor = hubCapColor;
    this.areHazardsOn = areHazardsOn;
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

  setTireColor(color) {
    this.wheelBack.style.backgroundColor = color;
    this.wheelFront.style.backgroundColor = color;
  }

  setHubCapColor(color) {
    this.hubCapBack.style.backgroundColor = color;
    this.hubCapFront.style.backgroundColor = color;
  }

  turnHeadLightsOn() {
    this.lightFront.classList.add('light--on');
  }

  turnHeadLightsOff() {
    this.lightFront.classList.remove('light--on');
  }

  engageBreak() {
    this.lightBack.classList.add('light--on');
  }

  disenagageBreak() {
    this.lightBack.classList.remove('light--on');
  }

  turnHazardsOn() {
    this.lightFront.classList.add('light--on');
    this.lightBack.classList.add('light--on');
    this.areHazardsOn = true;
  }

  turnHazardsOff() {
    this.lightFront.classList.remove('light--on');
    this.lightBack.classList.remove('light--on');
    this.areHazardsOn = false;
  }

  // v1 easy FARA repetat
  // toggleHazards() {
  //   this.turnHazardsOn();
  //   setTimeout(() => {
  //     this.turnHazardsOff();
  //   }, 3000);
  // }

  //v2 NU imi repeta decat o data
  // toggleHazards() {
  //   setInterval(() => {
  //     this.turnHazardsOn();
  //     setTimeout(() => {
  //       this.turnHazardsOff();
  //     }, 2000);
  //   }, 2000);
  // }

  // v3 NU imi repeta decat o data
  toggleHazards() {
    let i = 0;

    setInterval(() => {
      if (i % 0 === 0) {
        this.turnHazardsOn();
      } else {
        this.turnHazardsOff();
      }
      i++;
    }, 1000);
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
    this.wheelBack.style.backgroundColor = this.tireColor;
    this.hubCapBack = document.createElement('div');
    this.hubCapBack.classList.add('wheel__cap');
    this.hubCapBack.style.backgroundColor = this.hubCapColor;
    this.wheelBack.append(this.hubCapBack);
    this.carBody.append(this.wheelBack);

    // wheel front ( block BEM / elem al lui car)
    this.wheelFront = document.createElement('div');
    this.wheelFront.classList.add('wheel', 'car__wheel', 'car__wheel--front');
    this.wheelFront.style.backgroundColor = this.tireColor;
    this.hubCapFront = document.createElement('div');
    this.hubCapFront.classList.add('wheel__cap');
    this.hubCapFront.style.backgroundColor = this.hubCapColor;
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
