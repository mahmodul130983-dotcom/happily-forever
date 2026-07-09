/* ==========================================
   PART 6
   ROMANTIC GARDEN ENGINE
========================================== */

const fireflies =
document.getElementById("fireflies");

const petals =
document.getElementById("petals");

const garden =
document.getElementById("garden");

/* ==========================
   RANDOM NUMBER
========================== */

function random(min,max){

    return Math.random()*(max-min)+min;

}

/* ==========================
   CREATE FIREFLIES
========================== */

function createFireflies(){

    for(let i=0;i<35;i++){

        const fly =
        document.createElement("div");

        fly.className =
        "firefly";

        fly.style.left =
        random(0,100)+"%";

        fly.style.top =
        random(10,95)+"%";

        fly.style.animationDelay =
        random(0,8)+"s";

        fly.style.animationDuration =
        random(6,12)+"s";

        fireflies.appendChild(fly);

    }

}

/* ==========================
   CREATE PETALS
========================== */

function createPetals(){

    for(let i=0;i<40;i++){

        const petal =
        document.createElement("div");

        petal.className =
        "petal";

        petal.style.left =
        random(0,100)+"%";

        petal.style.animationDuration =
        random(8,16)+"s";

        petal.style.animationDelay =
        random(0,10)+"s";

        petals.appendChild(petal);

    }

}

/* ==========================
   START GARDEN
========================== */

function startGarden(){

    createFireflies();

    createPetals();

}

window.addEventListener(

"load",

startGarden

);
/* ==========================================
   PART 7
   BUTTERFLIES + SHOOTING STARS
========================================== */

const butterflyContainer =
document.getElementById("butterflies");

function createButterflies(){

    if(!butterflyContainer) return;

    for(let i=0;i<6;i++){

        const butterfly =
        document.createElement("img");

        butterfly.className =
        "butterfly";

        butterfly.src =
        "assets/svg/butterfly.svg";

        butterfly.style.left =
        random(5,95)+"%";

        butterfly.style.top =
        random(20,80)+"%";

        butterfly.style.animationDelay =
        random(0,8)+"s";

        butterfly.style.animationDuration =
        random(10,18)+"s";

        butterflyContainer.appendChild(
            butterfly
        );

    }

}

/* ==========================
   SHOOTING STAR
========================== */

function createShootingStar(){

    const star =
    document.createElement("div");

    star.className =
    "shooting-star";

    star.style.left =
    random(-20,60)+"vw";

    star.style.top =
    random(0,20)+"vh";

    garden.appendChild(star);

    setTimeout(()=>{

        star.remove();

    },9000);

}

/* ==========================
   REPEAT SHOOTING STAR
========================== */

function startSkyEffects(){

    createShootingStar();

    setInterval(()=>{

        createShootingStar();

    },12000);

}

/* ==========================
   START EXTRA EFFECTS
========================== */

createButterflies();

startSkyEffects();
/* ==========================================
   PART 8
   SHANTO PROPOSAL SEQUENCE
========================================== */

const shanto =
document.getElementById("shanto");

const sumu =
document.getElementById("sumu");

/* ==========================
   WALK TO SUMU
========================== */

function walkToSumu(){

    if(!shanto) return;

    shanto.style.opacity="1";

    shanto.style.left="58%";

}

/* ==========================
   KNEEL DOWN
========================== */

function kneelDown(){

    if(!shanto) return;

    shanto.style.transition=
    "left 2.5s ease, bottom .8s ease";

    shanto.style.bottom="35px";

}

/* ==========================
   SHOW ROSE
========================== */

function showRose(){

    const rose=
    shanto.contentDocument
    ?.getElementById("roseHolder");

    if(!rose) return;

    rose.style.opacity="1";

    rose.style.transform=
    "translate(286px,165px) rotate(-28deg) scale(1.08)";

}

/* ==========================
   SUMU REACTION
========================== */

function sumuReaction(){

    if(!sumu) return;

    sumu.style.transition=
    "transform 1s ease";

    sumu.style.transform=
    "translateY(-10px) scale(1.03)";

}

/* ==========================
   START PROPOSAL
========================== */

window.addEventListener("load",()=>{

    setTimeout(walkToSumu,2500);

    setTimeout(kneelDown,5200);

    setTimeout(showRose,6200);

    setTimeout(sumuReaction,7000);

});
/* ==========================================
   PART 9
   GRAND ROMANTIC FINALE
========================================== */

const message = document.createElement("div");

message.id = "proposalMessage";

