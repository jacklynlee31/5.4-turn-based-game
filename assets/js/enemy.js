function Enemy(name, health, ability, spriteUrl) {
  this.name = name;
  this.health = health;
  this.ability = ability;
  this.spriteUrl = spriteUrl;
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
	new Enemy('Kunzite', 150, 'Ice Blast', 'k-sprite.png'),
	new Enemy('Queen Beryl', 200, 'Shadow Slice', 'b-sprite.png'),
	new Enemy('Queen Metallia', 300, 'Havoc', 'b-sprite.png')
];
