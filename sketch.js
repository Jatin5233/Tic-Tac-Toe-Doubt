var form;
var gs;
var game;
var player;
var p1;
var database;
var T1,T2,T3;
function preload(){
T1=loadImage("T1.png");
T2=loadImage("T2.png");
T3=loadImage("T3.png");
}
function setup() {
  database=firebase.database();
  createCanvas(800,800);
  
 
  game=new Game();
}

function draw() {
  background(255,255,255);  
 
  drawSprites();
}