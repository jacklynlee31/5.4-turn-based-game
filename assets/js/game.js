// A game needs a hero, enemies
function Game(hero) {
  this.heroes = [hero];
  this.enemies = [enemies[0]];

  this.trigger('change');
}

Game.prototype = _.extend({
  constructor: Game,

  gameWin: function() {
    return this.enemies[0].health <= 0;
  },

  gameLose: function() {
    return this.heroes[0].health <= 0;
  },

  runAttack: function() {
    this.heroes[0].attack(this.enemies[0]);
    this.enemies[0].attack(this.heroes[0]);

    // (this.enemies[0].isDead)

    this.trigger('change');
  }
}, Backbone.Events);
