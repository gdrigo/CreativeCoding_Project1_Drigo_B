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
	// noStroke();
	strokeWeight(2); 
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

	  	this.bricks = [];
	  	for (var xPos = 0; xPos < 1100; xPos+=100) {
	  		for (var yPos = 150; yPos < 250; yPos+=20) {
	  			if(yPos == 170 || yPos == 210 || yPos == 250) {
	  				this.bricks.push(new Brick([xPos-50, yPos]));
	  			}
	  			else {
	  				this.bricks.push(new Brick([xPos, yPos]));
	  			}
	  		}
	  	}
	  }


  	display() {
	  	// noStroke();
	  	// fill(0, 10, 100);
	  	// rect(0, 150, width, 100);
	  	for (var brick = 0; brick < this.bricks.length; brick++) {
	  		this.bricks[brick].display();
	  	}
  	}

  	brickCollision(x,y,rad) {
  		//checks which brick was hit by looking at position of main figure
  		let personTop = y - rad/2;
  		let personBottom = y + rad/2;
  		let personLeft = x - rad/2;
  		let personRight = x + rad/2;

  		for (var i = 0; i < this.bricks.length; i++) {
  			let brickTop = this.bricks[i].pos[1];
	  		let brickBottom = this.bricks[i].pos[1] + this.bricks[i].height;
	  		let brickLeft = this.bricks[i].pos[0]-rad/2;
	  		let brickRight = this.bricks[i].pos[0] + this.bricks[i].width+rad/2;

	  		console.log(personLeft, brickLeft);

	  		if (personTop == brickBottom && (personLeft >= brickLeft && personRight <= brickRight )) {
	  			this.bricks[i].weaken();
	  			console.log("TOP");
	  		}


	  		// if (personBottom == brickTop) {
	  		// 	this.bricks[i].weaken();
	  		// 	console.log("HIT");
	  		// }
	  		// if (personLeft == brickRight) {
	  		// 	this.bricks[i].weaken();
	  		// 	console.log("L");
	  		// }
	  		// if (personRight == brickLeft) {
	  		// 	this.bricks[i].weaken();
	  		// }
  			
	  		// this.bricks[brick].display();
	  	}
  	}

}


class Brick {
  constructor(pos) {
  	this.pos = pos;
  	this.strength = 100; //percentage will relate to its look
  	this.height = 20;
  	this.width = 100;
  	// this.col = []
  }

  display() {
  	// strokeWeight(2); 
  	fill(245, 221, 150, map(this.strength,0,100,20,255));
  	rect(this.pos[0], this.pos[1], this.width, this.height);
  }

  weaken() {
  	this.strength-=0.3;
  }

  fall() {}

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
		this.maxHeight = 250+35;

		//levels represnet how much of the wall has been broken
		this.levelOne = false;
		this.levelTwo = false;
		this.levelThree = false;
		this.levelFour = false;
		this.levelFive = false;

		
	}

	display() {
		fill(this.col[0],this.col[1],this.col[2], this.col[3]);
		ellipse(this.pos[0], this.pos[1], this.rad, this.rad);
	}

	update() {
		// this.pos.add(this.vel);
		this.pos[1]-=this.vel[1];
	}


	///////////////////////
	//only for 'mainPerson'
	updatePos() {
		if(!this.levelOne && !this.levelTwo && !this.levelThree && !this.levelFour && !this.levelFive) { //hasnt broken any blocks

		}
		else {
			if(this.levelOne) {

			}
			if(this.levelTwo) {

			}
			if(this.levelThree) {

			}
			if(this.levelFour) {

			}
			if(this.levelFive) {

			}
		}
		

		this.pos[0] = mouseX; 
		this.pos[1] = constrain(mouseY, this.maxHeight, height-35);

		if (this.pos[1] == this.maxHeight) {
			wall.brickCollision(this.pos[0],this.pos[1],this.rad);
			// console.log("HIT DIFFERENT", this.pos[0], this.pos[1]);
		}

		// let m = map(this.pos[0], 0, 800, 250+35, height);
	}
}


var wall = new Wall();
	
var mainPerson = new Person([500,800-100], [0,0], 70, [242,34,63,255]);

var people = [];





