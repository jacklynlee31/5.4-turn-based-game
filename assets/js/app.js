// A User should see a start screen
$('.game').html(AppTemplates.start(heroes));

// A User should be able to choose a character for their game

// A User should see the battle screen when a character is clicked

$('.start-name').click(function() {
  $('.game').html(AppTemplates.battle());
});

