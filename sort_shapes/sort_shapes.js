circle = [];
var r = 50;
var dragging = false;
let colour_range = {'Purple':[100,30,200],'Green':[30,100,50],'Blue':[0,30,200],'Red':[200,30,20]};
var check = [];

function setup() {
    createCanvas(1000,1000);

    for (let i = 0; i < 5; i++) {
      let shade = Object.values(colour_range)[int(random(4))];
      let x = random(50,950);
      let y = random(50,950);
      circle[i] = new Circle(x,y,shade);

    }
}

function mousePressed() {
  return
}

function mouseReleased(){
  dragging = false;
}



function draw() {

  noStroke();
  fill(100,30,200)
  rect(0,0,width/2,height/2)

  fill(30,100,50)
  rect(width/2,0,width/2,height/2)

  fill(0,30,200)
  rect(0,height/2,width/2,height/2)

  fill(200,30,20)
  rect(width/2,height/2,width/2,height/2)

  for (let i of circle) {

    i.show();
    i.jiggle();

    if (mouseIsPressed && dist(i.x, i.y, mouseX, mouseY) < r) {

      i.drag = true;
    } else {
      i.drag = false;
    }

    if (i.drag == true) {
      i.x = mouseX;
      i.y = mouseY;
    }

}


let game_won = true;

for (let i of circle) {


    if (i.check() == false) {
      game_won = false
      break
    }

  }
if (game_won) {
  console.log('you won')
  rect(200,200,600,600);
  textSize(180);
  fill(255,0,0);
  text('you won', 300, 200);
}



  // for (let i of circle) {
  //   if i.shade == Object.values(colour_range) {
  //     console.log ('yes')
  //   }
  //   }

}







class Circle {

  constructor(x, y, shade) {
    this.x = x;
    this.y = y;
    this.drag = false;
    this.shade = shade;
  }

  show() {
    fill(this.shade);

    stroke(255);
    strokeWeight(3);
    ellipse(this.x,this.y,r,r);
  }

  jiggle() {
      this.x = this.x + random(-2, 2);
      this.y = this.y + random(-2, 2);
    }

  dragging(){
    this.drag = false;
  }

  mouseReleased(){
    dragging = false;
    }

  check() {

    if (this.shade == Object.values(colour_range)[3] && this.x < 1000 && this.x > 500 && this.y > 500 && this.y < 1000) {
      console.log('red')
      return true
    }
    else if (this.shade == Object.values(colour_range)[2] && this.x < 500 && this.x > 0 && this.y > 500 && this.y < 1000) {
      console.log('blue')
      return true

    }
    else if (this.shade == Object.values(colour_range)[1] && this.x < 1000 && this.x > 500 && this.y > 0 && this.y < 500) {
      console.log('green')
      return true
    }
    else if (this.shade == Object.values(colour_range)[0] && this.x < 500 && this.x > 0 && this.y > 0 && this.y < 500) {
      console.log('purple')
      return true
    }
    return false
    }

  }
