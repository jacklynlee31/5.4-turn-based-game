// Set the hero characteristics
function Hero(name, health, ability, imgUrl, spriteUrl) {
  this.name = name;
  this.health = health;
  this.ability = ability;
  this.imgUrl = imgUrl;
  this.spriteUrl = spriteUrl;
}

Hero.prototype = _.extend({
  constructor: Hero,
  attack: function(enemy) {
    enemy.health -= this.ability.damage;
  }
}, Backbone.Events);

// Who are your heroes & what are their characteristics?
var heroes = [
  new Hero('Sailor Moon', 100, {name: 'Moon Tiara Action', damage: 25}, 'moon.gif', 'moon-sprite.png'),
  new Hero('Sailor Mars', 100, {name: 'Fire Soul', damage: 30}, 'mars.gif', 'mars-sprite.png'),
  new Hero('Sailor Venus', 100, {name: 'Crescent Beam', damage: 30}, 'venus.gif', 'venus-sprite.png')
];
