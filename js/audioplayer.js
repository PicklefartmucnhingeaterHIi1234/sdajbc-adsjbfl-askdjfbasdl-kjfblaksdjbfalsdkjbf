const audioPlayer = document.getElementById('audio-player');
const music = document.getElementById('music');
const playBtn = document.getElementById('play-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const shuffleBtn = document.getElementById('shuffle-btn');
const progressBar = document.querySelector('.progress-fill');
const songList = document.querySelector('.song-list');
const closeButton = document.querySelector('.close-button');
const playerToggle = document.getElementById('player-toggle');

const songs = [
  'Dont Wanna Die.mp3',
  'fuck this planet man.mp3',
  'on your own.mp3',
  'seduce a priest for me.mp3',
];

let currentSongIndex = 0;
let isShuffled = false;
let shuffledPlaylist = [...songs];

function initSongList() {
  songList.innerHTML = '';
  const playlist = isShuffled ? shuffledPlaylist : songs;
  playlist.forEach((song, index) => {
    const songItem = document.createElement('div');
    songItem.className = 'song-item';
    songItem.textContent = song.replace('.mp3', '');
    songItem.addEventListener('click', () => playSong(index));
    songList.appendChild(songItem);
  });
  updateActiveSong();
}

function updateActiveSong() {
  document.querySelectorAll('.song-item').forEach((item, index) => {
    item.classList.toggle('active', index === currentSongIndex);
  });
}

function playSong(index) {
  currentSongIndex = index;
  const playlist = isShuffled ? shuffledPlaylist : songs;
  music.src = `media/${playlist[currentSongIndex]}`;
  music.play();
  playBtn.textContent = '⏸';
  updateActiveSong();
}

function shuffleArray(array) {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

window.initAudioPlayer = function() {
  playerToggle.style.display = 'block';
  music.src = 'media/Dont Wanna Die.mp3';
  music.volume = 0.3;
  music.play();
  currentSongIndex = 0;
  updateActiveSong();
  playBtn.textContent = '⏸';
}

playBtn.addEventListener('click', () => {
  if (music.paused) {
    music.play();
    playBtn.textContent = '⏸';
  } else {
    music.pause();
    playBtn.textContent = '▶';
  }
});

prevBtn.addEventListener('click', () => {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  playSong(currentSongIndex);
});

nextBtn.addEventListener('click', () => {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  playSong(currentSongIndex);
});

shuffleBtn.addEventListener('click', () => {
  isShuffled = !isShuffled;
  shuffleBtn.style.background = isShuffled ? '#808080' : '#c0c0c0';
  if (isShuffled) {
    shuffledPlaylist = shuffleArray(songs);
  }
  initSongList();
});

closeButton.addEventListener('click', () => {
  audioPlayer.style.display = 'none';
});

music.addEventListener('timeupdate', () => {
  const progress = (music.currentTime / music.duration) * 100;
  progressBar.style.width = `${progress}%`;
});

music.addEventListener('ended', () => {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  playSong(currentSongIndex);
});

let isDragging = false;
let currentX;
let currentY;
let initialX;
let initialY;
let xOffset = 0;
let yOffset = 0;

audioPlayer.addEventListener('mousedown', dragStart);
document.addEventListener('mousemove', drag);
document.addEventListener('mouseup', dragEnd);

function dragStart(e) {
  if (e.target.classList.contains('song-item') || 
      e.target.classList.contains('progress-bar') || 
      e.target.tagName.toLowerCase() === 'button') {
    return;
  }
  
  initialX = e.clientX - xOffset;
  initialY = e.clientY - yOffset;

  if (e.target === audioPlayer || audioPlayer.contains(e.target)) {
    isDragging = true;
  }
}

function drag(e) {
  if (isDragging) {
    e.preventDefault();
    
    currentX = e.clientX - initialX;
    currentY = e.clientY - initialY;

    xOffset = currentX;
    yOffset = currentY;

    audioPlayer.style.transform = `translate(${currentX}px, ${currentY}px)`;
  }
}

function dragEnd() {
  initialX = currentX;
  initialY = currentY;
  isDragging = false;
}

playerToggle.addEventListener('click', () => {
  if (audioPlayer.style.display === 'block') {
    audioPlayer.style.display = 'none';
  } else {
    audioPlayer.style.display = 'block';
  }
});

initSongList(); 