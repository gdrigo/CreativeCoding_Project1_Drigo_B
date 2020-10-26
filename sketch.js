// //Project 1
// //Gregoire Drigo
// //DM-UY 1133B
// //Due-10/26/2020


// let levels = [false,false,false,false,false];
// let maxHeight = 250+35;

// let flames = [];

// let wallHasFallen = false;
// function setup() {
//   createCanvas(1000,700);
//   noCursor();
// }

// function draw() { 
// 	background(35,36,43);

// 	//PEOPLE CONTROL
//   	desaturatedPeople.push(new Person());
//   	for (person in desaturatedPeople) { //display all 'people'
//   		desaturatedPeople[person].display();
//   		desaturatedPeople[person].update();
//   	}

//   	//MAIN CHARACTER CONTROL
//   	mainPerson.updateMain();
//   	mainPerson.display();
//   	strokeWeight(1); 
//   	wall.display();

  
//   	//FLAME CONTROL
//   	for(let i = flames.length -1; i>= 0; i--) { //looping backwards lets us see older particles on top
// 	   	flames[i].move();
// 	    flames[i].display();
// 	    flames[i].shrink();
    
// 	    if(flames[i].radius <= 0 ){
// 	      flames.splice(i, 1); //removes the dead flames
// 	    }  
// 	}

//   	let radius = random(20, 45);
//     let flame = new FlameParticle(mainPerson.pos[0], mainPerson.pos[1], radius);
//     flames.push(flame);


//     //VICTORY CONTROL
//     if (wallHasFallen) { //adds more saturated colored 
// 	  	saturatedPeople.push(new Person([Math.floor((Math.random()*1000)+1), 800], [0,Math.floor((Math.random() * 15) + 3)], Math.floor((Math.random() * 30) + 20),         [Math.floor(Math.random() +255), Math.floor(Math.random() * 30+70),Math.floor(Math.random() * 30)+50, 250] ));	

// 	  	for (person in saturatedPeople) { //display all saturated people'
// 	  		saturatedPeople[person].display();
// 	  		saturatedPeople[person].update();
// 	  	}
// 	}

// }


// class Wall {
// 	constructor() {
// 	  	this.strength = 100; //percentage will relate to its look
// 	  	this.height = 100;

// 	  	this.bricks = [];

// 	  	this.fallenBricks = [];

	  	
// 	  	for (var xPos = 0; xPos < 1100; xPos+=100) {
// 	  		let level = 4;
// 	  		for (var yPos = 150; yPos < 250; yPos+=20) {
// 	  			if(yPos == 170 || yPos == 210 || yPos == 250) {
// 	  				this.bricks.push(new Brick([xPos-50, yPos], level));
// 	  			}
// 	  			else {
// 	  				this.bricks.push(new Brick([xPos, yPos], level));
// 	  			}
// 	  			level--;
// 	  		}
// 	  	}
// 	  }

//   	display() {

// 	  	for (var brick = 0; brick < this.bricks.length; brick++) {
// 	  		this.bricks[brick].display();
// 	  	}

// 	  	for (var fallenBrick = 0; fallenBrick < this.fallenBricks.length; fallenBrick++) { //makes sure all fallenBricks are falling
// 	  		strokeWeight(0);
// 	  		this.fallenBricks[fallenBrick].fall();
// 	  	}
//   	}

//   	brickCollision(x,y,rad) {
//   		//checks which brick was hit by looking at position of main figure
//   		let personTop = y - rad/2;
//   		let personBottom = y + rad/2;
//   		let personLeft = x - rad/2;
//   		let personRight = x + rad/2;

//   		for (var i = 0; i < this.bricks.length; i++) {
//   			let brickTop = this.bricks[i].pos[1];
// 	  		let brickBottom = this.bricks[i].pos[1] + this.bricks[i].height;
// 	  		let brickLeft = this.bricks[i].pos[0]-rad/2;
// 	  		let brickRight = this.bricks[i].pos[0] + this.bricks[i].width+rad/2;

// 	  		// console.log(personLeft, brickLeft);

