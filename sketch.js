var bg,bg2,form,system,code,security;
var score=0;

function preload() {
  //bg = loadImage("aladdin_cave.jpg");
  bg = loadImage("wall.webp");
  bg2 = loadImage("water.jpg");
}

function setup() {
  createCanvas(1000,500);
  system = new System()
  security = new Security()
}

function draw() {
  background(bg);
  clues();
  security.display();
  textSize(20);
  fill("white");
  text("Score: " + score, 450, 50);

  if(score === 3) {
    clear();
    background(bg2)
    stroke("white")
    fill("bLUE")
    textSize(40);
    text("!!! YOU KNOW AASHUTOSH VERY WELL !! ",100, 200);
    stroke("white")
    textSize(60);
    text("From your friend Shivani",250, 310);
    stroke("white")
    textSize(60);
    text("Hope u enjoyed :)",250, 400);
  }

  drawSprites()
}