function Game(hero) {
  this.heroes = [hero];
  this.enemies = [enemies[0]];
  this.gameOver = false;
}

Game.prototype = _.extend({
  constructor: Game,

  attack: function(enemy, ability) {
    enemy.trigger('attacked', thisgetAttackStrength(ability));
  }
}, Backbone.Events);
