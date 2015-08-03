// A game needs a hero, enemies
function Game(hero) {
  this.heroes = [hero];
  this.enemies = [enemies[0]];
  this.gameOver = false;

  this.trigger('change');
}

Game.prototype = _.extend({
  constructor: Game,

  runAttack: function() {
    this.heroes[0].attack(this.enemies[0]);
    this.enemies[0].attack(this.heroes[0]);

    this.trigger('change');
  }
}, Backbone.Events);
