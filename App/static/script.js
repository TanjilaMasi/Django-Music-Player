document.addEventListener('DOMContentLoaded', function () {
  const audio = document.getElementById('player');
  const lyricsContainer = document.getElementById('song-lyrics');
  let currentIndex = 0;

/*
  let lyricsData = [];
  try {
    lyricsData = JSON.parse(lyricsContainer.dataset.lyrics);
  } catch (e) {
    console.log("Invalid lyrics data");
  }
*/
  function timeToSeconds(time) {
    const [m, s] = time.split(':').map(Number);
    return m * 60 + s;
  }

  audio.addEventListener('timeupdate', function () {
    const currentTime = audio.currentTime;
    while (currentIndex < lyricsData.length - 1 && currentTime >= timeToSeconds(lyricsData[currentIndex + 1].time)) {
      currentIndex++;
    }
    if (lyricsData[currentIndex]) {
      lyricsContainer.innerText = lyricsData[currentIndex].lyrics;
    }
  });
});
