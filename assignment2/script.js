const video = document.querySelector("#custom-video-player");
const playPauseBtn = document.querySelector("#play-pause-btn");
const playPauseImg = document.querySelector("#play-pause-img");
const muteAudioBtn = document.querySelector("#mute-audio-btn");
const muteAudioImg = document.querySelector("#mute-audio-img");
const progressBar = document.querySelector("#progress-bar-fill");
const img = document.querySelector("#musicImage");
video.removeAttribute("controls");
// playPauseBtn.addEventListener("click", togglePlayPause);
video.addEventListener("timeupdate", updateProgressBar);
function togglePlayPause() {
  if (video.paused || video.ended) {
    video.play();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/pause--v1.png";
  } else {
    video.pause();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v1.png";
  }
}
function updateProgressBar() {
  const value = (video.currentTime / video.duration) * 100;
  progressBar.style.width = value + "%";
}
// Added the button functions that control how the webage is used. The lines of code in album1-album4 are meant to allow the user to navigate through the different pages that hold different pieces of music and display images. The lines of code regarding the mute/unmute button are what define the functions of the mute and unmute
function album1() {
  img.src =
    "https://resources.tidal.com/images/58cb2c48/ea88/4ffe/9847/822e0e4017e4/750x750.jpg";
  video.src =
    "https://thelongesthumstore.sgp1.cdn.digitaloceanspaces.com/IM-2250/p-hase_Dry-Down-feat-Ben-Snaath.mp3";
  playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v1.png";
}

function album2() {
  img.src =
    "https://rolandcorp.com.au/blog/wp-content/uploads/2020/09/record-e-drums-960x600-1.jpg";
  video.src =
    "https://thelongesthumstore.sgp1.cdn.digitaloceanspaces.com/IM-2250/p-hase_Leapt.mp3";
  playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v1.png";
}

function album3() {
  img.src =
    "https://images.chinahighlights.com/allpicture/2021/11/82469d6bd811459cb12f6999_cut_750x400_39.webp";
  video.src =
    "https://thelongesthumstore.sgp1.cdn.digitaloceanspaces.com/IM-2250/p-hase_Water-Feature.mp3";
  playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v1.png";
}

function album4() {
  img.src =
    "https://neverwasmag.com/wp-content/uploads/2012/08/Humphrey-Bogart.jpg";
  video.src =
    "https://thelongesthumstore.sgp1.cdn.digitaloceanspaces.com/IM-2250/p-hase_Hes.mp3";
  playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v1.png";
}

function muteAudio() {
  if (video.volume == 0) {
    video.volume = 1;
    muteAudioImg.src =
      "https://img.icons8.com/?size=100&id=reqgj3e1uKBy&format=png&color=000000";
  } else {
    video.volume = 0;
    muteAudioImg.src =
      "https://img.icons8.com/?size=100&id=91635&format=png&color=000000";
  }
}

function repeatVideo() {
  video.currentTime = 0;
}

function rewindVideo() {
  video.currentTime -= 10;
}

function fastforwardVideo() {
  video.currentTime += 10;
}
