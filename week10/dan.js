let stars = [];
let planets = [];
let yesno = false;
let clickstate = false;

function setup() {
  createCanvas(640, 400);
  angleMode(DEGREES);

  for (let i = 0; i < 2000; i++) {
    stars[i] = new Star(random(1, 3840), random(0, 2160), random(height * 0.003, height * 0.009));
  }
}

function draw() {
  background(0, 25);

  for (let i = 0; i < stars.length; i++) {
    stars[i].show();
  }
  for (let i = 0; i < 1; i++) {
    stars[i] = new Star(random(width), random(height), random(height * 0.005, height * 0.015));
  }

  for (let i = 0; i < planets.length; i++) {
    planets[i].show();
  }
}

function mousePressed() {

  for (let i = planets.length - 1; i >= 0; i--) {
    if (planets[i].contains(mouseX, mouseY)) {
      clickstate = true;
    } else {
      clickstate = false
    }

    if (clickstate == true) {
      planets.splice(i, 1);
      return;
    }
  }


  yesno = int(random(0, 2));
  print(yesno);

  let rcolor1 = random(0, 255);
  let rcolor2 = random(0, 255);
  let rcolor3 = random(0, 255);

  let r = random(height * 0.01, height * 0.1);
  let angle = random(-20, 20);

  if (yesno == true) {
    let p = new Planet(mouseX, mouseY, r, rcolor1, rcolor2, rcolor3, angle, true);
    planets.push(p);
  } else {
    let p = new Planet(mouseX, mouseY, r, rcolor1, rcolor2, rcolor3, angle, false);
    planets.push(p);
  }

}

class Star {
  constructor(x, y, r, brightness) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.brightness = brightness
  }

  show() {
    fill(255, this.brightness);
    noStroke();
    circle(this.x, this.y, this.r * 2);
  }
}


class Planet {
  constructor(x, y, r, red, green, blue, ringAngle, ringState) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.red = red;
    this.green = green;
    this.blue = blue;
    this.ringAngle = ringAngle;
    this.ringState = ringState;
  }

  show() {
    //planet base
    push();
    fill(this.red, this.green, this.blue);
    stroke(100);
    ellipse(this.x, this.y, this.r * 2, this.r * 2);
    pop();
    //inner shadow
    push();
    fill(this.red * 0.75, this.green * 0.75, this.blue * 0.75);
    noStroke();
    ellipse(this.x, this.y, (this.r * 2) - ((this.r * 2) * 0.2), this.r * 2)
    pop();


    if (this.ringState == true) {
      //planet ring
      push()
      translate(this.x, this.y);
      noFill();
      stroke(255);
      rotate(this.ringAngle);
      ellipse(0, 0, (this.r * 6), (this.r * 1.6))
      pop()

      //invisible arcs
      push();
      stroke(100);
      fill(this.red, this.green, this.blue)
      arc(this.x, this.y, this.r * 2, this.r * 2, 180, 0, OPEN)
      pop();
      //inner arc
      push();
      noStroke();
      fill(this.red * 0.75, this.green * 0.75, this.blue * 0.75)
      arc(this.x, this.y, (this.r * 2) - ((this.r * 2) * 0.2), this.r * 2, 180, 0, OPEN)
      pop();
    }


  }

  contains(planetx, planety) {
    let d = dist(planetx, planety, this.x, this.y);
    if (d < this.r) {
      return true;
    } else {
      return false;
    }
  }
}
