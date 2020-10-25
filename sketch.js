//Project 1
//Gregoire Drigo
//DM-UY 1133B
//Due-10/26/2020

// //maybe start off with some people being to pass through regularly 
// //ceiling
// //figure tries to push through repeatdlet
// //gets slammed a few times
// //gets tools
// //gets help (send beams)
// //make ceiling move down like its gonna crush it
// //other people move through easily. ceiling opens up for them.

function setup() {
  createCanvas(1000,700);
  noCursor();
	
}

function draw() {
	background(250);


  	people.push(new Person());
  	for (person in people) { //display all 'people'
  		people[person].display();
  		people[person].update();
  	}

  	mainPerson.updatePos();
  	mainPerson.display();
  	wall.display();

}


class Wall {
  constructor() {
  	this.strength = 100; //percentage will relate to its look
  	this.height = 100;
  }

  display() {
  	noStroke();
  	fill(0, 10, 100);
  	rect(0, 150, width, 100);
  	// textureWall();
  }

  textureWall() {
  	fill(90, 20, 39);
  	for(let i = 0; i < 3333; i++) { //adds small lines to wall to add texture
	  	let x1 = Math.random() * this.height;
	    let y1 = Math.random() * this.width;
	    let theta = Math.random() * 2 * Math.PI;
	    let segmentLength = Math.random() * 5 + 2;
	    let x2 = Math.cos(theta) * segmentLength + x1;
	    let y2 = Math.sin(theta) * segmentLength + y1;
	   	line(x1, y1, x2, y2);
	}
    stroke(20,20 - Math.random() * 5,20 - Math.random() * 8, Math.random() * 10 + 75);
  }

  weaken() {}

  move() {}

  openWall()  {}
}
class Brick {
  constructor(pos) {
  	this.strength = 100; //percentage will relate to its look
  	this.height = 100;
  }

  display() {
  	noStroke();
  	fill(0, 10, 100);
  	rect(0, 150, width, 100);
  	// textureWall();
  }

  textureWall() {
  	fill(90, 20, 39);
  	for(let i = 0; i < 3333; i++) { //adds small lines to wall to add texture
	  	let x1 = Math.random() * this.height;
	    let y1 = Math.random() * this.width;
	    let theta = Math.random() * 2 * Math.PI;
	    let segmentLength = Math.random() * 5 + 2;
	    let x2 = Math.cos(theta) * segmentLength + x1;
	    let y2 = Math.sin(theta) * segmentLength + y1;
	   	line(x1, y1, x2, y2);
	}
    stroke(20,20 - Math.random() * 5,20 - Math.random() * 8, Math.random() * 10 + 75);
  }

  weaken() {}

  move() {}

  openWall()  {}
}

class Person {
	//constructor(starting position(array), velocity, radius, color(rgba vals in array))
	constructor(pos=[Math.floor((Math.random()*1000)+1), 800], vel=[0,Math.floor((Math.random() * 15) + 3)],rad=Math.floor((Math.random() * 40) + 30), col=[Math.floor(Math.random() * 80), Math.floor(Math.random() * 80),Math.floor(Math.random() * 80), 170]) { //Person always at bottom of canvas 
		//randomize from select shapes and color and size
		//randomize intial x pos
		// this.pos = new createVector(x,y);
		this.pos = pos;
		this.rad = rad;
		this.col = col;
		// this.vel = new createVector(0, Math.floor((Math.random() * 50) + 10) );
		this.vel = vel;
		
	}

	display() {
		// this.move();
		fill(this.col[0],this.col[1],this.col[2], this.col[3]);
		ellipse(this.pos[0], this.pos[1], this.rad, this.rad);
	}

	update() {
		// this.pos.add(this.vel);
		this.pos[1]-=this.vel[1];
	}

	//only for 'mainPerson'
	updatePos() {
		this.pos[0] = mouseX; 
		this.pos[1] = constrain(mouseY, 250+35, height-35)
		// let m = map(this.pos[0], 0, 800, 250+35, height);
	}

	getWidth() {}
}


var wall = new Wall();
	
var mainPerson = new Person([500,800-100], [0,0], 70, [242,34,63,255]);

var people = [];


// // void mouseClicked() {
// //   currColor++;
// //   if (currColor == colors.length) {
// //     currColor = 0;
// //   }
// // }

// // void fullShape(float centerX, float centerY, float size) {
// //   drawTriangle(centerX-size/2,centerY+(size*0.267), size); //left triangle
// //   drawTriangle(centerX+size/2, centerY+(size*0.267), size); //right triangle
// //   drawTriangle(centerX, centerY-size*0.86+(size*0.267), size); // triangle
// // }


