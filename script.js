/* =====================================
   BIRTHDAY WEBSITE JAVASCRIPT
===================================== */


/* =====================================
   ELEMENTS
===================================== */

const gift = document.getElementById("gift");
const opening = document.getElementById("opening");
const mainContent = document.getElementById("mainContent");

const music = document.getElementById("birthdayMusic");
const musicButton = document.getElementById("musicButton");

const letterElement = document.getElementById("letterText");

const wishButton = document.getElementById("wishButton");
const wishResult = document.getElementById("wishResult");

const candles = document.querySelectorAll(".candle");
const candleMessage = document.getElementById("candleMessage");

let musicPlaying = false;


/* =====================================
   YOUR LETTER
===================================== */

const letter = `Hey gurl, Idk how to start this but am glad we met 🥹.

This is gonna be a lil messy gn chayiw I’m not good at this at all.

I’m happy that u r ቦርን አንቺ ምርጥ ሰው💕.

I hope life treats u better for the rest of ur life and I’ll make sure to be there for u when u need me and I mean it eshi anchi chubu.

This damn university kesetegn mrt sewoch mehal andua nesh ena kidanemhret yelbshen tasakalesh medhanialem ytebksh yene eht 🥹💕🫶.`;


/* =====================================
   GIFT OPENING
===================================== */

gift.addEventListener("click", openGift);

function openGift() {

  if (gift.classList.contains("opened")) {
    return;
  }

  gift.classList.add("opened");

  createConfetti();

  setTimeout(() => {

    opening.style.transition = "1.2s ease";
    opening.style.opacity = "0";

    setTimeout(() => {

      opening.style.display = "none";
      mainContent.classList.remove("hidden");

      window.scrollTo({
        top: 0,
        behavior: "instant"
      });

      startMusic();
      typeLetter();

    }, 1200);

  }, 900);
}


/* =====================================
   MUSIC
===================================== */

function startMusic() {

  music.volume = 0.5;

  music.play()
    .then(() => {
      musicPlaying = true;
      musicButton.textContent = "♫";
    })
    .catch(() => {
      musicPlaying = false;
      musicButton.textContent = "▶";
    });
}


musicButton.addEventListener("click", () => {

  if (musicPlaying) {

    music.pause();
    musicPlaying = false;
    musicButton.textContent = "▶";

  } else {

    music.play();
    musicPlaying = true;
    musicButton.textContent = "♫";

  }

});


/* =====================================
   TYPEWRITER LETTER
===================================== */

function typeLetter() {

  letterElement.textContent = "";

  let index = 0;

  function type() {

    if (index < letter.length) {

      letterElement.textContent += letter.charAt(index);

      index++;

      setTimeout(type, 22);

    }

  }

  type();
}


/* =====================================
   CONFETTI
===================================== */

function createConfetti() {

  const symbols = [
    "💕",
    "🎀",
    "🦋",
    "🌸",
    "✨",
    "♡",
    "🎊",
    "💗"
  ];

  for (let i = 0; i < 60; i++) {

    const item = document.createElement("div");

    item.className = "float-item";

    item.textContent =
      symbols[Math.floor(Math.random() * symbols.length)];

    item.style.left = Math.random() * 100 + "vw";

    item.style.fontSize =
      (Math.random() * 1.3 + 0.7) + "rem";

    item.style.animationDuration =
      (Math.random() * 4 + 3) + "s";

    item.style.animationDelay =
      Math.random() * 1.5 + "s";

    document.body.appendChild(item);

    setTimeout(() => {
      item.remove();
    }, 8000);

  }

}


/* =====================================
   FLOATING HEARTS / BUTTERFLIES
===================================== */

const floatingSymbols = [
  "♡",
  "💕",
  "🦋",
  "🌸",
  "✨"
];

function createFloatingSymbol() {

  const item = document.createElement("div");

  item.className = "float-item";

  item.textContent =
    floatingSymbols[
      Math.floor(Math.random() * floatingSymbols.length)
    ];

  item.style.left = Math.random() * 100 + "vw";

  item.style.fontSize =
    (Math.random() * 1 + 0.8) + "rem";

  item.style.animationDuration =
    (Math.random() * 5 + 5) + "s";

  document.body.appendChild(item);

  setTimeout(() => {
    item.remove();
  }, 11000);

}


