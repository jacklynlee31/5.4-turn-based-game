function Hero(name, health, ability, imgUrl) {
  this.name = name;
  this.health = health;
  this.ability = ability;
  this.imgUrl = imgUrl;
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

var heroes = [
	new Hero('Sailor Moon', 100, 'Moon Tiara Action', 'moon.gif'),
	new Hero('Sailor Mars', 100, 'Fire Soul', 'mars.gif'),
	new Hero('Sailor Venus', 100, 'Crescent Beam', 'venus.gif')
];
