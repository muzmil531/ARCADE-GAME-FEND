"use strcit";
// Declaring Variables required.
let playerscore = 0;
let points = document.querySelector('.playerscore');
points.innerHTML = "Your Score is  :: " + playerscore;
// Enemies our player must avoid
var Bug = function(x, y, speed) {
	// Variables applied to each of our instances go here,
	// we've provided one for you to get started
	this.x = x;
	this.y = y;
	this.speed = speed;
	// The image/sprite for our enemies, this uses
	// a helper we've provided to easily load images
	this.sprite = 'images/enemy-bug.png';
};
// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Bug.prototype.update = function(dt) {
	// You should multiply any movement by the dt parameter
	// which will ensure the game runs at the same speed for
	// all computers.
	// Describing the Speed for bugs
	this.x = this.x + this.speed * dt;
	if (this.x == 0) {
		this.speed = 100 + Math.floor(Math.random() * 300);
	}
	if (this.x > 500) {
		this.x = 0;
		this.speed = 100 + Math.floor(Math.random() * 300);
	}
	// Discribing a condition to make player to initial position,
	// after touching the top of the desk or bug
	if (player.x < this.x + 70 && player.x + 70 > this.x && player.y < this.y + 70 && player.y + 70 > this.y) {
		player.x = 200;
		player.y = 400;
		// An Alert that he caught by Bugs
		Swal.fire({
			title: 'Oops You Caught by BUGS',
			html: 'Earned Points : ' + playerscore,
			animation: false,
			confirmButtonText: '<i class="fa fa-thumbs-up"></i> Restart',
			customClass: {
				popup: 'animated tada'
			}
		}).then(() => {
			document.location.reload(); /* page reload method */
		});
	}
};
// Draw the enemy on the screen, required method for game
Bug.prototype.render = function() {
	ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
class Actor {
	constructor(x, y, sprite) {
		this.x = x;
		this.y = y;
		this.sprite = 'images/char-boy.png';
	}
}
Actor.prototype.update = function(dt) {
	// playerscore PANNEL
	if (this.y < 40) {
		this.x = 200;
		this.y = 430;
		playerscore += 100;
		points.innerText = "Your playerscore is  " + playerscore; // playerscore pannel on HTML
		if (playerscore === 1000) {
			openWinModal();
		}
	}
}
// Rendering image on canvas
Actor.prototype.render = function() {
	ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
let allEnemies = [];
let enemyLocation = [60, 140, 220];
enemyLocation.map((positionY) => {
	var enemyItem = new Bug(0, positionY, 150);
	allEnemies.push(enemyItem);
});
let player = new Actor(200, 400); // DESCRIBING THE POSITION OF PLAYER
Actor.prototype.handleInput = function(key) {
	// conditionising for key moves
	if (key === 'left' && this.x > 0) {
		this.x -= 100;
	} else if (key === 'right' && this.x < 400) {
		this.x += 100;
	} else if (key === 'up') {
		this.y -= 85;
	} else if (key === 'down' && this.y < 380) {
		this.y += 85;
	}
}
// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
	var allowedKeys = {
		37: 'left',
		38: 'up',
		39: 'right',
		40: 'down'
	};
	player.handleInput(allowedKeys[e.keyCode]);
});
