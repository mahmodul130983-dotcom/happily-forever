/* ==========================================
   MOONLIGHT GARDEN - CENTRAL CONTROLLER
========================================== */
"use strict";

// CENTRAL DOM SELECTORS
const sky = document.getElementById("sky");
const particles = document.getElementById("particles");
const fireflies = document.getElementById("fireflies");
const petals = document.getElementById("petals");
const lilyField = document.getElementById("lilyField");
const rajanField = document.getElementById("rajanField");
const butterflies = document.getElementById("butterflies");
const typing = document.getElementById("typing");
const bgMusic = document.getElementById("bgMusic");
const moon = document.getElementById("moon");
const moonGlow = document.getElementById("moonGlow");
const garden = document.getElementById("garden");
const shanto = document.getElementById("shanto");
const sumu = document.getElementById("sumu");
const proposalScene = document.getElementById("proposalScene");
const proposalText = document.getElementById("proposalText");
const proposalButton = document.getElementById("proposalButton");

// CONFIGURATION
const CONFIG = {
    lilyCount: 40,
    rajanCount: 70,
    butterflyCount: 5,
    fireflyCount: 40,
    sparkleCount: 80,
    petalCount: 35
};

// LOVE LETTER LINES
const message = [
    "My Dearest Sumu 🤍",
    "",
    "Every flower in this garden",
    "blooms only for you.",
    "",
    "The moon shines because",
    "your smile exists.",
    "",
    "If one day you feel sad,",
    "come back here...",
    "",
    "This garden",
    "will always wait for you.",
    "",
    "Forever Yours,",
    "Shanto ❤️"
];

// UTILITY FUNCTIONS
function random(min, max) {
    return Math.random() * (max - min) + min;
}

function create(tag, className) {
    const e = document.createElement(tag);
    if (className) e.className = className;
    return e;
}

/* ==========================
   GARDEN ENGINE GENERATORS
========================== */
function createLilies() {
    if (!lilyField) return;
    lilyField.innerHTML = "";
    for (let i = 0; i < CONFIG.lilyCount; i++) {
        const flower = create("img", "lily");
        flower.src = "assets/svg/lily.svg";
        flower.draggable = false;
        flower.style.left = random(0, 96) + "%";
        flower.style.bottom = random(-8, 35) + "px";
        const size = random(60, 120);
        flower.style.width = size + "px";
        flower.style.animationDelay = random(0, 5) + "s";
        flower.style.animationDuration = random(4.5, 7) + "s";
        flower.style.zIndex = Math.floor(size);
        flower.style.opacity = random(.82, 1);
        lilyField.appendChild(flower);
    }
}

function createRajanigandhas() {
    if (!rajanField) return;
    rajanField.innerHTML = "";
    for (let i = 0; i < CONFIG.rajanCount; i++) {
        const flower = create("img", "rajan");
        flower.src = "assets/svg/rajanigandha.svg";
        flower.draggable = false;
        flower.style.left = random(0, 98) + "%";
        flower.style.bottom = random(-10, 25) + "px";
        const size = random(45, 90);
        flower.style.width = size + "px";
        flower.style.animationDelay = random(0, 6) + "s";
        flower.style.animationDuration = random(5, 8) + "s";
        flower.style.opacity = random(.55, .95);
        flower.style.zIndex = Math.floor(size) - 20;
        rajanField.appendChild(flower);
    }
}

function createFireflies() {
    if (!fireflies) return;
    fireflies.innerHTML = "";
    for (let i = 0; i < CONFIG.fireflyCount; i++) {
        const fly = create("div", "firefly");
        fly.style.left = random(0, 100) + "%";
        fly.style.top = random(20, 95) + "%";
        fly.style.animationDelay = random(0, 6) + "s";
        fly.style.animationDuration = random(8, 15) + "s";
        fly.style.opacity = random(.3, 1);
        fireflies.appendChild(fly);
    }
}

function createSparkles() {
    if (!particles) return;
    particles.innerHTML = "";
    for (let i = 0; i < CONFIG.sparkleCount; i++) {
        const star = create("div", "sparkle");
        star.style.left = random(0, 100) + "%";
        star.style.top = random(0, 100) + "%";
        star.style.animationDelay = random(0, 5) + "s";
        star.style.animationDuration = random(2, 6) + "s";
        particles.appendChild(star);
    }
}

function createPetals() {
    if (!petals) return;
    petals.innerHTML = "";
    for (let i = 0; i < CONFIG.petalCount; i++) {
        const petal = create("div", "petal");
        petal.style.left = random(0, 100) + "%";
        petal.style.animationDelay = random(0, 12) + "s";
        petal.style.animationDuration = random(10, 18) + "s";
        petal.style.transform = `scale(${random(.5, 1.3)}) rotate(${random(0, 360)}deg)`;
        petals.appendChild(petal);
    }
}