message.innerHTML = `
<h1>Will You Stay With Me Forever? ❤️</h1>
<p>
Every Lily reminds me of your purity,<br>
Every Rajanigandha reminds me of your fragrance,<br>
And every heartbeat whispers only your name...
</p>
`;

document.body.appendChild(message);

/* ==========================
   MESSAGE STYLE
========================== */

Object.assign(message.style,{

    position:"fixed",

    top:"50%",

    left:"50%",

    transform:"translate(-50%,-50%) scale(.8)",

    color:"#fff",

    textAlign:"center",

    fontFamily:"'Poppins',sans-serif",

    textShadow:"0 0 25px rgba(255,255,255,.9)",

    opacity:"0",

    transition:"2s",

    zIndex:"9999",

    pointerEvents:"none"

});

/* ==========================
   FLOATING HEARTS
========================== */

function createHeart(){

    const heart=document.createElement("div");

    heart.innerHTML="❤️";

    heart.style.position="fixed";

    heart.style.left=Math.random()*100+"vw";

    heart.style.bottom="-40px";

    heart.style.fontSize=(18+Math.random()*18)+"px";

    heart.style.pointerEvents="none";

    heart.style.zIndex="999";

    heart.style.transition="6s linear";

    document.body.appendChild(heart);

    requestAnimationFrame(()=>{

        heart.style.bottom="110vh";

        heart.style.opacity="0";

    });

    setTimeout(()=>heart.remove(),6000);

}

/* ==========================
   SHOW MESSAGE
========================== */

function romanticEnding(){

    message.style.opacity="1";

    message.style.transform=
    "translate(-50%,-50%) scale(1)";

    const interval=setInterval(createHeart,300);

    setTimeout(()=>{

        clearInterval(interval);

    },12000);

}

/* ==========================
   START ENDING
========================== */

setTimeout(

romanticEnding,

9500

);
/* ==========================================
   MOONLIGHT GARDEN
   SCRIPT.JS
   PART 1
   INITIALIZATION
========================================== */

"use strict";

/* ==========================================
   DOM
========================================== */

const sky = document.getElementById("sky");

const particles = document.getElementById("particles");

const fireflies = document.getElementById("fireflies");

const petals = document.getElementById("petals");

const lilyField = document.getElementById("lilyField");

const rajanField = document.getElementById("rajanField");

const butterflies = document.getElementById("butterflies");

const typing = document.getElementById("typing");

const bgMusic = document.getElementById("bgMusic");

/* ==========================================
   CONFIG
========================================== */

const CONFIG = {

    lilyCount:40,

    rajanCount:70,

    butterflyCount:5,

    fireflyCount:40,

    sparkleCount:80,

    petalCount:35

};

/* ==========================================
   LOVE MESSAGE
========================================== */

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

/* ==========================================
   RANDOM
========================================== */

function random(min,max){

    return Math.random()*(max-min)+min;

}

/* ==========================================
   CREATE ELEMENT
========================================== */

function create(tag,className){

    const e=document.createElement(tag);

    if(className){

        e.className=className;

    }

    return e;

}

/* ==========================================
   RANDOM POSITION
========================================== */

function randomPosition(el){

    el.style.left=random(0,100)+"%";

    el.style.top=random(0,100)+"%";

}

/* ==========================================
   START
========================================== */

window.addEventListener("load",()=>{

    startGarden();

});

/* ==========================================
   MAIN
========================================== */

function startGarden(){

    startTyping();

}
/* ==========================================
   PART 2
   TYPING EFFECT
========================================== */

let messageIndex = 0;
let charIndex = 0;

function startTyping(){

    if(!typing) return;

    typing.innerHTML = "";

    messageIndex = 0;
    charIndex = 0;

    typeNextLine();

}

/* ==========================================
   TYPE NEXT LINE
========================================== */

function typeNextLine(){

    if(messageIndex >= message.length){

        typing.innerHTML +=
        "<br><br>🤍";

        floatingCursor();

        return;

    }

    const line = document.createElement("div");

    line.className = "typing-line";

    typing.appendChild(line);

    typeCharacters(line);

}

/* ==========================================
   TYPE CHARACTERS
========================================== */

function typeCharacters(line){

    const current = message[messageIndex];

    if(charIndex < current.length){

        line.textContent += current.charAt(charIndex);

        charIndex++;

        setTimeout(()=>{

            typeCharacters(line);

        },45);

    }

    else{

        messageIndex++;

        charIndex=0;

        setTimeout(()=>{

            typeNextLine();

        },450);

    }

}

/* ==========================================
   CURSOR
========================================== */

