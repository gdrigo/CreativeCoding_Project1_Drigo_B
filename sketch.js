//Project 1
//Gregoire Drigo
//DM-UY 1133B
//Due-10/26/2020


let levels = [false,false,false,false,false];
let maxHeight = 250+35;

function setup() {
  createCanvas(1000,700);
  noCursor();
}

function draw() {
	noStroke();
	// strokeWeight(2); 
	background(250);

  	people.push(new Person());
  	for (person in people) { //display all 'people'
  		people[person].display();
  		people[person].update();
  	}

  	mainPerson.updateMain();
  	mainPerson.display();
  	wall.display();

}


class Wall {
	constructor() {
	  	this.strength = 100; //percentage will relate to its look
	  	this.height = 100;

	  	this.bricks = [];

	  	this.fallenBricks = [];

	  	
	  	for (var xPos = 0; xPos < 1100; xPos+=100) {
	  		let level = 4;
	  		for (var yPos = 150; yPos < 250; yPos+=20) {
	  			if(yPos == 170 || yPos == 210 || yPos == 250) {
	  				this.bricks.push(new Brick([xPos-50, yPos], level));
	  			}
	  			else {
	  				this.bricks.push(new Brick([xPos, yPos], level));
	  			}
	  			level--;
	  		}
	  	}
	  }

  	display() {

	  	// fill(0, 10, 100);
	  	// rect(0, 150, width, 100);
	  	for (var brick = 0; brick < this.bricks.length; brick++) {
	  		this.bricks[brick].display();
	  	}

	  	for (var fallenBrick = 0; fallenBrick < this.fallenBricks.length; fallenBrick++) { //makes sure all fallenBricks are falling
	  		this.fallenBricks[fallenBrick].fall();
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
	  			// this.bricks[i].weaken();
	  			if (this.bricks[i].weaken()) { //current brick is fully weak
	  				for (var currBrick = 0; currBrick < this.bricks.length; currBrick++) { //add all bricks of current brick's level to fallenBricks
				  		if (this.bricks[currBrick].level == this.bricks[i].level) {
				  			this.bricks[currBrick].strength = 0;
				  			this.bricks[currBrick].weaken();
				  			this.fallenBricks.push(this.bricks[i]);
				  		}
				  	}
	  				
	  			}

	  			console.log("TOP");
	  		}
	  	}
  	}

}


class Brick {
  constructor(pos, level) {
  	this.pos = pos;
  	this.strength = 100; //percentage will relate to its look
  	this.height = 20;
  	this.width = 100;
  	// this.col = []
  	this.level = level;

  	this.vel = 0;
  }

  display() {
  	// strokeWeight(2); 
  	this.fall();
  	fill(245, 221, 150, map(this.strength,0,100,100,255));
  	rect(this.pos[0], this.pos[1], this.width, this.height);
  }

  weaken() {
  	this.strength-=0.3;
  	if(this.strength<=0) {
  		this.vel = Math.floor((Math.random() * 10) + 3);
  		levels[this.level] = true; //signals that mainperson has gotten past this level
  		if (this.pos[1] < maxHeight) {
  			maxHeight = this.pos[1]+35; //changes maxHeight to the top of the current level

  			// if (this.level = 4) { //last level
  			// 	maxHeight = 0; //mainPerson can move anywhere vertically
  			// } 
  		}
  		if (levels[-1] == true) { //DOESNT WORK
  			maxHeight = 0;
  		}

  		return true;
  	}
  	return false;
  }

  fall() {//makes all bricks on that level fall if they havent already
  	if (this.pos[1] <= 700-this.height) { //still falling
  		this.pos[1] += this.vel;
  	}
  }

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
		// this.maxHeight = 250+35;
	
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
	updateMain() {

		this.pos[0] = mouseX; 
		// this.pos[1] = constrain(mouseY, this.maxHeight, height-35);
		this.pos[1] = constrain(mouseY, maxHeight, height-35);

		if (this.pos[1] == maxHeight) {
			wall.brickCollision(this.pos[0],this.pos[1],this.rad);
			// console.log("HIT DIFFERENT", this.pos[0], this.pos[1]);
		}

		// let m = map(this.pos[0], 0, 800, 250+35, height);
	}
}


