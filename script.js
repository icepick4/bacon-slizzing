const trustButton = document.getElementById('trust-button');

trustButton.addEventListener('click', () => {
    trustButton.style.display = 'none';
    play();
});

function play() {
    const body = document.getElementById('body');
    body.style.backgroundImage = "url('bacon.gif')";
    body.style.cursor = 'default';
    let audio = document.getElementById('audio');
    audio.play();
}