function floatingCursor(){

    const cursor = document.createElement("span");

    cursor.className = "typingCursor";

    cursor.innerHTML = "|";

    typing.appendChild(cursor);

}

/* ==========================================
   MUSIC
========================================== */

function enableMusic(){

    if(!bgMusic) return;

    bgMusic.volume=.35;

    bgMusic.play().catch(()=>{});

}

window.addEventListener("click",enableMusic,{once:true});

window.addEventListener("touchstart",enableMusic,{once:true});

/* ==========================================
   FADE IN
========================================== */

window.addEventListener("load",()=>{

    document.body.style.opacity="0";

    setTimeout(()=>{

        document.body.style.transition="opacity 2s";

        document.body.style.opacity="1";

    },100);

});

/* ==========================================
   MESSAGE GLOW
========================================== */

setInterval(()=>{

    if(!typing) return;

    typing.style.textShadow=

    "0 0 8px rgba(255,255,255,.6),"+
    "0 0 20px rgba(255,255,255,.25)";

    setTimeout(()=>{

        typing.style.textShadow=

        "0 0 4px rgba(255,255,255,.3)";

    },900);

},3000);
/* ==========================================
   PART 3
   GARDEN GENERATOR
========================================== */

/* ==========================================
   CREATE GARDEN
========================================== */

function createGarden(){

    createLilies();

    createRajanigandhas();

}

/* ==========================================
   LILY FIELD
========================================== */

function createLilies(){

    if(!lilyField) return;

    lilyField.innerHTML="";

    for(let i=0;i<CONFIG.lilyCount;i++){

        const flower=create("img","lily");

        flower.src="assets/svg/lily.svg";

        flower.draggable=false;

        flower.style.left=random(0,96)+"%";

        flower.style.bottom=random(-8,35)+"px";

        const size=random(60,120);

        flower.style.width=size+"px";

        flower.style.animationDelay=random(0,5)+"s";

        flower.style.animationDuration=random(4.5,7)+"s";

        flower.style.zIndex=Math.floor(size);

        flower.style.opacity=random(.82,1);

        lilyField.appendChild(flower);

    }

}

/* ==========================================
   RAJANIGANDHA FIELD
========================================== */

function createRajanigandhas(){

    if(!rajanField) return;

    rajanField.innerHTML="";

    for(let i=0;i<CONFIG.rajanCount;i++){

        const flower=create("img","rajan");

        flower.src="assets/svg/rajanigandha.svg";

        flower.draggable=false;

        flower.style.left=random(0,98)+"%";

        flower.style.bottom=random(-10,25)+"px";

        const size=random(45,90);

        flower.style.width=size+"px";

        flower.style.animationDelay=random(0,6)+"s";

        flower.style.animationDuration=random(5,8)+"s";

        flower.style.opacity=random(.55,.95);

        flower.style.zIndex=Math.floor(size)-20;

        rajanField.appendChild(flower);

    }

}

/* ==========================================
   GARDEN REFRESH
========================================== */

function refreshGarden(){

    createGarden();

}

/* ==========================================
   START GARDEN
========================================== */

function startGarden(){

    createGarden();

    startTyping();

}

/* ==========================================
   WINDOW RESIZE
========================================== */

window.addEventListener("resize",()=>{

    refreshGarden();

});
/* ==========================================
   PART 4
   FIREFLIES • PETALS • SPARKLES • BUTTERFLIES
========================================== */

/* ==========================================
   CREATE FIREFLIES
========================================== */

function createFireflies(){

    if(!fireflies) return;

    fireflies.innerHTML="";

    for(let i=0;i<CONFIG.fireflyCount;i++){

        const fly=create("div","firefly");

        fly.style.left=random(0,100)+"%";

        fly.style.top=random(20,95)+"%";

        fly.style.animationDelay=random(0,6)+"s";

        fly.style.animationDuration=random(8,15)+"s";

        fly.style.opacity=random(.3,1);

        fireflies.appendChild(fly);

    }

}

/* ==========================================
   CREATE SPARKLES
========================================== */

function createSparkles(){

    if(!particles) return;

    particles.innerHTML="";

    for(let i=0;i<CONFIG.sparkleCount;i++){

        const star=create("div","sparkle");

        star.style.left=random(0,100)+"%";

        star.style.top=random(0,100)+"%";

        star.style.animationDelay=random(0,5)+"s";

        star.style.animationDuration=random(2,6)+"s";

        particles.appendChild(star);

    }

}

/* ==========================================
   CREATE PETALS
========================================== */

