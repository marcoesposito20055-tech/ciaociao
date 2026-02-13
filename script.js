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

    // 0 - 500: Prima frase
    if(frameNumber < 250){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        context.fillText("Ciao poppy, ogni giorno non capisci quanto mi sento felice nell'essere consapevole che ci sei tu nella mia vita", canvas.width/2, canvas.height/2);
        opacity += 0.01;
    }
    if(frameNumber >= 250 && frameNumber < 500){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        context.fillText("Ciao poppy, ogni giorno non capisci quanto mi sento felice nell'essere consapevole che ci sei tu nella mia vita", canvas.width/2, canvas.height/2);
        opacity -= 0.01;
    }

    if(frameNumber == 500) opacity = 0;

    // 500 - 1000: Seconda frase
    if(frameNumber > 500 && frameNumber < 750){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        if (window.innerWidth < 600) {
            drawTextWithLineBreaks(["Tra miliardi di stelle,di persone", "nel corso di milioni di anni"], canvas.width / 2, canvas.height / 2, fontSize, lineHeight);
        } else {
            context.fillText("Tra miliardi di stelle,di persone, nel corso di milioni di anni", canvas.width/2, canvas.height/2);
        }
        opacity += 0.01;
    }
    if(frameNumber >= 750 && frameNumber < 1000){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        if (window.innerWidth < 600) {
            drawTextWithLineBreaks(["Tra miliardi di stelle,di persone,", "nel corso di milioni di anni"], canvas.width / 2, canvas.height / 2, fontSize, lineHeight);
        } else {
            context.fillText("Tra miliardi di stelle,di persone, nel corso di milioni di anni", canvas.width/2, canvas.height/2);
        }
        opacity -= 0.01;
    }

    if(frameNumber == 1000) opacity = 0;

    // 1000 - 1500: Terza frase
    if(frameNumber > 1000 && frameNumber < 1250){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        context.fillText("ci siamo ritrovati qui, a spendere il, spero, resto della nostra vita insieme", canvas.width/2, canvas.height/2);
        opacity += 0.01;
    }
    if(frameNumber >= 1250 && frameNumber < 1500){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        context.fillText("ci siamo ritrovati qui, a spendere il, spero, resto della nostra vita insieme", canvas.width/2, canvas.height/2);
        opacity -= 0.01;
    }

    if(frameNumber == 1500) opacity = 0;

    // 1500 - 2000: Quarta frase
    if(frameNumber > 1500 && frameNumber < 1750){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        context.fillText("Anche se magari non te lo dico spesso, ti amo davvero tanto", canvas.width/2, canvas.height/2);
        opacity += 0.01;
    }
    if(frameNumber >= 1750 && frameNumber < 2000){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        context.fillText("Anche se magari non te lo dico spesso, ti amo davvero tanto", canvas.width/2, canvas.height/2);
        opacity -= 0.01;
    }

    if(frameNumber == 2000) opacity = 0;

    // 2000 - 2500: Quinta frase
    if(frameNumber > 2000 && frameNumber < 2250){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        if (window.innerWidth < 600) {
            drawTextWithLineBreaks(["E spero che il nostro rapporto", "non diventi solo un dolce ricordo"], canvas.width / 2, canvas.height / 2, fontSize, lineHeight);
        } else {
            context.fillText("E spero che il nostro rapporto non diventi solo un dolce ricordo", canvas.width/2, canvas.height/2);
        }
        opacity += 0.01;
    }
    if(frameNumber >= 2250 && frameNumber < 2500){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        if (window.innerWidth < 600) {
            drawTextWithLineBreaks(["E spero che il nostro rapporto", "non diventi solo un dolce ricordo"], canvas.width / 2, canvas.height / 2, fontSize, lineHeight);
        } else {
            context.fillText("E spero che il nostro rapporto non diventi solo un dolce ricordo", canvas.width/2, canvas.height/2);
        }
        opacity -= 0.01;
    }

    if(frameNumber == 2500) opacity = 0;

    // 2500+: Messaggio finale
    if(frameNumber > 2500){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        if (window.innerWidth < 600) {
            drawTextWithLineBreaks(["Hai questo talento speciale,", "farmi sentire una persona fortunata"], canvas.width / 2, canvas.height / 2, fontSize, lineHeight);
        } else {
            context.fillText("Hai questo talento speciale, riuscire a farmi sentire una persona cosi fortunata", canvas.width/2, canvas.height/2);
        }
        opacity += 0.01;
    }

    if(frameNumber >= 2750){
        context.fillStyle = `rgba(45, 45, 255, ${secondOpacity})`;
        if (window.innerWidth < 600) {
            drawTextWithLineBreaks(["Grazie perchè con te mi sento a casa.", "Sei la mia persona preferita!"], canvas.width / 2, (canvas.height/2 + 60), fontSize, lineHeight);
        } else {
            context.fillText("Grazie perchè con te mi sento sempre a casa. Sei la mia persona preferita!", canvas.width/2, (canvas.height/2 + 50));
        }
        secondOpacity += 0.01;
    }

    if(frameNumber >= 3100){
        context.fillStyle = `rgba(45, 45, 255, ${thirdOpacity})`;
        context.fillText("Ti amo Poppy 🤍🤍🤍", canvas.width/2, (canvas.height/2 + 120));
        thirdOpacity += 0.01;
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