function createButterflies() {
    if (!butterflies) return;
    butterflies.innerHTML = "";
    for (let i = 0; i < CONFIG.butterflyCount; i++) {
        const b = create("img", "butterfly");
        b.src = "assets/svg/butterfly.svg";
        b.draggable = false;
        b.style.left = random(5, 90) + "%";
        b.style.top = random(15, 70) + "%";
        b.style.width = random(32, 50) + "px";
        b.style.animationDelay = random(0, 8) + "s";
        b.style.animationDuration = random(12, 20) + "s";
        butterflies.appendChild(b);
    }
}

function createShootingStar() {
    if (!garden) return;
    const star = create("div", "shooting-star");
    star.style.left = random(-20, 60) + "vw";
    star.style.top = random(0, 20) + "vh";
    garden.appendChild(star);
    setTimeout(() => star.remove(), 9000);
}

/* ==========================
   TYPING ENGINE EFFECT
========================== */
let messageIndex = 0;
let charIndex = 0;

function startTyping() {
    if (!typing) return;
    typing.innerHTML = "";
    messageIndex = 0;
    charIndex = 0;
    typeNextLine();
}

function typeNextLine() {
    if (messageIndex >= message.length) {
        typing.innerHTML += "<br><br>🤍";
        floatingCursor();
        return;
    }
    const line = create("div", "typing-line");
    typing.appendChild(line);
    typeCharacters(line);
}

function typeCharacters(line) {
    const current = message[messageIndex];
    if (charIndex < current.length) {
        line.textContent += current.charAt(charIndex);
        charIndex++;
        setTimeout(() => typeCharacters(line), 45);
    } else {
        messageIndex++;
        charIndex = 0;
        setTimeout(() => typeNextLine(), 450);
    }
}

function floatingCursor() {
    const cursor = create("span", "typingCursor");
    cursor.innerHTML = "|";
    typing.appendChild(cursor);
}

/* ==========================
   ENVIRONMENT AMBIENT EFFECTS & SYSTEM
========================== */
let mouseX = window.innerWidth / 2, mouseY = window.innerHeight / 2;
window.addEventListener("mousemove", (e) => { mouseX = e.clientX; mouseY = e.clientY; });

function updateMoonParallax() {
    if (moon && moonGlow) {
        const x = (mouseX - window.innerWidth / 2) * 0.015;
        const y = (mouseY - window.innerHeight / 2) * 0.015;
        moon.style.transform = `translate(${x}px,${y}px)`;
        moonGlow.style.transform = `translate(${x * 1.5}px,${y * 1.5}px)`;
    }
    requestAnimationFrame(updateMoonParallax);
}

let wind = 0;
function updateWind() {
    wind += 0.02;
    const value = Math.sin(wind) * 4;
    document.documentElement.style.setProperty("--wind", value + "deg");
    requestAnimationFrame(updateWind);
}

function animateFlowers() {
    document.querySelectorAll(".lily,.rajan").forEach((flower, index) => {
        const angle = Math.sin(performance.now() * 0.001 + index) * 4;
        flower.style.transform = `rotate(${angle}deg)`;
    });
    requestAnimationFrame(animateFlowers);
}

// INTELLIGENT RUNTIME AI ANIMATIONS
function startAI() {
    // Butterfly Random Movement
    setInterval(() => {
        document.querySelectorAll(".butterfly").forEach(item => {
            item.style.transition = "transform 7s ease-in-out, left 7s ease-in-out, top 7s ease-in-out";
            item.style.left = random(5, 90) + "%";
            item.style.top = random(15, 65) + "%";
            item.style.transform = `rotate(${random(-25, 25)}deg) scale(${random(.9, 1.2)})`;
        });
    }, 7000);

    // Firefly Random Pathing
    setInterval(() => {
        document.querySelectorAll(".firefly").forEach(fly => {
            fly.style.transition = `all ${random(3, 6)}s ease-in-out`;
            fly.style.left = random(0, 100) + "%";
            fly.style.top = random(15, 95) + "%";
        });
    }, 4000);

    // Petal Recycler
    document.querySelectorAll(".petal").forEach(p => {
        p.addEventListener("animationiteration", () => {
            p.style.left = random(0, 100) + "%";
            p.style.animationDuration = random(10, 18) + "s";
            p.style.transform = `scale(${random(.6, 1.4)}) rotate(${random(0, 360)}deg)`;
        });
    });
}

/* ==========================
   PROPOSAL SCENE SYSTEM
========================= */
function walkToSumu() {
    if (!shanto) return;
    shanto.style.transition = "left 5s ease, opacity 1s";
    shanto.style.opacity = "1";
    shanto.style.left = "42%";
}

