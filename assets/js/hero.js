function Hero(name, health, ability, imgUrl, spriteUrl) {
  this.name = name;
  this.health = health;
  this.ability = ability;
  this.imgUrl = imgUrl;
  this.spriteUrl = spriteUrl;
}

Hero.prototype = {
  constructor: Hero
};

this.name = function() {
  return this.name;
};

this.health = function() {
  return this.health;
};

this.ability = function() {
  return this.ability;
};

this.spriteUrl = function() {
  return this.spriteUrl;
};

var heroes = [
	new Hero('Sailor Moon', 100, {name: 'Moon Tiara Action', damage: 25}, 'moon.gif', 'moon-sprite.png'),
	new Hero('Sailor Mars', 100, {name: 'Fire Soul', damage: 30}, 'mars.gif', 'mars-sprite.png'),
	new Hero('Sailor Venus', 100, {name: 'Crescent Beam', damage: 30}, 'venus.gif', 'venus-sprite.png')
];

$('.game').on('click', '.attack', function(ev) {
  game.runAttack();
});

this.getAttackStrength = function(aiblityName) {
  if (this.ability[abilityName]) {
    return this.ability[abilityName];
  }

  return 5;
};

