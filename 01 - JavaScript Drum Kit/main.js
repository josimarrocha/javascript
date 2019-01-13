document.addEventListener('keyup', (e) => {
    let keyCode = document.querySelector(`[data-key="${e.keyCode}"]`);
    if(!keyCode) return;

    keyCode.classList.add('playing');
    let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    audio.currentTime = 0;
    audio.play();

    keyCode.addEventListener('transitionend', () => {
        keyCode.classList.remove('playing');
    })
});