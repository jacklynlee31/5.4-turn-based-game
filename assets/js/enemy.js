// Set the enemy characteristics
function Enemy(name, health, ability, spriteUrl) {
  this.name = name;
  this.health = health;
  this.ability = ability;
  this.spriteUrl = spriteUrl;
}

Enemy.prototype = _.extend({
  constructor: Enemy,
  attack: function(character) {
    character.health -= this.ability.damage;
  }
}, Backbone.Events);

// Who are your enemies & what are their characteristics?
var enemies = [
	new Enemy('Kunzite', 150, {name: 'Ice Blast', damage: 20}, 'k-sprite.png'),
	new Enemy('Queen Beryl', 200, {name: 'Shadow Slice', damage: 30}, 'b-sprite.png'),
	new Enemy('Queen Metallia', 300, {name: 'Havoc', damage: 40}, 'b-sprite.png')
];
