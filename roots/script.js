// Password functionality
const passwordBtn = document.getElementById("password-btn");
const passwordInput = document.getElementById("password-input");
const passwordError = document.getElementById("password-error");

passwordBtn.addEventListener("click", () => {
  if (passwordInput.value.trim() === "1@2") {
    document.getElementById("password-screen").classList.add("hidden");
    document.getElementById("main-content").classList.remove("hidden");
    startCakeCountdown();
  } else {
    passwordError.textContent = "Incorrect password! Try again.";
  }
});

// Cake Countdown
function startCakeCountdown() {
  const cakeSection = document.getElementById("cake-section");
  cakeSection.classList.remove("hidden");
  let count = 3;
  const countdownEl = document.getElementById("countdown");

  const interval = setInterval(() => {
    countdownEl.textContent = count;
    count--;
    if (count < 0) {
      clearInterval(interval);
      cakeSection.classList.add("hidden");
      startBalloons();
    }
  }, 1000);
}

// Balloons
function startBalloons() {
  const balloonSection = document.getElementById("balloon-section");
  balloonSection.classList.remove("hidden");

  const balloons = document.querySelectorAll(".balloon");
  const messageEl = document.getElementById("balloon-message");

  balloons.forEach((balloon, index) => {
    balloon.addEventListener("click", () => {
      balloon.style.visibility = "hidden";
      messageEl.textContent = `You popped balloon ${index + 1}! 🎉`;
      confetti({ particleCount: 50, spread: 70, origin: { y: 0.6 } });

      if ([...balloons].every(b => b.style.visibility === "hidden")) {
        balloonSection.classList.add("hidden");
        document.getElementById("card-section").classList.remove("hidden");
      }
    });
  });
}

// Next Phase Button
document.getElementById("next-phase-btn").addEventListener("click", () => {
  document.getElementById("card-section").classList.add("hidden");
  document.getElementById("sing-along-section").classList.remove("hidden");
});

// Again Button for song
document.getElementById("again-btn").addEventListener("click", () => {
  const song = document.getElementById("song");
  song.currentTime = 0;
  song.play();
});

// Slideshow
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.add("hidden");
    if (i === index) slide.classList.remove("hidden");
  });
}

setInterval(() => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}, 3000);