var wall = new Wall();
	
var mainPerson = new Person([500,800-100], [0,0], 70, [242,34,63,255]);

var people = [];



// //Project 1
// //Gregoire Drigo
// //DM-UY 1133B
// //Due-10/26/2020


// function setup() {
//   createCanvas(1000,700);
//   noCursor();
// }

// function draw() {
// 	noStroke();
// 	// strokeWeight(2); 
// 	background(250);

//   	people.push(new Person());
//   	for (person in people) { //display all 'people'
//   		people[person].display();
//   		people[person].update();
//   	}

//   	mainPerson.updatePos(mouseX, mouseY);
//   	mainPerson.display();
//   	wall.display();

// }


// class Wall {
// 	constructor() {
// 	  	this.strength = 100; //percentage will relate to its look
// 	  	this.height = 100;

// 	  	this.bricks = [];
// 	  	for (var xPos = 0; xPos < 1100; xPos+=100) {
// 	  		for (var yPos = 150; yPos < 250; yPos+=20) {
// 	  			if(yPos == 170 || yPos == 210 || yPos == 250) {
// 	  				this.bricks.push(new Brick([xPos-50, yPos]));
// 	  			}
// 	  			else {
// 	  				this.bricks.push(new Brick([xPos, yPos]));
// 	  			}
// 	  		}
// 	  	}
// 	}


//   	display() {
// 	  	for (var brick = 0; brick < this.bricks.length; brick++) {
// 	  		this.bricks[brick].display();
// 	  	}
//   	}

//   	brickCollision(x,y,person) {
//   		//checks which brick was hit by looking at position of main figure
//   		// let personTop = y - (person.rad)/2;
//   		let personTop = y - (person.rad)/2;
//   		let personBottom = y + (person.rad)/2;
//   		let personLeft = x - (person.rad)/2;
//   		let personRight = x + (person.rad)/2;

//   		for (var i = 0; i < this.bricks.length; i++) {
//   			let brickTop = this.bricks[i].pos[1];
// 	  		let brickBottom = this.bricks[i].pos[1] + this.bricks[i].height;
// 	  		let brickLeft = this.bricks[i].pos[0]-(person.rad)/2;
// 	  		let brickRight = this.bricks[i].pos[0] + this.bricks[i].width+(person.rad)/2;

// 	  		console.log(personLeft, brickLeft);

// 	  		if ( ((personTop <= brickBottom) && (personTop >= brickTop)) && (personLeft >= brickLeft && personRight <= brickRight)) {
// 	  			person.updatePos(person.pos[0], brickBottom);
// 	  			this.bricks[i].weaken();
// 	  			console.log("TOP");
// 	  			//maincharacter.top.y += (brickBottom-personTop)
// 	  		}
// 	  		// else if (personBottom == brickTop && (personLeft >= brickLeft && personRight <= brickRight)) {
// 	  		// 	this.bricks[i].weaken();
// 	  		// 	console.log("BOTTOM");
// 	  		// }
// 	  		// else if (personLeft == brickRight && (personTop >= brickTop && personBottom <= brickBottom)) {
// 	  		// 	this.bricks[i].weaken();
// 	  		// 	console.log("LEFT");
// 	  		// }
// 	  		// else if (personRight == brickLeft && (personLeft >= brickLeft && personBottom <= brickBottom)) {
// 	  		// 	this.bricks[i].weaken();
// 	  		// 	console.log("RIGHT");
// 	  		// }

// 	  		// if (personTop == brickBottom && (personLeft >= brickLeft && personRight <= brickRight)) {
// 	  		// 	this.bricks[i].weaken();
// 	  		// 	console.log("TOP");
// 	  		// }
// 	  		// else if (personBottom == brickTop && (personLeft >= brickLeft && personRight <= brickRight)) {
// 	  		// 	this.bricks[i].weaken();
// 	  		// 	console.log("BOTTOM");
// 	  		// }
// 	  		// else if (personLeft == brickRight && (personTop >= brickTop && personBottom <= brickBottom)) {
// 	  		// 	this.bricks[i].weaken();
// 	  		// 	console.log("LEFT");
// 	  		// }
// 	  		// else if (personRight == brickLeft && (personLeft >= brickLeft && personBottom <= brickBottom)) {
// 	  		// 	this.bricks[i].weaken();
// 	  		// 	console.log("RIGHT");
// 	  		// }
  			
