// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  var hornSelect = document.getElementById('horn-select');
  var hornImage  = document.querySelector('#expose img');
  var hornAudio  = document.querySelector('audio');
  var volSlider  = document.getElementById('volume');
  var volIcon    = document.querySelector('#volume-controls img');
  var playButton = document.querySelector('button');
  var jsConfetti = new JSConfetti();

  hornSelect.addEventListener('change', function() {
    var choice = hornSelect.value;
    hornImage.src = 'assets/images/' + choice + '.svg';
    hornAudio.src = 'assets/audio/' + choice + '.mp3';
  });

  volSlider.addEventListener('input', function() {
    var v = parseInt(volSlider.value, 10);
    hornAudio.volume = v / 100;

    var level;
    if (v === 0) {
      level = 0;
    } else if (v < 33) {
      level = 1;
    } else if (v < 67) {
      level = 2;
    } else {
      level = 3;
    }

    volIcon.src = 'assets/icons/volume-level-' + level + '.svg';
    volIcon.alt = 'Volume level ' + level;
  });

  playButton.addEventListener('click', function() {
    if (hornSelect.value === 'select') {
      return;
    }
    hornAudio.play();
    if (hornSelect.value === 'party-horn') {
      jsConfetti.addConfetti();
    }
  });
}