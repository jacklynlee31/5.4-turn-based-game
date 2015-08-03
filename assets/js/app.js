// A User should see a start screen
$('.game').html(AppTemplates.start(heroes));

$('.start-name').on('click', function() {
  var index = $(this).data('index');
  var game = new Game(heroes[index]);
  $('.game').html(AppTemplates.battle(game));
});
