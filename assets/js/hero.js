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
	new Hero('Sailor Moon', 100, 'Moon Tiara Action', 'moon.gif', 'moon-sprite.png'),
	new Hero('Sailor Mars', 100, 'Fire Soul', 'mars.gif', 'mars-sprite.png'),
	new Hero('Sailor Venus', 100, 'Crescent Beam', 'venus.gif', 'venus-sprite.png')
];