// 	  		if (personTop == brickBottom && (personLeft >= brickLeft && personRight <= brickRight )) {
// 	  			if (this.bricks[i].weaken()) { //current brick is fully weak
// 	  				for (var currBrick = 0; currBrick < this.bricks.length; currBrick++) { //add all bricks of current brick's level to fallenBricks
// 				  		if (this.bricks[currBrick].level == this.bricks[i].level) {
// 				  			this.bricks[currBrick].strength = 0;
// 				  			this.bricks[currBrick].color[0] = this.bricks[i].color[0];
// 				  			this.bricks[currBrick].color[1] = this.bricks[i].color[1];
// 				  			this.bricks[currBrick].color[2] = this.bricks[i].color[2];
// 				  			this.bricks[currBrick].pos[0] += Math.floor((Math.random()*-10)+10); //adds space between bricks when falling

// 				  			this.bricks[currBrick].weaken();
// 				  			this.fallenBricks.push(this.bricks[i]);
// 				  		}
// 				  	}	
// 	  			}

// 	  			// console.log("TOP");
// 	  		}
// 	  	}
//   	}

// }


// class Brick {
//   constructor(pos, level) {
//   	this.pos = pos;
//   	this.strength = 100; //percentage will relate to its look
//   	this.height = 20;
//   	this.width = 100;
//   	// this.col = []
//   	this.level = level;

//   	this.vel = 0;
//   	this.acc = 0;
//   	this.opac =  255;
//   	this.color = [245, 221, 150, 255];
//   }

//   display() {
//   	strokeWeight(1);
//   	if (this.strength <= 0 ) {
//   		strokeWeight(0); 

//   		//brick flashes red then transitins to black while falling
//   		this.color[0]-=3;
// 	  	this.color[1]-=3;
// 	  	this.color[2]-=3;
//   	}
  	 
  	
//   	this.fall();
//   	// fill(245, 221, 150, map(this.strength,0,100,100,255));
//   	this.opac =  map(this.strength,0,100,150,255)
//   	fill(this.color[0], this.color[1], this.color[2], this.opac);


//   	rect(this.pos[0], this.pos[1], this.width, this.height);
//   }

//   weaken() {
//   	this.strength-=0.3;
//   	this.color[0]-=0.1;
//   	this.color[1]-=0.4;
//   	this.color[2]-=0.4;
//   	if(this.strength<=0) {
//   		this.vel = Math.floor((Math.random() * 10) + 3);
//   		this.acc = 0.3; //acceleration due to gravity here
//   		levels[this.level] = true; //signals that mainperson has gotten past this level

  		
//   		if (this.pos[1] < maxHeight) {
//   			maxHeight = this.pos[1]+35; //changes maxHeight to the top of the current level
  			
//   			if (levels[4] == true) { //last level
//   				wallHasFallen = true;
//   				maxHeight = 0; //mainPerson can move anywhere vertically
//   			}
//   		}
  		
//   		return true; //signals that bricks should fall()
//   	}
//   	return false;
//   }

//   fall() {//makes brick fall to ground
//   	if (this.pos[1] <= height-(this.height*(this.level+1))) { //brick still falling
//   		this.pos[1] += this.vel;
//   		this.vel += this.acc;
//   	}
//   }

// }


// class Person {
// 	//constructor(starting position(array), velocity, radius, color(rgba vals in array))
// 	constructor(pos=[Math.floor((Math.random()*1000)+1), 800], vel=[0,Math.floor((Math.random() * 15) + 3)],rad=Math.floor((Math.random() * 40) + 30), col=[Math.floor(Math.random() * 80), Math.floor(Math.random() * 80),Math.floor(Math.random() * 80), 170]) { //Person always at bottom of canvas 
// 		//randomize from select shapes and color and size
// 		//randomize intial x pos
// 		this.pos = pos;
// 		this.rad = rad;
// 		this.col = col;
// 		this.vel = vel;	
// 	}

// 	display() {
// 		fill(this.col[0],this.col[1],this.col[2], this.col[3]);
// 		ellipse(this.pos[0], this.pos[1], this.rad, this.rad);
// 	}

// 	update() {
// 		this.pos[1]-=this.vel[1];
// 	}


// 	///////////////////////
// 	//only for 'mainPerson'
// 	updateMain() {

