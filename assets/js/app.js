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
      $('.game').html(AppTemplates.battle(game));
    }

    if (game.gameLose()) {
      $('.game').html(AppTemplates.lose(game));
    } else {
      $('.game').html(AppTemplates.battle(game));
    }
  });

});

    // if (game.gameOver()) {

//   game.on('change', function() {
//     $('.game').html(AppTemplates.battle(game));
//   });
// });
