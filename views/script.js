document.addEventListener("DOMContentLoaded", () => {
  const bgMusic = document.getElementById("bg-music");
  const loopStart = 13; // Start of loop in seconds
  const loopEnd = 73; // End of loop in seconds

  // Set the initial playback position
  bgMusic.currentTime = loopStart;

  // Adjust playback to loop between the specified times
  bgMusic.addEventListener("timeupdate", () => {
    if (bgMusic.currentTime >= loopEnd) {
      bgMusic.currentTime = loopStart;
    }
  });

  // Optional: Set initial volume
  bgMusic.volume = 0.7; // Adjust volume if needed
});

//for the snorlax gif

const snorlax = document.getElementById("snorlax");
let timer;

snorlax.addEventListener("mouseover", () => {
  clearTimeout(timer);
  snorlax.src = "https://media.tenor.com/pBM7dzGyfokAAAAi/snorlax-pixel.gif"; // URL for awake snorlax
});

snorlax.addEventListener("mouseout", () => {
  timer = setTimeout(() => {
    snorlax.src =
      "https://media.tenor.com/3Qj2zvHVl40AAAAi/snorlax-sleeping.gif"; // URL for sleeping snorlax
  }, 3000); // 3000 milliseconds = 3 seconds
});