function createPetals(){

    if(!petals) return;

    petals.innerHTML="";

    for(let i=0;i<CONFIG.petalCount;i++){

        const petal=create("div","petal");

        petal.style.left=random(0,100)+"%";

        petal.style.animationDelay=random(0,12)+"s";

        petal.style.animationDuration=random(10,18)+"s";

        petal.style.transform=

        `scale(${random(.5,1.3)}) rotate(${random(0,360)}deg)`;

        petals.appendChild(petal);

    }

}

/* ==========================================
   CREATE BUTTERFLIES
========================================== */

function createButterflies(){

    if(!butterflies) return;

    butterflies.innerHTML="";

    for(let i=0;i<CONFIG.butterflyCount;i++){

        const butterfly=create("img","butterfly");

        butterfly.src="assets/svg/butterfly.svg";

        butterfly.draggable=false;

        butterfly.style.left=random(5,90)+"%";

        butterfly.style.top=random(15,70)+"%";

        butterfly.style.width=random(32,50)+"px";

        butterfly.style.animationDelay=random(0,8)+"s";

        butterfly.style.animationDuration=random(12,20)+"s";

        butterflies.appendChild(butterfly);

    }

}

/* ==========================================
   GARDEN EFFECTS
========================================== */

function createEffects(){

    createFireflies();

    createSparkles();

    createPetals();

    createButterflies();

}

/* ==========================================
   UPDATE START
========================================== */

function startGarden(){

    createGarden();

    createEffects();

    startTyping();

}

/* ==========================================
   REFRESH
========================================== */

window.addEventListener("resize",()=>{

    createGarden();

    createEffects();

});
/* ==========================================
   PART 5
   WIND ENGINE & PARALLAX SYSTEM
========================================== */

/* ==========================================
   MOUSE POSITION
========================================== */

let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;

window.addEventListener("mousemove",(e)=>{

    mouseX = e.clientX;
    mouseY = e.clientY;

});

/* ==========================================
   MOON PARALLAX
========================================== */

const moon = document.getElementById("moon");
const moonGlow = document.getElementById("moonGlow");

function updateMoonParallax(){

    if(!moon || !moonGlow) return;

    const x = (mouseX-window.innerWidth/2)*0.015;
    const y = (mouseY-window.innerHeight/2)*0.015;

    moon.style.transform =
        `translate(${x}px,${y}px)`;

    moonGlow.style.transform =
        `translate(${x*1.5}px,${y*1.5}px)`;

    requestAnimationFrame(updateMoonParallax);

}

/* ==========================================
   WIND ENGINE
========================================== */

let wind = 0;

function updateWind(){

    wind += 0.02;

    const value = Math.sin(wind)*4;

    document.documentElement.style.setProperty(

        "--wind",

        value+"deg"

    );

    requestAnimationFrame(updateWind);

}

/* ==========================================
   FLOWER SWAY
========================================== */

function animateFlowers(){

    const flowers = document.querySelectorAll(

        ".lily,.rajan"

    );

    flowers.forEach((flower,index)=>{

        const angle =

        Math.sin(

            performance.now()*0.001+

            index

        )*4;

        flower.style.transform =

        `rotate(${angle}deg)`;

    });

    requestAnimationFrame(

        animateFlowers

    );

}

/* ==========================================
   SPARKLE TWINKLE
========================================== */

function animateSparkles(){

    document

    .querySelectorAll(".sparkle")

    .forEach(star=>{

        star.style.opacity=

        0.3+

        Math.random()*0.7;

    });

}

setInterval(

animateSparkles,

800

);

/* ==========================================
   GLOW PULSE
========================================== */

function pulseGarden(){

    const garden =

    document.getElementById(

        "garden"

    );

    if(!garden) return;

    garden.style.filter=

    `brightness(${
        1+
        Math.sin(Date.now()*0.001)*0.04
    })`;

}

setInterval(

pulseGarden,

40

);

/* ==========================================
   START EFFECTS
========================================== */

function startEffects(){

    updateMoonParallax();

    updateWind();

    animateFlowers();

}

/* ==========================================
   UPDATE START
========================================== */

function startGarden(){

    createGarden();

    createEffects();

    startEffects();

    startTyping();

}
/* ==========================================
   PART 6
   ADVANCED GARDEN AI
========================================== */

/* ==========================================
   BUTTERFLY AI
========================================== */

