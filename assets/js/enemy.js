function Enemy(name, health, ability, spriteUrl) {
  this.name = name;
  this.health = health;
  this.ability = ability;
}

Enemy.prototype = {
  constructor: Enemy
};

this.name = function() {
  return this.name;
};

this.health = function() {
  return this.name;
};

this.ability = function() {
  return this.ability;
};

this.spriteUrl = function() {
  return this.spriteUrl;
};

var enemies = [
	new Enemy('Kunzite', 150, 'Ice Blast', 'k-sprite.gif'),
	new Enemy('Queen Beryl', 200, 'Shadow Slice', 'b-sprite.gif'),
	new Enemy('Queen Metallia', 300, 'Havoc', 'b-sprite.gif')
];