// 		this.pos[0] = mouseX; 
// 		// this.pos[1] = constrain(mouseY, this.maxHeight, height-35);
// 		this.pos[1] = constrain(mouseY, maxHeight, height-35);

// 		if (this.pos[1] == maxHeight) {
// 			wall.brickCollision(this.pos[0],this.pos[1],this.rad);
// 			// console.log("HIT DIFFERENT", this.pos[0], this.pos[1]);
// 		}
// 	}
// }

// class FlameParticle{
//   constructor(x, y, rad) {
//     this.x = x;
//     this.y = y;
//     this.radius = rad;
    
//     this.color = color(255);
//     let r = Math.floor((Math.random() * 3) + 1);
//     // console.log(r);
//     if(r == 1){
//       this.color = color(255,100,20,50); // orange
//     } else if(r == 2 ){
//       this.color = color(255, 200, 10, 50); // yellow
//     } else if(r == 3 ){
//       this.color = color(255, 80, 5, 50); // reddish
//     }
    
//   }

//   display() {
//     strokeWeight(0);
//     fill(this.color);
//     ellipse(this.x, this.y, this.radius);
//   }

//   move() { //'jittery' movement for flame particles
//     this.x += random(-5, 5);
//     this.y -= random(1, 3);
//   }
  
//   shrink(){ // shrink flame particles' size over time
   
//    this.radius-=0.8;
//   }
// }


// var wall = new Wall();
	
// var mainPerson = new Person([500,800-100], [0,0], 70, [242,34,63,255]);

// var desaturatedPeople = [];

// var saturatedPeople = [];


//Project 1
//Gregoire Drigo
//DM-UY 1133B
//Due-10/26/2020


let levels = [false,false,false,false,false];
let maxHeight = 250+35;

let flames = [];

let wallHasFallen = false;
function setup() {
  createCanvas(1000,700);
  noCursor();
}

