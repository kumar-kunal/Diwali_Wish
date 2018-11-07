var fireworks = [];
var gravity;
var fontsize=60;
var img;


function setup() {
  createCanvas(screen.width, screen.height);
  colorMode(HSB);
  gravity = createVector(0, 0.2);
  stroke(255);
  strokeWeight(4);
  background(0);
  textSize(fontsize);
  textAlign(CENTER, CENTER);
  img = loadImage("calash.png");
}

function draw() {
  colorMode(RGB);
  background(0, 0, 0, 25);
  
  if (random(1) < 0.03) {
    fireworks.push(new Firework());
  }
  
  for (var i = fireworks.length - 1; i >= 0; i--) {
    fireworks[i].update();
    fireworks[i].show();
    
    if (fireworks[i].done()) {
      fireworks.splice(i, 1);
    }
  }

  textAlign(CENTER);
  drawWords( width * .5 );

  image(img, 370, 50, img.width/4, img.height/4);
  image(img, 840, 50, img.width/4, img.height/4);
}

function drawWords(x) {
  fill(0);
  text("शुभ दीवाली", x, 150);
}