function kneelDown() {
    if (!shanto) return;
    shanto.style.transition = "left 2.5s ease, bottom .8s ease";
    shanto.style.bottom = "35px";
    shanto.classList.add("kneel");
}

function showRose() {
    const rose = shanto.contentDocument?.getElementById("roseHolder");
    if (rose) {
        rose.style.opacity = "1";
        rose.style.transform = "translate(286px,165px) rotate(-28deg) scale(1.08)";
    }
}

function sumuReaction() {
    if (sumu) {
        sumu.style.transition = "transform 1s ease";
        sumu.style.transform = "translateY(-10px) scale(1.03)";
    }
}

function showProposal() {
    if (!proposalText) return;
    if (proposalScene) proposalScene.classList.add("show");
    
    proposalText.innerHTML = `
        <h1>🌹</h1>
        <h2>Will You Stay With Me Forever? ❤️</h2>
        <p>Every Lily... Every Rajanigandha... Every Star... reminds me of you.</p>
    `;
    proposalText.classList.add("show");
    if (proposalButton) proposalButton.style.display = "inline-block";
}

function launchHeartRain() {
    for (let i = 0; i < 40; i++) {
        const heart = document.createElement("div");
        heart.className = "heartRain";
        heart.innerHTML = "❤";
        heart.style.position = "fixed";
        heart.style.left = random(0, 100) + "%";
        heart.style.bottom = "-40px";
        heart.style.fontSize = random(18, 36) + "px";
        heart.style.animationDelay = random(0, 3) + "s";
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 9000);
    }
}

function createHeartOverlay() {
    const heart = document.createElement("div");
    heart.innerHTML = "❤️";
    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.bottom = "-40px";
    heart.style.fontSize = (18 + Math.random() * 18) + "px";
    heart.style.pointerEvents = "none";
    heart.style.zIndex = "999";
    heart.style.transition = "6s linear";
    document.body.appendChild(heart);

    requestAnimationFrame(() => {
        heart.style.bottom = "110vh";
        heart.style.opacity = "0";
    });
    setTimeout(() => heart.remove(), 6000);
}

function romanticEnding() {
    const finalMsg = document.createElement("div");
    finalMsg.id = "proposalMessage";
    finalMsg.innerHTML = `
        <h1>Will You Stay With Me Forever? ❤️</h1>
        <p>Every Lily reminds me of your purity,<br>
        Every Rajanigandha reminds me of your fragrance,<br>
        And every heartbeat whispers only your name...</p>
    `;
    document.body.appendChild(finalMsg);

    Object.assign(finalMsg.style, {
        position: "fixed", top: "50%", left: "50%",
        transform: "translate(-50%,-50%) scale(1)",
        color: "#fff", textAlign: "center", fontFamily: "'Poppins',sans-serif",
        textShadow: "0 0 25px rgba(255,255,255,.9)", opacity: "1",
        transition: "2s", zIndex: "9999", pointerEvents: "none"
    });

    const interval = setInterval(createHeartOverlay, 300);
    setTimeout(() => clearInterval(interval), 12000);
}

/* ==========================
   INITIALIZATION & LIFECYCLE
========================== */
function startGardenSystem() {
    // 1. Generate Environment Elements
    createLilies();
    createRajanigandhas();
    createFireflies();
    createSparkles();
    createPetals();
    createButterflies();

    // 2. Fire Up CSS Variable Vectors & AI Loops
    updateMoonParallax();
    updateWind();
    animateFlowers();
    startAI();

    // 3. Begin Timed Interactive Sequence
    startTyping();

    // Shooting Star Recurrence
    createShootingStar();
    setInterval(createShootingStar, 12000);

    // Proposal Sequence Timers
    setTimeout(walkToSumu, 2500);
    setTimeout(kneelDown, 5200);
    setTimeout(showRose, 6200);
    setTimeout(sumuReaction, 7000);
    setTimeout(showProposal, 8000);
    setTimeout(romanticEnding, 12000);
}

// App Event Triggers
window.addEventListener("load", () => {
    document.body.style.opacity = "0";
    setTimeout(() => {
        document.body.style.transition = "opacity 2s";
        document.body.style.opacity = "1";
    }, 100);
    startGardenSystem();
});

window.addEventListener("resize", () => {
    createLilies();
    createRajanigandhas();
});

// Audio Trigger Helper
function enableMusic() {
    if (bgMusic) { bgMusic.volume = 0.35; bgMusic.play().catch(() => {}); }
}
window.addEventListener("click", enableMusic, { once: true });
window.addEventListener("touchstart", enableMusic, { once: true });

if (proposalButton) {
    proposalButton.addEventListener("click", () => {
        launchHeartRain();
        createPetals();
        createSparkles();
    });
}
