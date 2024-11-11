const songs = [
    { title: "iwantu2know*:) - D4WN", url: "/songs/1.mp3" },
    { title: "randomly - lucki", url: "/songs/2.mp3" },
    { title: "south - jaydes", url: "/songs/3.mp3" },
    { title: "TRACKHAWKS // BENTLEYS", url: "/songs/4.mp3" },
    { title: "under your spell", url: "/songs/5.mp3" }

];

function playRandomSong() {
    const audio = document.querySelector('audio');
    if (audio) {
        audio.pause();
        audio.remove();

    }

    const randomSong = songs[Math.floor(Math.random() * songs.length)];

    const newAudio = new Audio(randomSong.url);
    newAudio.play();

    document.getElementById('currentSong').textContent = `Currently Playing: ${randomSong.title}`;
}

window.onload = playRandomSong;
