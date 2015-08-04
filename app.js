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
AppTemplates['lose'] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<center>\n	<h1>YOU LOSE!</h1>\n</center>\n\n<img src=\"images/lose.gif\" alt=\"lose\">\n";
},"useData":true});
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
AppTemplates['win'] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<center>\n	<h1>YOU WIN!</h1>\n</center>\n\n<img src=\"images/win.gif\" alt=\"win\">\n";
},"useData":true});
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
  new Hero('Sailor Moon', 150, {name: 'Moon Tiara Action', damage: 25}, 'moon.gif', 'moon-sprite.png'),
  new Hero('Sailor Mars', 150, {name: 'Fire Soul', damage: 30}, 'mars.gif', 'mars-sprite.png'),
  new Hero('Sailor Venus', 150, {name: 'Crescent Beam', damage: 30}, 'venus.gif', 'venus-sprite.png')
];

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

// A game needs a hero, enemies
function Game(hero) {
  this.heroes = [hero];
  this.enemies = [enemies[0]];

  this.trigger('change');
}

Game.prototype = _.extend({
  constructor: Game,

  gameWin: function() {
    return this.enemies[0].health <= 0;
  },

  gameLose: function() {
    return this.heroes[0].health <= 0;
  },

  runAttack: function() {
    this.heroes[0].attack(this.enemies[0]);
    this.enemies[0].attack(this.heroes[0]);

    // (this.enemies[0].isDead)

    this.trigger('change');
  }
}, Backbone.Events);

// A User should see a start screen
$('.game').html(AppTemplates.start(heroes));

// Choose a character &
// they are 'exported' to the battle screen
$('.start-name').on('click', function() {
  var index = $(this).data('index');
  var game = new Game(heroes[index]);
  $('.game').html(AppTemplates.battle(game));

  // When you click on the attack button
  // the chosen character attacks
  $('.game').on('click', '.attack', function(ev) {
    game.runAttack();
  });

  game.on('change', function() {
    if (game.gameWin()) {
      $('.game').html(AppTemplates.win(game));
    } else {
      if (game.gameLose()) {
        $('.game').html(AppTemplates.lose(game));
      } else {
        $('.game').html(AppTemplates.battle(game));
      }
    }
  }

);

});
//# sourceMappingURL=app.map