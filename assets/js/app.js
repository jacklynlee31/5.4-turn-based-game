// A User should see a start screen
$('.game').html(AppTemplates.start(heroes));

$('.start-name').click(function() {
  var game = new Game(heroes[0]);
  $('.game').html(AppTemplates.battle(game));
});

// A User should be able to choose a character for their game

// A User should see the battle screen when a character is clicked
