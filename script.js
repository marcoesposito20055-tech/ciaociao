var canvas = document.getElementById("starfield");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var context = canvas.getContext("2d");
var stars = 500;
var colorrange = [0, 60, 240];
var starArray = [];

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Funzione per gestire l'opacità fluida (aggiunta)
function calculateOpacity(currentFrame, start, end) {
    let duration = end - start;
    let progress = currentFrame - start;
    let mid = duration / 2;
    if (progress < mid) return progress / mid;
    return (duration - progress) / mid;
}

for (var i = 0; i < stars; i++) {
    var x = Math.random() * canvas.offsetWidth;
    var y = Math.random() * canvas.offsetHeight;
    var radius = Math.random() * 1.2;
    var hue = colorrange[getRandom(0, colorrange.length - 1)];
    var sat = getRandom(50, 100);
    var opacity = Math.random();
    starArray.push({ x, y, radius, hue, sat, opacity });
}

var frameNumber = 0;
var opacity = 0;
var secondOpacity = 0;
var thirdOpacity = 0;

var baseFrame = context.getImageData(0, 0, window.innerWidth, window.innerHeight);

function drawStars() {
    for (var i = 0; i < stars; i++) {
        var star = starArray[i];
        context.beginPath();
        context.arc(star.x, star.y, star.radius, 0, 360);
        context.fillStyle = "hsla(" + star.hue + ", " + star.sat + "%, 88%, " + star.opacity + ")";
        context.fill();
    }
}

function updateStars() {
    for (var i = 0; i < stars; i++) {
        if (Math.random() > 0.99) {
            starArray[i].opacity = Math.random();
        }
    }
}

function drawTextWithLineBreaks(lines, x, y, fontSize, lineHeight) {
    lines.forEach((line, index) => {
        context.fillText(line, x, y + index * (fontSize + lineHeight));
    });
}

