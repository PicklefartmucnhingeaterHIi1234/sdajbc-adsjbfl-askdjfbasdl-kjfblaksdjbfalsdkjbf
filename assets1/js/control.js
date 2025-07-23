document.addEventListener("DOMContentLoaded", function () {
    var audio = document.getElementById("audio"),
        musicSlider = document.querySelector(".music-slider"),
        sliderProgress = document.querySelector(".slider-progress"),
        pauseButton = document.querySelector(".pause-button"),
        currentTime = document.querySelector(".current-time"),
        totalDuration = document.querySelector(".total-duration"),
        songTitle = document.querySelector(".song-title"),
        forwardButton = document.querySelector(".forward-button"),
        backwardButton = document.querySelector(".backward-button");

    var playlist = [
        { title: "victim", audioSrc: "assets1/audio/e1.mp3", duration: 111 },
        { title: "victim", audioSrc: "assets1/audio/e2.mp3", duration: 99 },
        { title: "vicim", audioSrc: "assets1/audio/e3.mp3", duration: 108 },
        { title: "victim", audioSrc: "assets1/audio/e4.mp3", duration: 106 }
    ];

    var currentIndex = 0;
    var isPlaying = false;

    function loadSong(index) {
        var song = playlist[index];
        audio.src = song.audioSrc;
        songTitle.textContent = song.title;
        totalDuration.textContent = formatTime(song.duration);
        audio.currentTime = 0;

        if (isPlaying) {
            audio.play().catch(error => {
                console.error("Playback error: ", error);
            });
        }

        updateProgressBar();
        updateTimes();
        updatePlayPauseIcons();
    }

    function updateProgressBar() {
        let percentage = (audio.currentTime / audio.duration) * 100;
        sliderProgress.style.width = `${percentage}%`;
    }

    function togglePlayPause() {
        let pauseIcon = document.querySelector(".pause-icon"),
            playIcon = document.querySelector(".play-icon");
        if (audio.paused) {
            audio.play().catch(error => {
                console.error("Playback error: ", error);
            });
            isPlaying = true;
            pauseIcon.style.display = "block";
            playIcon.style.display = "none";
        } else {
            audio.pause();
            isPlaying = false;
            pauseIcon.style.display = "none";
            playIcon.style.display = "block";
        }
    }

    function updateTimes() {
        let currentTimeFormatted = formatTime(audio.currentTime),
            totalDurationFormatted = formatTime(audio.duration);
        currentTime.textContent = currentTimeFormatted;
        totalDuration.textContent = totalDurationFormatted;
    }

    function formatTime(seconds) {
        return `${Math.floor(seconds / 60)}:${Math.floor(seconds % 60).toString().padStart(2, "0")}`;
    }

    function updatePlayPauseIcons() {
        let pauseIcon = document.querySelector(".pause-icon"),
            playIcon = document.querySelector(".play-icon");
        if (audio.paused) {
            pauseIcon.style.display = "none";
            playIcon.style.display = "block";
        } else {
            pauseIcon.style.display = "block";
            playIcon.style.display = "none";
        }
    }

    function nextSong() {
        currentIndex = (currentIndex + 1) % playlist.length;
        loadSong(currentIndex);
        if (isPlaying) {
            audio.play().catch(error => {
                console.error("Playback error: ", error);
            });
        }
    }

    audio.addEventListener("loadedmetadata", function () {
        totalDuration.textContent = formatTime(audio.duration);
    });

    audio.addEventListener("timeupdate", function () {
        updateProgressBar();
        updateTimes();
    });

    audio.addEventListener("ended", function () {
        nextSong();
    });

    pauseButton.addEventListener("click", function () {
        togglePlayPause();
    });

    musicSlider.addEventListener("click", function (e) {
        let sliderRect = musicSlider.getBoundingClientRect(),
            clickPosition = e.clientX - sliderRect.left,
            percentage = (clickPosition / sliderRect.width) * 100;
        audio.currentTime = (percentage / 100) * audio.duration;
    });

    forwardButton.addEventListener("click", function () {
        nextSong();
    });

    backwardButton.addEventListener("click", function () {
        currentIndex = (currentIndex - 1 + playlist.length) % playlist.length;
        loadSong(currentIndex);
        if (isPlaying) {
            audio.play().catch(error => {
                console.error("Playback error: ", error);
            });
        }
    });

    loadSong(currentIndex);

    audio.addEventListener('play', function() {
        isPlaying = true;
    });

    audio.addEventListener('pause', function() {
        isPlaying = false;
    });
});