// 	  		// this.bricks[brick].display();
// 	  	}
//   	}

// }


// class Brick {
//   constructor(pos) {
//   	this.pos = pos;
//   	this.strength = 100; //percentage will relate to its look
//   	this.height = 20;
//   	this.width = 100;
//   	// this.col = []
//   }

//   display() {
//   	// strokeWeight(2); 
//   	fill(245, 221, 150, map(this.strength,0,100,20,255));
//   	rect(this.pos[0], this.pos[1], this.width, this.height);
//   }

//   weaken() {
//   	this.strength-=0.3;
//   }

//   fall() {}

// }

// class Person {
// 	//constructor(starting position(array), velocity, radius, color(rgba vals in array))
// 	constructor(pos=[Math.floor((Math.random()*1000)+1), 800], vel=[0,Math.floor((Math.random() * 15) + 3)],rad=Math.floor((Math.random() * 40) + 30), col=[Math.floor(Math.random() * 80), Math.floor(Math.random() * 80),Math.floor(Math.random() * 80), 170]) { //Person always at bottom of canvas 
// 		//randomize from select shapes and color and size
// 		//randomize intial x pos
// 		// this.pos = new createVector(x,y);
// 		this.pos = pos;
// 		this.rad = rad;
// 		this.col = col;
// 		// this.vel = new createVector(0, Math.floor((Math.random() * 50) + 10) );
// 		this.vel = vel;
// 		this.maxHeight = 250+35;

// 		//levels represent how much of the wall has been broken
// 		this.levelOne = false;
// 		this.levelTwo = false;
// 		this.levelThree = false;
// 		this.levelFour = false;
// 		this.levelFive = false;

		
// 	}

// 	display() {
// 		fill(this.col[0],this.col[1],this.col[2], this.col[3]);
// 		ellipse(this.pos[0], this.pos[1], this.rad, this.rad);
// 	}

// 	update() {
// 		// this.pos.add(this.vel);
// 		this.pos[1]-=this.vel[1];
// 	}


// 	///////////////////////
// 	//only for 'mainPerson'
// 	updatePos(x, y) {
// 		// if(!this.levelOne && !this.levelTwo && !this.levelThree && !this.levelFour && !this.levelFive) { //hasnt broken any blocks

// 		// }
// 		// else {
// 		// 	if(this.levelOne) {

// 		// 	}
// 		// 	if(this.levelTwo) {

// 		// 	}
// 		// 	if(this.levelThree) {

// 		// 	}
// 		// 	if(this.levelFour) {

// 		// 	}
// 		// 	if(this.levelFive) {

// 		// 	}
// 		// }
		

// 		// this.pos[0] = mouseX; 
// 		this.pos[0] = x; 
// 		// this.pos[1] = constrain(y, this.maxHeight, height-35);
// 		// this.pos[1] = y;

// 		// if (this.pos[1] == this.maxHeight) {
// 		// 	wall.brickCollision(this.pos[0],this.pos[1],this);
// 		// 	// console.log("HIT DIFFERENT", this.pos[0], this.pos[1]);
// 		// }
// 		if (this.pos[1] <= 250+(this.rad/2) && this.pos[1]>= 100-(this.rad/2)) {
// 			wall.brickCollision(this.pos[0],this.pos[1],this);
// 			// console.log("HIT DIFFERENT", this.pos[0], this.pos[1]);
// 		}

// 		// let m = map(this.pos[0], 0, 800, 250+35, height);
// 	}
// }


// var wall = new Wall();
	
// var mainPerson = new Person([500,800-100], [0,0], 70, [242,34,63,255]);

// var people = [];