function butterflyAI(){

    const list=document.querySelectorAll(".butterfly");

    list.forEach((item,index)=>{

        let x=random(5,90);

        let y=random(15,65);

        function fly(){

            x=random(5,90);

            y=random(15,65);

            item.style.transition=

            "transform 7s ease-in-out,left 7s ease-in-out,top 7s ease-in-out";

            item.style.left=x+"%";

            item.style.top=y+"%";

            item.style.transform=

            `rotate(${random(-25,25)}deg)
             scale(${random(.9,1.2)})`;

        }

        fly();

        setInterval(

            fly,

            random(6000,10000)

        );

    });

}

/* ==========================================
   FIREFLY RANDOM MOTION
========================================== */

function fireflyAI(){

    const flies=document.querySelectorAll(".firefly");

    flies.forEach(fly=>{

        function move(){

            fly.style.transition=

            `all ${random(3,6)}s ease-in-out`;

            fly.style.left=

            random(0,100)+"%";

            fly.style.top=

            random(15,95)+"%";

        }

        move();

        setInterval(

            move,

            random(3000,7000)

        );

    });

}

/* ==========================================
   PETAL RESPAWN
========================================== */

function recyclePetals(){

    const list=document.querySelectorAll(".petal");

    list.forEach(petal=>{

        petal.addEventListener(

            "animationiteration",

            ()=>{

                petal.style.left=

                random(0,100)+"%";

                petal.style.animationDuration=

                random(10,18)+"s";

                petal.style.transform=

                `scale(${random(.6,1.4)})
                 rotate(${random(0,360)}deg)`;

            }

        );

    });

}

/* ==========================================
   GARDEN AMBIENCE
========================================== */

function gardenAmbience(){

    const garden=document.getElementById("garden");

    if(!garden) return;

    let t=0;

    function update(){

        t+=0.01;

        const value=

        103+

        Math.sin(t)*2;

        garden.style.filter=

        `brightness(${value}%)
         saturate(108%)`;

        requestAnimationFrame(update);

    }

    update();

}

/* ==========================================
   START AI
========================================== */

function startAI(){

    butterflyAI();

    fireflyAI();

    recyclePetals();

    gardenAmbience();

}

/* ==========================================
   UPDATE START
========================================== */

function startGarden(){

    createGarden();

    createEffects();

    startEffects();

    startAI();

    startTyping();

}
/* ==========================================
   PART 8
   PROPOSAL SCENE CONTROLLER
========================================== */

/* ==========================================
   ELEMENTS
========================================== */

const proposalScene =
document.getElementById("proposalScene");

const shanto =
document.getElementById("shanto");

const sumu =
document.getElementById("sumu");

const proposalText =
document.getElementById("proposalText");

const proposalButton =
document.getElementById("proposalButton");

/* ==========================================
   START PROPOSAL
========================================== */

function startProposal(){

    if(!proposalScene) return;

    proposalScene.classList.add("show");

    animateShanto();

}

/* ==========================================
   SHANTO WALK
========================================== */

function animateShanto(){

    if(!shanto) return;

    shanto.style.transition =
    "left 5s ease";

    shanto.style.left = "42%";

    setTimeout(()=>{

        kneelDown();

    },5000);

}

/* ==========================================
   KNEEL
========================================== */

function kneelDown(){

    if(!shanto) return;

    shanto.classList.add("kneel");

    setTimeout(()=>{

        showProposal();

    },1200);

}

/* ==========================================
   SHOW MESSAGE
========================================== */

function showProposal(){

    if(!proposalText) return;

    proposalText.innerHTML =

    `
    <h1>🌹</h1>

    <h2>

    Will You Stay
    With Me Forever?

    </h2>

    <p>

    Every Lily...
    Every Rajanigandha...
    Every Star...

    reminds me of you.

    </p>

    `;

    proposalText.classList.add("show");

}

/* ==========================================
   ACCEPT EFFECT
========================================== */

function proposalAccepted(){

    createPetals();

    createSparkles();

    createFireflies();

    launchHeartRain();

}

/* ==========================================
   HEART RAIN
========================================== */

function launchHeartRain(){

    for(let i=0;i<40;i++){

        const heart =
        document.createElement("div");

        heart.className="heartRain";

        heart.innerHTML="❤";

        heart.style.left=
        random(0,100)+"%";

        heart.style.animationDelay=
        random(0,3)+"s";

        document.body.appendChild(heart);

        setTimeout(()=>{

            heart.remove();

        },9000);

    }

}

/* ==========================================
   BUTTON
========================================== */

if(proposalButton){

proposalButton.addEventListener(

"click",

()=>{

proposalAccepted();

}

);

}

/* ==========================================
   AUTO START
========================================== */

setTimeout(()=>{

startProposal();

},8000);
