var tank, ground;// You could have multiple flags like: start, launch to indicate the state of the game.

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const body = matter.body;
const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
// The above line creates different constant variables for Engine, World, Bodies etc.



function setup() {
    // Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.
createCanvas(800,400);
tank = new Tanker(20,20,30,20);
ground  = new Ground(400,0,1200,20);
}

function draw() {
    Engine.update(engine);
ground.display();    
tank.display();
}


function keyReleased() {
    // Call the shoot method for the cannon.
}