/* Create occasional floating decorations */

setInterval(() => {

  if (!document.hidden) {
    createFloatingSymbol();
  }

}, 1800);


/* =====================================
   CANDLES
===================================== */

let candlesBlown = 0;

candles.forEach((candle) => {

  candle.addEventListener("click", () => {

    if (candle.classList.contains("blown")) {
      return;
    }

    candle.classList.add("blown");

    candlesBlown++;

    if (candlesBlown < 20) {

      candleMessage.textContent =
        `${20 - candlesBlown} candles left... 🕯️`;

    } else {

      candleMessage.textContent =
        "You blew out all 20! Make your birthday wish. 🎂✨";

      createConfetti();

    }

  });

});


/* =====================================
   WISH BUTTON
===================================== */

wishButton.addEventListener("click", () => {

  wishButton.style.display = "none";

  wishResult.classList.remove("hidden");

  createConfetti();

  for (let i = 0; i < 25; i++) {
    createFloatingSymbol();
  }

});


/* =====================================
   VIDEO
===================================== */

const birthdayVideo =
  document.getElementById("birthdayVideo");

birthdayVideo.addEventListener("play", () => {

  /* Lower background music while video plays */

  music.volume = 0.08;

});

birthdayVideo.addEventListener("pause", () => {

  music.volume = 0.5;

});

birthdayVideo.addEventListener("ended", () => {

  music.volume = 0.5;

});


/* =====================================
   CURSOR SPARKLES
===================================== */

document.addEventListener("mousemove", (event) => {

  if (Math.random() > 0.82) {

    const sparkle = document.createElement("div");

    sparkle.textContent = "✦";

    sparkle.style.position = "fixed";
    sparkle.style.left = event.clientX + "px";
    sparkle.style.top = event.clientY + "px";
    sparkle.style.pointerEvents = "none";
    sparkle.style.zIndex = "9999";
    sparkle.style.color = "#f6a9ca";
    sparkle.style.fontSize = "10px";

    document.body.appendChild(sparkle);

    sparkle.animate(
      [
        {
          opacity: 1,
          transform: "translate(0,0) scale(1)"
        },
        {
          opacity: 0,
          transform: "translate(0,-20px) scale(0)"
        }
      ],
      {
        duration: 700,
        easing: "ease-out"
      }
    );

    setTimeout(() => {
      sparkle.remove();
    }, 700);

  }

});


/* =====================================
   RANDOM CAT SURPRISE
===================================== */

const cats = ["🐱", "🐈", "🐈‍⬛"];

function createCat() {

  const cat = document.createElement("div");

  cat.textContent =
    cats[Math.floor(Math.random() * cats.length)];

  cat.style.position = "fixed";
  cat.style.left = Math.random() * 90 + "vw";
  cat.style.bottom = "10px";
  cat.style.fontSize = "1.5rem";
  cat.style.zIndex = "9997";
  cat.style.pointerEvents = "none";

  document.body.appendChild(cat);

  cat.animate(
    [
      {
        transform: "translateY(0)",
        opacity: 0
      },
      {
        transform: "translateY(-80px)",
        opacity: 1
      },
      {
        transform: "translateY(-120px)",
        opacity: 0
      }
    ],
    {
      duration: 3500,
      easing: "ease-in-out"
    }
  );

  setTimeout(() => {
    cat.remove();
  }, 3500);

}


/* Tiny hidden cat appearing occasionally */

setInterval(() => {

  if (Math.random() > 0.55) {
    createCat();
  }

}, 9000);


/* =====================================
   SCROLL REVEAL
===================================== */

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(
  (entries) => {

    entries.forEach((entry) => {

      if (entry.isIntersecting) {

        entry.target.classList.add("visible");

      }

    });

  },
  {
    threshold: 0.15
  }
);

sections.forEach((section) => {
  observer.observe(section);
});
