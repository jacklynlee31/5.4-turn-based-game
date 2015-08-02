function Game(hero) {
  this.heroes = [hero];
  this.enemies = [enemies[0]];
  this.gameOver = false;
}

// _.random(0,2);

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
