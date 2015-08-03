AppTemplates = {};

AppTemplates['battle'] = Handlebars.template({"1":function(depth0,helpers,partials,data,blockParams) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "	    <div class=\"sprite-hero\">\n	        <img src=\"images/"
    + alias2(alias1(((stack1 = blockParams[0][0]) != null ? stack1.spriteUrl : stack1), depth0))
    + "\" alt=\""
    + alias2(alias1(((stack1 = blockParams[0][0]) != null ? stack1.name : stack1), depth0))
    + "\">\n			<p class=\"sprite-name\">"
    + alias2(alias1(((stack1 = blockParams[0][0]) != null ? stack1.name : stack1), depth0))
    + "</p>\n	        <p class=\"health\">Health: "
    + alias2(alias1(((stack1 = blockParams[0][0]) != null ? stack1.health : stack1), depth0))
    + "</p>\n	        <button class=\"attack\">Attack with "
    + alias2(alias1(((stack1 = ((stack1 = blockParams[0][0]) != null ? stack1.ability : stack1)) != null ? stack1.name : stack1), depth0))
    + "</button>\n	    </div>\n";
},"3":function(depth0,helpers,partials,data,blockParams) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "		<div class=\"sprite-enemy\">\n	        <img src=\"images/"
    + alias2(alias1(((stack1 = blockParams[0][0]) != null ? stack1.spriteUrl : stack1), depth0))
    + "\" alt=\""
    + alias2(alias1(((stack1 = blockParams[0][0]) != null ? stack1.name : stack1), depth0))
    + "\">\n	        <p class=\"sprite-name\">"
    + alias2(alias1(((stack1 = blockParams[0][0]) != null ? stack1.name : stack1), depth0))
    + "</p>\n	        <p class=\"health\">Health: "
    + alias2(alias1(((stack1 = blockParams[0][0]) != null ? stack1.health : stack1), depth0))
    + "</p>\n	        <p class=\"enemy-attack\">Attack: "
    + alias2(alias1(((stack1 = ((stack1 = blockParams[0][0]) != null ? stack1.ability : stack1)) != null ? stack1.name : stack1), depth0))
    + "</p>\n	    </div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,blockParams) {
    var stack1;

  return "<center>\n	<h1>BATTLE</h1>\n</center>\n\n<div class=\"sprites\">\n\n\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.heroes : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 1, blockParams),"inverse":this.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
    + "\n\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.enemies : depth0),{"name":"each","hash":{},"fn":this.program(3, data, 1, blockParams),"inverse":this.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
    + "</div>\n";
},"useData":true,"useBlockParams":true});
AppTemplates['start'] = Handlebars.template({"1":function(depth0,helpers,partials,data,blockParams) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "    <div class=\"start-pic\">\n        <img src=\"images/"
    + alias2(alias1(((stack1 = blockParams[0][0]) != null ? stack1.imgUrl : stack1), depth0))
    + "\" alt=\""
    + alias2(alias1(((stack1 = blockParams[0][0]) != null ? stack1.name : stack1), depth0))
    + "\">\n    </div>\n";
},"3":function(depth0,helpers,partials,data,blockParams) {
    var stack1, helper, alias1=this.escapeExpression;

  return "        <button data-index=\""
    + alias1(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "\" class=\"start-name\">"
    + alias1(this.lambda(((stack1 = blockParams[0][0]) != null ? stack1.name : stack1), depth0))
    + "</button>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,blockParams) {
    var stack1;

  return "<center>\n	<h1>SELECT YOUR CHARACTER</h1>\n</center>\n\n"
    + ((stack1 = helpers.each.call(depth0,depth0,{"name":"each","hash":{},"fn":this.program(1, data, 1, blockParams),"inverse":this.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers.each.call(depth0,depth0,{"name":"each","hash":{},"fn":this.program(3, data, 1, blockParams),"inverse":this.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "");
},"useData":true,"useBlockParams":true});
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

this.getAttackStrength = function(abilityName) {
  if (this.ability[abilityName]) {
    return this.ability[abilityName];
  }

  return 5;
};

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
	new Enemy('Kunzite', 150, {name: 'Ice Blast', damage: 20}, 'k-sprite.png'),
	new Enemy('Queen Beryl', 200, {name: 'Shadow Slice', damage: 30}, 'b-sprite.png'),
	new Enemy('Queen Metallia', 300, {name: 'Havoc', damage: 40}, 'b-sprite.png')
];

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

// A User should see a start screen
$('.game').html(AppTemplates.start(heroes));

$('.start-name').on('click', function() {
  var index = $(this).data('index');
  var game = new Game(heroes[index]);
  $('.game').html(AppTemplates.battle(game));
});

$('.game').on('click', '.attack', function(ev) {
  game.runAttack();
});
//# sourceMappingURL=app.map