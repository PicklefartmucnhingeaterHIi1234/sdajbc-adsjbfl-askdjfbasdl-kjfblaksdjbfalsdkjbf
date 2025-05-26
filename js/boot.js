const bootScreen = document.getElementById('boot-screen');
const clickText = document.getElementById('click-text');
const contentWrapper = document.getElementById('content-wrapper');

let revealed = false;
let clickable = false;
const clickPrompt = document.querySelector('.click-prompt');
clickPrompt.style.visibility = 'hidden';

setTimeout(() => {
  clickable = true;
  clickPrompt.style.visibility = 'visible';
  clickPrompt.textContent = 'click to continue';
}, 4500);

document.body.addEventListener('click', () => {
  if (clickable && !revealed) {
    bootScreen.style.display = 'none';
    contentWrapper.style.display = 'block';
    clickText.style.display = 'none';
    contentWrapper.style.filter = 'none';
    if (window.initAudioPlayer) {
      window.initAudioPlayer();
    }
    revealed = true;
  }
}); 