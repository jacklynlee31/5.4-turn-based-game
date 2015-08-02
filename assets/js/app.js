// A User should see a start screen
$('.game').html(AppTemplates.start(heroes));

$('.start-name').click(function() {
  var index = $(this).data('index');
  var game = new Game(heroes[index]);
  $('.game').html(AppTemplates.battle(game));
});

// A User should be able to choose a character for their game

// A User should see the battle screen when a character is clicked

// var game = new Game(enemies[0]);