function drawText() {
    var fontSize = Math.min(30, window.innerWidth / 24);
    var lineHeight = 8;

    context.font = fontSize + "px Comic Sans MS";
    context.textAlign = "center";
    context.shadowColor = "rgba(45, 45, 255, 1)";
    context.shadowBlur = 8;

    // 1. Ciao poppy...
    if(frameNumber < 500){
        let textOpacity = calculateOpacity(frameNumber, 0, 500);
        context.fillStyle = `rgba(45, 45, 255, ${textOpacity})`;
        if (window.innerWidth < 600) {
            drawTextWithLineBreaks(["Ciao Poppy, ogni giorno non capisci quanto", "mi sento felice di averti nella mia vita"], canvas.width / 2, canvas.height / 2, fontSize, lineHeight);
        } else {
            context.fillText("Ciao Poppy, ogni giorno non capisci quanto mi sento felice di averti nella mia vita", canvas.width/2, canvas.height/2);
        }
    }

    // 2. Tra miliardi di stelle...
    if(frameNumber >= 500 && frameNumber < 1000){
        let textOpacity = calculateOpacity(frameNumber, 500, 1000);
        context.fillStyle = `rgba(45, 45, 255, ${textOpacity})`;
        context.fillText("Tra miliardi di stelle, di persone, nel corso di milioni di anni", canvas.width/2, canvas.height/2);
    }

    // 3. Ci siamo ritrovati...
    if(frameNumber >= 1000 && frameNumber < 1500){
        let textOpacity = calculateOpacity(frameNumber, 1000, 1500);
        context.fillStyle = `rgba(45, 45, 255, ${textOpacity})`;
        context.fillText("ci siamo ritrovati qui, a spendere il resto della nostra vita insieme", canvas.width/2, canvas.height/2);
    }

    // 4. Da quando ci sei tu...
    if(frameNumber >= 1500 && frameNumber < 2000){
        let textOpacity = calculateOpacity(frameNumber, 1500, 2000);
        context.fillStyle = `rgba(45, 45, 255, ${textOpacity})`;
        context.fillText("Da quando ci sei tu mi capita di sorridere senza motivo", canvas.width/2, canvas.height/2);
    }

    // 5. Quando non ci sei...
    if(frameNumber >= 2000 && frameNumber < 2500){
        let textOpacity = calculateOpacity(frameNumber, 2000, 2500);
        context.fillStyle = `rgba(45, 45, 255, ${textOpacity})`;
        context.fillText("e quando non ci sei mi manchi da morire", canvas.width/2, canvas.height/2);
    }

    // 6. Magari un giorno...
    if(frameNumber >= 2500 && frameNumber < 3000){
        let textOpacity = calculateOpacity(frameNumber, 2500, 3000);
        context.fillStyle = `rgba(45, 45, 255, ${textOpacity})`;
        if (window.innerWidth < 600) {
            drawTextWithLineBreaks(["Magari un giorno questa distanza si annullerà", "e il nostro desiderio di vivere insieme si avvererà"], canvas.width / 2, canvas.height / 2, fontSize, lineHeight);
        } else {
            context.fillText("Magari un giorno questa distanza si annullerà e il nostro desiderio di vivere insieme si avvererà", canvas.width/2, canvas.height/2);
        }
    }

    // 7. Eppure nonostante questo...
    if(frameNumber >= 3000 && frameNumber < 3500){
        let textOpacity = calculateOpacity(frameNumber, 3000, 3500);
        context.fillStyle = `rgba(45, 45, 255, ${textOpacity})`;
        if (window.innerWidth < 600) {
            drawTextWithLineBreaks(["Eppure nonostante questo grande problema,", "c'è una certezza che non cambia:"], canvas.width / 2, canvas.height / 2, fontSize, lineHeight);
        } else {
            context.fillText("Eppure nonostante questo grande problema, c'è una certezza che non cambia:", canvas.width/2, canvas.height/2);
        }
    }

    // 8. Quello che sento per te
    if(frameNumber >= 3500 && frameNumber < 4000){
        let textOpacity = calculateOpacity(frameNumber, 3500, 4000);
        context.fillStyle = `rgba(45, 45, 255, ${textOpacity})`;
        context.fillText("quello che sento per te", canvas.width/2, canvas.height/2);
    }

    // 9. Ti amo davvero tanto
    if(frameNumber >= 4000 && frameNumber < 4500){
        let textOpacity = calculateOpacity(frameNumber, 4000, 4500);
        context.fillStyle = `rgba(45, 45, 255, ${textOpacity})`;
        context.fillText("Anche se magari non te lo dico spesso, ti amo davvero tanto", canvas.width/2, canvas.height/2);
    }

    // 10. Dolce ricordo
    if(frameNumber >= 4500 && frameNumber < 5000){
        let textOpacity = calculateOpacity(frameNumber, 4500, 5000);
        context.fillStyle = `rgba(45, 45, 255, ${textOpacity})`;
        context.fillText("e spero che il nostro rapporto non diventi solo un dolce ricordo", canvas.width/2, canvas.height/2);
    }

    // 11. Messaggio finale progressivo - PARTE A
    if(frameNumber >= 5000 && frameNumber < 5500){
        let textOpacity = calculateOpacity(frameNumber, 5000, 5500);
        context.fillStyle = `rgba(45, 45, 255, ${textOpacity})`; 
        
        if (window.innerWidth < 600) {
            drawTextWithLineBreaks(["Hai questo talento speciale,", "farmi sentire una persona fortunata"], canvas.width / 2, canvas.height / 2, fontSize, lineHeight);
        } else {
            context.fillText("Hai questo talento speciale, riuscire a farmi sentire una persona cosi fortunata", canvas.width/2, canvas.height/2);
        }
    }

    // 12. Messaggio finale - PARTE B
    if(frameNumber >= 5500){
        context.fillStyle = `rgba(45, 45, 255, ${secondOpacity})`;
        
        let riga1 = "Anche quando tutto va male, alla fine penso che se non ci fossi non so come avrei fatto.";
        let riga2 = "Grazie perché con te mi sento sempre a casa.";

        if (window.innerWidth < 600) {
            drawTextWithLineBreaks([
                "Anche quando tutto va male,", 
                "se non ci fossi non saprei",
                "proprio come fare.",
                "Con te mi sento sempre a casa."
            ], canvas.width / 2, (canvas.height/2 - 60), fontSize, lineHeight);
        } else {
            drawTextWithLineBreaks([riga1, riga2], canvas.width / 2, (canvas.height/2 - 40), fontSize, lineHeight);
        }
        
        if (secondOpacity < 1) secondOpacity += 0.01;
    }

    // 13. Il finale definitivo
    if(frameNumber >= 5800){
        context.fillStyle = `rgba(45, 45, 255, ${thirdOpacity})`;
        context.fillText("Ti amo Poppy 🤍🤍🤍", canvas.width/2, (canvas.height/2 + 120));
        if (thirdOpacity < 1) thirdOpacity += 0.01;
    }

    context.shadowColor = "transparent";
    context.shadowBlur = 0;
}

function draw() {
    context.putImageData(baseFrame, 0, 0);
    drawStars();
    updateStars();
    drawText();
    if (frameNumber < 99999) {
        frameNumber++;
    }
    window.requestAnimationFrame(draw);
}

window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    baseFrame = context.getImageData(0, 0, window.innerWidth, window.innerHeight);
});

window.requestAnimationFrame(draw);
