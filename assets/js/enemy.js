function Enemy(name, health, ability) {
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

var enemies = [
	new Enemy('Kunzite', 150, 'Ice Blast'),
	new Enemy('Queen Beryl', 200, 'Shadow Slice'),
	new Enemy('Queen Metallia', 300, 'Havoc')
];