function draw() { 
	background(35,36,43);

	//PEOPLE CONTROL
  	desaturatedPeople.push(new Person());
  	for (person in desaturatedPeople) { //display all 'people'
  		desaturatedPeople[person].display();
  		desaturatedPeople[person].update();
  	}

  	//MAIN CHARACTER CONTROL
  	mainPerson.updateMain();
  	mainPerson.display();
  	strokeWeight(1); 
  	wall.display();

  
  	//FLAME CONTROL
  	for(let i = flames.length -1; i>= 0; i--) { //looping backwards lets us see older particles on top
	   	flames[i].move();
	    flames[i].display();
	    flames[i].shrink();
    
	    if(flames[i].radius <= 0 ){
	      flames.splice(i, 1); //removes the dead flames
	    }  
	}

  	let radius = random(20, 45);
    let flame = new FlameParticle(mainPerson.pos[0], mainPerson.pos[1], radius);
    flames.push(flame);


    //VICTORY CONTROL
    if (wallHasFallen) { //adds more saturated colored 
	  	saturatedPeople.push(new Person([Math.floor((Math.random()*1000)+1), 800], [0,Math.floor((Math.random() * 15) + 3)], Math.floor((Math.random() * 30) + 20),         [Math.floor(Math.random() +255), Math.floor(Math.random() * 30+70),Math.floor(Math.random() * 30)+50, 250] ));	

	  	for (person in saturatedPeople) { //display all saturated people'
	  		saturatedPeople[person].display();
	  		saturatedPeople[person].update();
	  	}
	}

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

	  	for (var brick = 0; brick < this.bricks.length; brick++) {
	  		this.bricks[brick].display();
	  	}

	  	for (var fallenBrick = 0; fallenBrick < this.fallenBricks.length; fallenBrick++) { //makes sure all fallenBricks are falling
	  		strokeWeight(0);
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

	  		// console.log(personLeft, brickLeft);

	  		if (personTop == brickBottom && (personLeft >= brickLeft && personRight <= brickRight )) {
	  			if (this.bricks[i].weaken()) { //current brick is fully weak
	  				for (var currBrick = 0; currBrick < this.bricks.length; currBrick++) { //add all bricks of current brick's level to fallenBricks
				  		if (this.bricks[currBrick].level == this.bricks[i].level) {
				  			this.bricks[currBrick].strength = 0;
				  			this.bricks[currBrick].color[0] = this.bricks[i].color[0];
				  			this.bricks[currBrick].color[1] = this.bricks[i].color[1];
				  			this.bricks[currBrick].color[2] = this.bricks[i].color[2];
				  			this.bricks[currBrick].pos[0] += Math.floor((Math.random()*-10)+10); //adds space between bricks when falling

				  			this.bricks[currBrick].weaken();
				  			this.fallenBricks.push(this.bricks[i]);
				  		}
				  	}	
	  			}

	  			// console.log("TOP");
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
  	this.acc = 0;
  	this.opac =  255;
  	this.color = [245, 221, 150, 255];
  }

  display() {
  	strokeWeight(1);
  	if (this.strength <= 0 ) {
  		strokeWeight(0); 

  		//brick flashes red then transitins to black while falling
  		this.color[0]-=3;
	  	this.color[1]-=3;
	  	this.color[2]-=3;
  	}
  	 
  	
  	this.fall();
  	// fill(245, 221, 150, map(this.strength,0,100,100,255));
  	this.opac =  map(this.strength,0,100,150,255)
  	fill(this.color[0], this.color[1], this.color[2], this.opac);


  	rect(this.pos[0], this.pos[1], this.width, this.height);
  }

  weaken() {
  	this.strength-=0.3;
  	this.color[0]-=0.1;
  	this.color[1]-=0.4;
  	this.color[2]-=0.4;
  	if(this.strength<=0) {
  		this.vel = Math.floor((Math.random() * 10) + 3);
  		this.acc = 0.3; //acceleration due to gravity here
  		levels[this.level] = true; //signals that mainperson has gotten past this level

  		
  		if (this.pos[1] < maxHeight) {
  			maxHeight = this.pos[1]+35; //changes maxHeight to the top of the current level
  			
  			if (levels[4] == true) { //last level
  				wallHasFallen = true;
  				maxHeight = 0; //mainPerson can move anywhere vertically
  			}
  		}
  		
  		return true; //signals that bricks should fall()
  	}
  	return false;
  }

  fall() {//makes brick fall to ground
  	if (this.pos[1] <= height-(this.height*(this.level+1))) { //brick still falling
  		this.pos[1] += this.vel;
  		this.vel += this.acc;
  	}
  }

}


class Person {
	//constructor(starting position(array), velocity, radius, color(rgba vals in array))
	constructor(pos=[Math.floor((Math.random()*1000)+1), 800], vel=[0,Math.floor((Math.random() * 15) + 3)],rad=Math.floor((Math.random() * 40) + 30), col=[Math.floor(Math.random() * 80), Math.floor(Math.random() * 80),Math.floor(Math.random() * 80), 170]) { //Person always at bottom of canvas 
		//randomize from select shapes and color and size
		//randomize intial x pos
		this.pos = pos;
		this.rad = rad;
		this.col = col;
		this.vel = vel;	
	}

	display() {
		fill(this.col[0],this.col[1],this.col[2], this.col[3]);
		ellipse(this.pos[0], this.pos[1], this.rad, this.rad);
	}

	update() {
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
	}
}

class FlameParticle{
  constructor(x, y, rad) {
    this.x = x;
    this.y = y;
    this.radius = rad;
    
    this.color = color(255);
    let r = Math.floor((Math.random() * 3) + 1);
    // console.log(r);
    if(r == 1){
      this.color = color(255,100,20,50); // orange
    } else if(r == 2 ){
      this.color = color(255, 200, 10, 50); // yellow
    } else if(r == 3 ){
      this.color = color(255, 80, 5, 50); // reddish
    }
    
  }

  display() {
    strokeWeight(0);
    fill(this.color);
    ellipse(this.x, this.y, this.radius);
  }

  move() { //'jittery' movement for flame particles
    this.x += random(-5, 5);
    this.y -= random(1, 3);
  }
  
  shrink(){ // shrink flame particles' size over time
   
   this.radius-=0.8;
  }
}


var wall = new Wall();
	
var mainPerson = new Person([500,800-100], [0,0], 70, [242,34,63,255]);

var desaturatedPeople = [];

var saturatedPeople = [];