const drums = document.querySelectorAll('.drum');

drums.forEach(drum => {
  drum.addEventListener('click', playSound);
});

window.addEventListener('keydown', playSound);

function playSound(e) {
  let keyCode;

  if (e.type === 'keydown') {
    keyCode = e.keyCode;
  } else {
    keyCode = e.target.getAttribute('data-key');
  }

  const audio = document.querySelector(`audio[data-key="${keyCode}"]`);

  if (!audio) return;

  audio.currentTime = 0;
  audio.play();

}
