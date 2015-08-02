function Game() {
  this.heroes = [];
  this.enemies = [enemies[0]];
  this.gameOver = false;
}

Game.prototype = _.extend({
  constructor: Game
});

// game constructor

// function Game
// this.players = []

// game.prototype= _.extend

//create a game object - start and it will give you
// player choices, when you click on that player
// choice you have that index, send it - hero chosen
