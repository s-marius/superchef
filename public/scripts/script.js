let playButton, playScreen, finalScreen, playAgainButton, buttonSound, vibrationToggler, tsText,
    setTextMenu, volText, musText, vibText, nextText, alertText, alertButton, recipeNameTut, answerTutOne, answerTutTwo,
    answerTutThree, answerTutFour, ingrTut, ingredientsText, ingredientsTutText, ingredientsDial, answersDial,
    titleDial, settingsButton;
ingredientsDial = document.querySelector('.ingrediends-dial');
answersDial = document.querySelector('.answers-dial');
titleDial = document.querySelector('.title');
ingredientsText = document.querySelector('#ingr');
ingredientsTutText = document.querySelector('#tutorial-screen #ingr');
ingrTut = document.querySelector('#tutorial-screen .simple');
recipeNameTut = document.querySelector('#tutorial-screen .nume-reteta');
answerTutOne = document.querySelector('#tutorial-screen .one');
answerTutTwo = document.querySelector('#tutorial-screen .two');
answerTutThree = document.querySelector('#tutorial-screen .three');
answerTutFour = document.querySelector('#tutorial-screen .four');
alertButton = document.querySelector('.alert-button');
alertText = document.querySelector('.alert-text');
nextText = document.querySelector('.next');
volText = document.querySelector('.vol-text');
musText = document.querySelector('.mus-text');
vibText = document.querySelector('.vib-text');
setTextMenu = document.querySelector('.settings-text');
settingsButton = document.querySelector('.settings-btn');
tsText = document.querySelector('.ts-text');
vibrationToggler = document.querySelector('#vibration');
buttonSound = document.querySelector('#button-sound');
finalScreen = document.querySelector('#final-screen');
playButton = document.querySelector('.play-btn');
playScreen = document.querySelector('#play-screen');
playAgainButton = document.querySelector('#play-again');
let titleSound = document.getElementById("title-sound");
let answerButton = document.querySelectorAll('.answer');
let answerButtonTut = document.querySelectorAll('.answer-tut');
let tutorialScreen = document.getElementById("tutorial-screen");
let elem = document.getElementById("welcome-screen");
let randomRecipeFixed;
let answer, nrIngrediente, randomButton;
let buttons = ['.one', '.two', '.three', '.four'];
let intrebari = [];
let listaretete = [];
let sessionScore = 0;
let stepSession = 0;
let settingsBtn_ro, totalScore_ro, volumeText_ro, musicText_ro, vibrationText_ro, nextText_ro, alertText_ro,
    alertBtn_ro, answerTutOne_ro, answerTutTwo_ro, answerTutThree_ro, answerTutFour_ro, ingrTut_ro, ingredientsText_ro,
    ingredientsDial_ro, answersDial_ro, titleDial_ro;
ingredientsText_ro = 'Ingrediente: ';
settingsBtn_ro = 'Set&#x103;ri';
totalScore_ro = '<span>S</span><span>C</span><span>O</span><span>R&nbsp</span><span>T</span><span>O</span><span>T</span><span>A</span><span>L</span><span>:</span>';
volumeText_ro = 'Volum';
musicText_ro = 'Muzic&#x103;';
vibrationText_ro = 'Vibra&#x163;ii';
nextText_ro = 'Urmatorul';
alertText_ro = 'Felicit&#x103;ri';
alertBtn_ro = 'Continu&#x103;';
answerTutOne_ro = 'Sos de rosii';
answerTutTwo_ro = 'Suc de mere';
answerTutThree_ro = 'Coada de rechin';
answerTutFour_ro = 'Nisip';
ingrTut_ro = '<li>Ciuperci</li><li>Cascaval</li><li>Salam</li>';
ingredientsDial_ro = '/assets/tutorial/ingr-dial_ro.png';
answersDial_ro = '/assets/tutorial/answer-dial_ro.png';
titleDial_ro = '/assets/tutorial/title-dial_ro.png';

let settingsBtn_en, totalScore_en, volumeText_en, musicText_en, vibrationText_en, nextText_en, alertText_en,
    alertBtn_en, answerTutOne_en, answerTutTwo_en, answerTutThree_en, answerTutFour_en, ingrTut_en, ingredientsText_en,
    ingredientsDial_en, answersDial_en, titleDial_en;
ingredientsText_en = 'Ingredients: ';
totalScore_en = '<span>T</span><span>O</span><span>T</span><span>A</span><span>L&nbsp</span><span>S</span><span>C</span><span>O</span><span>R</span><span>E</span><span>:</span>';
volumeText_en = 'Volume';
settingsBtn_en = 'Settings';
musicText_en = 'Music';
vibrationText_en = 'Vibrations';
nextText_en = 'Next';
alertText_en = 'Congratulations!';
alertBtn_en = 'Next';
answerTutOne_en = 'Tomato sauce';
answerTutTwo_en = 'Apple juice';
answerTutThree_en = 'Shark tail';
answerTutFour_en = 'Dust';
ingrTut_en = '<li>Mushrooms</li><li>Cheese</li><li>Ham</li>';
ingredientsDial_en = '/assets/tutorial/ingr-dial.png';
answersDial_en = '/assets/tutorial/answer-dial.png';
titleDial_en = '/assets/tutorial/title-dial.png';
let incorrectAnswers, incorrectAnswersPerSession;

// PIZZA loader BEGIN

'use strict';

let toRadians = (deg) => deg * Math.PI / 180;
let map = (val, a1, a2, b1, b2) => b1 + (val - a1) * (b2 - b1) / (a2 - a1);

class Pizza {
    constructor(id) {
        this.canvas = document.getElementById(id);
        this.ctx = this.canvas.getContext('2d');

        this.sliceCount = 6;
        this.sliceSize = 80;

        this.width = this.height = this.canvas.height = this.canvas.width = this.sliceSize * 2 + 50;
        this.center = this.height / 2 | 0;

        this.sliceDegree = 360 / this.sliceCount;
        this.sliceRadians = toRadians(this.sliceDegree);
        this.progress = 0;
        this.cooldown = 10;

    }

    update() {
        let ctx = this.ctx;
        ctx.clearRect(0, 0, this.width, this.height);

        if (--this.cooldown < 0) this.progress += this.sliceRadians * 0.01 + this.progress * 0.07;

        ctx.save();
        ctx.translate(this.center, this.center);

        for (let i = this.sliceCount - 1; i > 0; i--) {

            let rad;
            if (i === this.sliceCount - 1) {
                let ii = this.sliceCount - 1;

                rad = this.sliceRadians * i + this.progress;

                ctx.strokeStyle = '#FBC02D';
                cheese(ctx, rad, .9, ii, this.sliceSize, this.sliceDegree);
                cheese(ctx, rad, .6, ii, this.sliceSize, this.sliceDegree);
                cheese(ctx, rad, .5, ii, this.sliceSize, this.sliceDegree);
                cheese(ctx, rad, .3, ii, this.sliceSize, this.sliceDegree);

            } else rad = this.sliceRadians * i;

            // border
            ctx.beginPath();
            ctx.lineCap = 'butt';
            ctx.lineWidth = 11;
            ctx.arc(0, 0, this.sliceSize, rad, rad + this.sliceRadians);
            ctx.strokeStyle = '#F57F17';
            ctx.stroke();

            // slice
            let startX = this.sliceSize * Math.cos(rad);
            let startY = this.sliceSize * Math.sin(rad);
            ctx.fillStyle = '#FBC02D';
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(startX, startY);
            ctx.arc(0, 0, this.sliceSize, rad, rad + this.sliceRadians);
            ctx.lineTo(0, 0);
            ctx.closePath();
            ctx.fill();
            ctx.lineWidth = .3;
            ctx.stroke();

            // meat
            let x = this.sliceSize * .65 * Math.cos(rad + this.sliceRadians / 2);
            let y = this.sliceSize * .65 * Math.sin(rad + this.sliceRadians / 2);
            ctx.beginPath();
            ctx.arc(x, y, this.sliceDegree / 6, 0, 2 * Math.PI);
            ctx.fillStyle = '#D84315';
            ctx.fill();

        }

        ctx.restore();

        if (this.progress > this.sliceRadians) {
            ctx.translate(this.center, this.center);
            ctx.rotate(-this.sliceDegree * Math.PI / 180);
            ctx.translate(-this.center, -this.center);

            this.progress = 0;
            this.cooldown = 20;
        }

    }

}



function cheese(ctx, rad, multi, ii, sliceSize, sliceDegree) {
    let x1 = sliceSize * multi * Math.cos(toRadians(ii * sliceDegree) - .2);
    let y1 = sliceSize * multi * Math.sin(toRadians(ii * sliceDegree) - .2);
    let x2 = sliceSize * multi * Math.cos(rad + .2);
    let y2 = sliceSize * multi * Math.sin(rad + .2);

    let csx = sliceSize * Math.cos(rad);
    let csy = sliceSize * Math.sin(rad);

    let d = Math.sqrt((x1 - csx) * (x1 - csx) + (y1 - csy) * (y1 - csy));
    ctx.beginPath();
    ctx.lineCap = 'round';

    let percentage = map(d, 15, 70, 1.2, 0.2);

    let tx = x1 + (x2 - x1) * percentage;
    let ty = y1 + (y2 - y1) * percentage;
    ctx.moveTo(x1, y1);
    ctx.lineTo(tx, ty);

    tx = x2 + (x1 - x2) * percentage;
    ty = y2 + (y1 - y2) * percentage;
    ctx.moveTo(x2, y2);
    ctx.lineTo(tx, ty);

    ctx.lineWidth = map(d, 0, 100, 20, 2);
    ctx.stroke();
}

let pizza = new Pizza('pizza');
// PIZZA Loader END

// FIREWORS LOAD START


var Fireworks;
Fireworks = function () {
    /*=============================================================================*/
    /* Utility
    /*=============================================================================*/
    var self = this;
    var rand = function (rMi, rMa) {
        return ~~((Math.random() * (rMa - rMi + 1)) + rMi);
    }
    var hitTest = function (x1, y1, w1, h1, x2, y2, w2, h2) {
        return !(x1 + w1 < x2 || x2 + w2 < x1 || y1 + h1 < y2 || y2 + h2 < y1);
    };
    window.requestAnimFrame = function () {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (a) {
            window.setTimeout(a, 1E3 / 60)
        }
    }();

    /*=============================================================================*/
    /* Initialize
    /*=============================================================================*/
    self.init = function () {
        self.dt = 0;
        self.oldTime = Date.now();
        self.canvas = document.createElement('canvas');
        self.canvasContainer = document.querySelector('#canvas-container');

        var canvasContainerDisabled = document.getElementById('canvas-container');
        self.canvas.onselectstart = function () {
            return false;
        };

        self.canvas.width = self.cw = 600;
        self.canvas.height = self.ch = 400;

        self.particles = [];
        self.partCount = 30;
        self.fireworks = [];
        self.mx = self.cw / 2;
        self.my = self.ch / 2;
        self.currentHue = 40;
        self.partSpeed = 5;
        self.partSpeedVariance = 10;
        self.partWind = 50;
        self.partFriction = 5;
        self.partGravity = 1;
        self.hueMin = 150;
        self.hueMax = 200;
        self.fworkSpeed = 2;
        self.fworkAccel = 4;
        self.hueVariance = 30;
        self.flickerDensity = 20;
        self.showShockwave = false;
        self.showTarget = true;
        self.clearAlpha = 25;

        self.canvasContainer.append(self.canvas);
        self.ctx = self.canvas.getContext('2d');
        self.ctx.lineCap = 'round';
        self.ctx.lineJoin = 'round';
        self.lineWidth = 1;
        self.bindEvents();
        self.canvasLoop();

        self.canvas.onselectstart = function () {
            return false;
        };


    };

    /*=============================================================================*/
    /* Particle Constructor
    /*=============================================================================*/
    var Particle = function (x, y, hue) {
        this.x = x;
        this.y = y;
        this.coordLast = [
            {x: x, y: y},
            {x: x, y: y},
            {x: x, y: y}
        ];
        this.angle = rand(0, 360);
        this.speed = rand(((self.partSpeed - self.partSpeedVariance) <= 0) ? 1 : self.partSpeed - self.partSpeedVariance, (self.partSpeed + self.partSpeedVariance));
        this.friction = 1 - self.partFriction / 100;
        this.gravity = self.partGravity / 2;
        this.hue = rand(hue - self.hueVariance, hue + self.hueVariance);
        this.brightness = rand(50, 80);
        this.alpha = rand(40, 100) / 100;
        this.decay = rand(10, 50) / 1000;
        this.wind = (rand(0, self.partWind) - (self.partWind / 2)) / 25;
        this.lineWidth = self.lineWidth;
    };

    Particle.prototype.update = function (index) {
        var radians = this.angle * Math.PI / 180;
        var vx = Math.cos(radians) * this.speed;
        var vy = Math.sin(radians) * this.speed + this.gravity;
        this.speed *= this.friction;

        this.coordLast[2].x = this.coordLast[1].x;
        this.coordLast[2].y = this.coordLast[1].y;
        this.coordLast[1].x = this.coordLast[0].x;
        this.coordLast[1].y = this.coordLast[0].y;
        this.coordLast[0].x = this.x;
        this.coordLast[0].y = this.y;

        this.x += vx * self.dt;
        this.y += vy * self.dt;

        this.angle += this.wind;
        this.alpha -= this.decay;

        if (!hitTest(0, 0, self.cw, self.ch, this.x - this.radius, this.y - this.radius, this.radius * 2, this.radius * 2) || this.alpha < .05) {
            self.particles.splice(index, 1);
        }
    };

    Particle.prototype.draw = function () {
        var coordRand = (rand(1, 3) - 1);
        self.ctx.beginPath();
        self.ctx.moveTo(Math.round(this.coordLast[coordRand].x), Math.round(this.coordLast[coordRand].y));
        self.ctx.lineTo(Math.round(this.x), Math.round(this.y));
        self.ctx.closePath();
        self.ctx.strokeStyle = 'hsla(' + this.hue + ', 100%, ' + this.brightness + '%, ' + this.alpha + ')';
        self.ctx.stroke();

        if (self.flickerDensity > 0) {
            var inverseDensity = 50 - self.flickerDensity;
            if (rand(0, inverseDensity) === inverseDensity) {
                self.ctx.beginPath();
                self.ctx.arc(Math.round(this.x), Math.round(this.y), rand(this.lineWidth, this.lineWidth + 3) / 2, 0, Math.PI * 2, false)
                self.ctx.closePath();
                var randAlpha = rand(50, 100) / 100;
                self.ctx.fillStyle = 'hsla(' + this.hue + ', 100%, ' + this.brightness + '%, ' + randAlpha + ')';
                self.ctx.fill();
            }
        }
    };

    /*=============================================================================*/
    /* Create Particles
    /*=============================================================================*/
    self.createParticles = function (x, y, hue) {
        var countdown = self.partCount;
        while (countdown--) {
            self.particles.push(new Particle(x, y, hue));
        }
    };

    /*=============================================================================*/
    /* Update Particles
    /*=============================================================================*/
    self.updateParticles = function () {
        var i = self.particles.length;
        while (i--) {
            var p = self.particles[i];
            p.update(i);
        }
        ;
    };

    /*=============================================================================*/
    /* Draw Particles
    /*=============================================================================*/
    self.drawParticles = function () {
        var i = self.particles.length;
        while (i--) {
            var p = self.particles[i];
            p.draw();
        }
        ;
    };

    /*=============================================================================*/
    /* Firework Constructor
    /*=============================================================================*/
    var Firework = function (startX, startY, targetX, targetY) {
        this.x = startX;
        this.y = startY;
        this.startX = startX;
        this.startY = startY;
        this.hitX = false;
        this.hitY = false;
        this.coordLast = [
            {x: startX, y: startY},
            {x: startX, y: startY},
            {x: startX, y: startY}
        ];
        this.targetX = targetX;
        this.targetY = targetY;
        this.speed = self.fworkSpeed;
        this.angle = Math.atan2(targetY - startY, targetX - startX);
        this.shockwaveAngle = Math.atan2(targetY - startY, targetX - startX) + (90 * (Math.PI / 180));
        this.acceleration = self.fworkAccel / 100;
        this.hue = self.currentHue;
        this.brightness = rand(50, 80);
        this.alpha = rand(50, 100) / 100;
        this.lineWidth = self.lineWidth;
        this.targetRadius = 1;
    };

    Firework.prototype.update = function (index) {
        self.ctx.lineWidth = this.lineWidth;

        var vx = Math.cos(this.angle) * this.speed;
        var vy = Math.sin(this.angle) * this.speed;
        this.speed *= 1 + this.acceleration;
        this.coordLast[2].x = this.coordLast[1].x;
        this.coordLast[2].y = this.coordLast[1].y;
        this.coordLast[1].x = this.coordLast[0].x;
        this.coordLast[1].y = this.coordLast[0].y;
        this.coordLast[0].x = this.x;
        this.coordLast[0].y = this.y;

        if (self.showTarget) {
            if (this.targetRadius < 8) {
                this.targetRadius += .25 * self.dt;
            } else {
                this.targetRadius = 1 * self.dt;
            }
        }

        if (this.startX >= this.targetX) {
            if (this.x + vx <= this.targetX) {
                this.x = this.targetX;
                this.hitX = true;
            } else {
                this.x += vx * self.dt;
            }
        } else {
            if (this.x + vx >= this.targetX) {
                this.x = this.targetX;
                this.hitX = true;
            } else {
                this.x += vx * self.dt;
            }
        }

        if (this.startY >= this.targetY) {
            if (this.y + vy <= this.targetY) {
                this.y = this.targetY;
                this.hitY = true;
            } else {
                this.y += vy * self.dt;
            }
        } else {
            if (this.y + vy >= this.targetY) {
                this.y = this.targetY;
                this.hitY = true;
            } else {
                this.y += vy * self.dt;
            }
        }

        if (this.hitX && this.hitY) {
            var randExplosion = rand(0, 9);
            self.createParticles(this.targetX, this.targetY, this.hue);
            self.fireworks.splice(index, 1);
        }
    };

    Firework.prototype.draw = function () {
        self.ctx.lineWidth = this.lineWidth;

        var coordRand = (rand(1, 3) - 1);
        self.ctx.beginPath();
        self.ctx.moveTo(Math.round(this.coordLast[coordRand].x), Math.round(this.coordLast[coordRand].y));
        self.ctx.lineTo(Math.round(this.x), Math.round(this.y));
        self.ctx.closePath();
        self.ctx.strokeStyle = 'hsla(' + this.hue + ', 100%, ' + this.brightness + '%, ' + this.alpha + ')';
        self.ctx.stroke();

        if (self.showTarget) {
            self.ctx.save();
            self.ctx.beginPath();
            self.ctx.arc(Math.round(this.targetX), Math.round(this.targetY), this.targetRadius, 0, Math.PI * 2, false)
            self.ctx.closePath();
            self.ctx.lineWidth = 1;
            self.ctx.stroke();
            self.ctx.restore();
        }

        if (self.showShockwave) {
            self.ctx.save();
            self.ctx.translate(Math.round(this.x), Math.round(this.y));
            self.ctx.rotate(this.shockwaveAngle);
            self.ctx.beginPath();
            self.ctx.arc(0, 0, 1 * (this.speed / 5), 0, Math.PI, true);
            self.ctx.strokeStyle = 'hsla(' + this.hue + ', 100%, ' + this.brightness + '%, ' + rand(25, 60) / 100 + ')';
            self.ctx.lineWidth = this.lineWidth;
            self.ctx.stroke();
            self.ctx.restore();
        }
    };

    /*=============================================================================*/
    /* Create Fireworks
    /*=============================================================================*/
    self.createFireworks = function (startX, startY, targetX, targetY) {
        self.fireworks.push(new Firework(startX, startY, targetX, targetY));
    };

    /*=============================================================================*/
    /* Update Fireworks
    /*=============================================================================*/
    self.updateFireworks = function () {
        var i = self.fireworks.length;
        while (i--) {
            var f = self.fireworks[i];
            f.update(i);
        }
        ;
    };

    /*=============================================================================*/
    /* Draw Fireworks
    /*=============================================================================*/
    self.drawFireworks = function () {
        var i = self.fireworks.length;
        while (i--) {
            var f = self.fireworks[i];
            f.draw();
        }
        ;
    };

    /*=============================================================================*/
    /* Events
    /*=============================================================================*/
    self.bindEvents = function () {
        window.addEventListener('resize', function () {
            clearTimeout(self.timeout);
            self.timeout = setTimeout(function () {
                self.ctx.lineCap = 'round';
                self.ctx.lineJoin = 'round';
            }, 100);
        });
    }

    /*=============================================================================*/
    /* Clear Canvas
    /*=============================================================================*/
    self.clear = function () {
        self.particles = [];
        self.fireworks = [];
        self.ctx.clearRect(0, 0, self.cw, self.ch);
    };

    /*=============================================================================*/
    /* Delta
    /*=============================================================================*/
    self.updateDelta = function () {
        var newTime = Date.now();
        self.dt = (newTime - self.oldTime) / 16;
        self.dt = (self.dt > 5) ? 5 : self.dt;
        self.oldTime = newTime;
    }

    /*=============================================================================*/
    /* Main Loop
    /*=============================================================================*/
    self.canvasLoop = function () {
        requestAnimFrame(self.canvasLoop, self.canvas);
        self.updateDelta();
        self.ctx.globalCompositeOperation = 'destination-out';
        self.ctx.fillStyle = 'rgba(0,0,0,' + self.clearAlpha / 100 + ')';
        self.ctx.fillRect(0, 0, self.cw, self.ch);
        self.ctx.globalCompositeOperation = 'lighter';
        self.updateFireworks();
        self.updateParticles();
        self.drawFireworks();
        self.drawParticles();
    };

    self.init();

    var initialLaunchCount = 10;
    while (initialLaunchCount--) {
        setTimeout(function () {
            self.fireworks.push(new Firework(self.cw / 2, self.ch, rand(50, self.cw - 50), rand(50, self.ch / 2) - 50));
        }, initialLaunchCount * 200);
    }

};
//FIREWORKS LOAD END



















let stop;

// Add items to array
function addData(data) {
    listaretete.push(data);
}


// LANGUAGE FUNCTION - Romanian
function ro() {
    document.querySelector('.lang-text').innerHTML = 'Rom&#226;n&#259;';
    incorrectAnswers = ["Avocado", "Afine", "Alune", "Ananas", "Albus", "Busuioc", "Vin", "Brocoli", "Boia", "Bors", "Bulion", "Bacon", "Carne tocata", "Cartofi", "Caramel", "Cacao", "Coada de rechin", "Frisca", "Conopida", "Fidea", "Naut", "Fasole", "Fistic", "Ierburi aromatice", "Hrean", "Iasomie", "Jambon", "Maioneza", "Mango", "Marar", "Miere", "Martipan", "Otet", "Oregano", "Prune", "Carne de dinozaur", "Rahat", "Rodie", "Sparanghel", "Soia", "Scortisoara", "Usturoi", "Unt", "Ulei", "letza", "Zmeura"];
    incorrectAnswersPerSession = ["Avocado", "Afine", "Alune", "Ananas", "Albus", "Busuioc", "Vin", "Brocoli", "Boia", "Bors", "Bulion", "Bacon", "Carne tocata", "Cartofi", "Caramel", "Cacao", "Coada de rechin", "Frisca", "Conopida", "Fidea", "Naut", "Fasole", "Fistic", "Ierburi aromatice", "Hrean", "Iasomie", "Jambon", "Maioneza", "Mango", "Marar", "Miere", "Martipan", "Otet", "Oregano", "Prune", "Carne de dinozaur", "Rahat", "Rodie", "Sparanghel", "Soia", "Scortisoara", "Usturoi", "Unt", "Ulei", "letza", "Zmeura"];

    function getObject() {
        let jsonhttp = new XMLHttpRequest();
        jsonhttp.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                let x = JSON.parse(this.responseText);
                let totalretete = x.retete;
                for (let i = 0; i < 20; i++) {
                    let x = Math.floor(Math.random() * totalretete.length);
                    addData(totalretete[x]);
                    totalretete.splice(x, 1);
                }
                console.log(listaretete);
            }
        };
        jsonhttp.open("GET", "/retete.json", true);
        jsonhttp.send();
    }

    getObject();
    setTextMenu.innerHTML = settingsBtn_ro;
    tsText.innerHTML = totalScore_ro;
    volText.innerHTML = volumeText_ro;
    musText.innerHTML = musicText_ro;
    vibText.innerHTML = vibrationText_ro;
    nextText.style.fontSize = "25px";
    nextText.innerHTML = nextText_ro;
    answerTutOne.innerHTML = answerTutOne_ro;
    answerTutTwo.innerHTML = answerTutTwo_ro;
    answerTutThree.innerHTML = answerTutThree_ro;
    answerTutFour.innerHTML = answerTutFour_ro;
    ingrTut.innerHTML = ingrTut_ro;
    ingredientsText.innerHTML = ingredientsTutText.innerHTML = ingredientsText_ro;
    ingredientsDial.src = ingredientsDial_ro;
    answersDial.src = answersDial_ro;
    titleDial.src = titleDial_ro;
    document.querySelector('.alert-button').style.fontSize = '20px';
}


// LANGUAGE FUNCTION - English
function en() {
    document.querySelector('.lang-text').innerHTML = 'English';
    incorrectAnswers = ["Olive Oil", "Garlic", "Caster Sugar", "Red Wine Vinegar", "Chopped Tomatoes", "Basil Leaves", "Mascarpone", "Milk", "Parmesan", "Mozzarella", "Spinach", "Parmesan", "Ricotta", "Nutmeg", "Cannellini Beans",
        "Puff Pastry", "Egg White", "Egg Yolks", "Vegetable Oil", "Beef", "Lamb Kidney", "Onions", "Plain Flour", "Beef Stock", "Salt", "Pepper", "Worcestershire Sauce",
        "Macaroni", "Plain Flour", "Mustard Powder", "Garlic Powder", "Kosher Salt", "Black Pepper", "Cayenne Pepper", "Butter", "Whole Milk", "Heavy Cream", "Monterey Jack Cheese", "Butter", "Garlic Powder", "Bread", "Cheddar Cheese", "Colby Jack Cheese", "Butter",
        "Sausages", "Vegetable Oil", "Plain Flour", "Eggs", "Horseradish", "Milk", "Cherry Tomatoes",
        "Chicken", "Onion", "Tomatoes", "Garlic", "Ginger Paste", "Vegetable Oil", "Cumin Seeds", "Coriander Seeds", "Turmeric Powder", "Chilli Powder", "Green Chilli", "Yogurt", "Cream", "Fenugreek", "Garam Masala", "Salt"];
    incorrectAnswersPerSession = ["Olive Oil", "Garlic", "Caster Sugar", "Red Wine Vinegar", "Chopped Tomatoes", "Basil Leaves", "Mascarpone", "Milk", "Parmesan", "Mozzarella", "Spinach", "Parmesan", "Ricotta", "Nutmeg", "Cannellini Beans",
        "Puff Pastry", "Egg White", "Egg Yolks", "Vegetable Oil", "Beef", "Lamb Kidney", "Onions", "Plain Flour", "Beef Stock", "Salt", "Pepper", "Worcestershire Sauce",
        "Macaroni", "Plain Flour", "Mustard Powder", "Garlic Powder", "Kosher Salt", "Black Pepper", "Cayenne Pepper", "Butter", "Whole Milk", "Heavy Cream", "Monterey Jack Cheese", "Butter", "Garlic Powder", "Bread", "Cheddar Cheese", "Colby Jack Cheese", "Butter",
        "Sausages", "Vegetable Oil", "Plain Flour", "Eggs", "Horseradish", "Milk", "Cherry Tomatoes",
        "Chicken", "Onion", "Tomatoes", "Garlic", "Ginger Paste", "Vegetable Oil", "Cumin Seeds", "Coriander Seeds", "Turmeric Powder", "Chilli Powder", "Green Chilli", "Yogurt", "Cream", "Fenugreek", "Garam Masala", "Salt"];

    function getObject() {
        let jsonhttp = new XMLHttpRequest();
        jsonhttp.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                let x = JSON.parse(this.responseText);
                let totalretete = x.retete;
                for (let i = 0; i < 20; i++) {
                    let x = Math.floor(Math.random() * totalretete.length);
                    addData(totalretete[x]);
                    totalretete.splice(x, 1);
                }
                console.log(listaretete);
            }
        };
        jsonhttp.open("GET", "/recipes.json", true);
        jsonhttp.send();
    }

    getObject();
    tsText.innerHTML = totalScore_en;
    setTextMenu.innerHTML = settingsBtn_en;
    volText.innerHTML = volumeText_en;
    musText.innerHTML = musicText_en;
    vibText.innerHTML = vibrationText_en;
    nextText.style.fontSize = "28px";
    nextText.innerHTML = nextText_en;
    answerTutOne.innerHTML = answerTutOne_en;
    answerTutTwo.innerHTML = answerTutTwo_en;
    answerTutThree.innerHTML = answerTutThree_en;
    answerTutFour.innerHTML = answerTutFour_en;
    ingrTut.innerHTML = ingrTut_en;
    ingredientsText.innerHTML = ingredientsTutText.innerHTML = ingredientsText_en;
    ingredientsDial.src = ingredientsDial_en;
    answersDial.src = answersDial_en;
    titleDial.src = titleDial_en;
    document.querySelector('.alert-button').style.fontSize = '22px';
}


let totalLocalStorage = JSON.parse(localStorage.getItem('sc_gameSettings'));
if (!localStorage.getItem("visted")) {
    if (navigator.geolocation) {
            navigator.geolocation.watchPosition(showPosition, showError);
    }

    // noinspection JSAnnotator
    function showPosition(position) {
        let lochttp = new XMLHttpRequest();
        lochttp.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                let city, state, zip, country;
                let response = JSON.parse(this.responseText);
                for (let ac = 0; ac < response.results.length; ac++) {
                    response.results[ac].address_components.forEach(element => {
                        switch (element.types[0]) {
                            case "locality":
                                city = element.long_name;
                                break;
                            case "administrative_area_level_1":
                                state = element.short_name;
                                break;
                            case "country":
                                country = element.long_name;
                                break;
                            case "postal_code":
                                zip = element.long_name;
                                break;
                        }
                    });
                }
                if (country === "Romania") {
                    if (!localStorage.getItem("language")) {
                        let lang = ['Romanian'];
                        localStorage.setItem('language', JSON.stringify(lang));
                    }
                } else {
                    console.log(country);
                    if (!localStorage.getItem("language")) {
                        let lang = ['English'];
                        localStorage.setItem('language', JSON.stringify(lang));
                    }
                }

                let langLocalStorage = JSON.parse(localStorage.getItem('language'));
                if (langLocalStorage[0] === "Romanian") {
                    stop = true;
                    document.querySelector('#pizza').style.display = 'none';
                    document.querySelector('.pls-wait').style.display = 'none';
                    document.querySelector('.achiv-btn').style.display = 'block';
                    playButton.style.display = 'block';
                    settingsButton.style.display = 'block';
                    document.querySelector('.total-score').style.display = 'block';
                    let rank = {
                        "rank": "Incep"
                    };
                    let ranking = [];
                    ranking.push(rank);
                    localStorage.setItem('rank', JSON.stringify(ranking));
                    let rankLocalStorage = JSON.parse(localStorage.getItem('rank'));
                    document.querySelector('#rank-text').innerHTML = rankLocalStorage[0].rank;
                    ro();
                } else {
                    stop = true;
                    document.querySelector('#pizza').style.display = 'none';
                    document.querySelector('.pls-wait').style.display = 'none';
                    document.querySelector('.achiv-btn').style.display = 'block';
                    playButton.style.display = 'block';
                    settingsButton.style.display = 'block';
                    document.querySelector('.total-score').style.display = 'block';
                    var rank = {
                        "rank": "Beginner"
                };
                    var ranking = [];
                    ranking.push(rank);
                    localStorage.setItem('rank', JSON.stringify(ranking));
                    let rankLocalStorage = JSON.parse(localStorage.getItem('rank'));
                    document.querySelector('#rank-text').innerHTML = rankLocalStorage[0].rank;
                    en();
                }
            }
        };
        lochttp.open("GET", 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + position.coords.latitude + ',' + position.coords.longitude + '&sensor=true&key=AIzaSyDeabYdteLBA4YlRKQZHwBfOw13cd5Gq7M', true);
        lochttp.send();
    }

    // noinspection JSAnnotator
    function showError(error) {
        switch (error.code) {
            case error.PERMISSION_DENIED:
                setTimeout(function () {
                    let lang = ['English'];
                    localStorage.setItem('language', JSON.stringify(lang));
                    stop = true;
                    document.querySelector('#pizza').style.display = 'none';
                    document.querySelector('.pls-wait').style.display = 'none';
                    document.querySelector('.achiv-btn').style.display = 'block';
                    playButton.style.display = 'block';
                    settingsButton.style.display = 'block';
                    document.querySelector('.total-score').style.display = 'block';
                }, 3000);
                let rank = {
                    "rank": "Beginner"
                };
                let ranking = [];
                ranking.push(rank);
                localStorage.setItem('rank', JSON.stringify(ranking));
                let rankLocalStorage = JSON.parse(localStorage.getItem('rank'));
                document.querySelector('#rank-text').innerHTML = rankLocalStorage[0].rank;
                en();
                break;
            case error.POSITION_UNAVAILABLE:
                setTimeout(function () {
                    let lang = ['English'];
                    localStorage.setItem('language', JSON.stringify(lang));
                    stop = true;
                    document.querySelector('#pizza').style.display = 'none';
                    document.querySelector('.pls-wait').style.display = 'none';
                    document.querySelector('.achiv-btn').style.display = 'block';
                    playButton.style.display = 'block';
                    settingsButton.style.display = 'block';
                    document.querySelector('.total-score').style.display = 'block';
                }, 3000);
               rank = {
                    "rank": "Beginner"
                };
                ranking = [];
                ranking.push(rank);
                localStorage.setItem('rank', JSON.stringify(ranking));
                rankLocalStorage = JSON.parse(localStorage.getItem('rank'));
                document.querySelector('#rank-text').innerHTML = rankLocalStorage[0].rank;
                en();
                break;
            case error.TIMEOUT:
                setTimeout(function () {
                    let lang = ['English'];
                    localStorage.setItem('language', JSON.stringify(lang));
                    stop = true;
                    document.querySelector('#pizza').style.display = 'none';
                    document.querySelector('.pls-wait').style.display = 'none';
                    document.querySelector('.achiv-btn').style.display = 'block';
                    playButton.style.display = 'block';
                    settingsButton.style.display = 'block';
                    document.querySelector('.total-score').style.display = 'block';
                }, 3000);
                rank = {
                    "rank": "Beginner"
                };
                ranking = [];
                ranking.push(rank);
                localStorage.setItem('rank', JSON.stringify(ranking));
                rankLocalStorage = JSON.parse(localStorage.getItem('rank'));
                document.querySelector('#rank-text').innerHTML = rankLocalStorage[0].rank;
                en();
                break;
            case error.UNKNOWN_ERROR:
                console.log('Unknown error, please contact app administrator!');
                break;
        }
    }

    document.querySelector('.on-off').innerHTML = "on";
    document.querySelector('.on-off-sf').innerHTML = "on";
    document.querySelector('.on-off-vib').innerHTML = "on";
    let volumeLocalStorage = JSON.parse(localStorage.getItem('sc_gamevolume'));
    let musicVol = {
        "music": document.querySelector('.on-off').innerHTML,
        "sf": document.querySelector('.on-off-sf').innerHTML,
        "vibration": document.querySelector('.on-off-vib').innerHTML
    };
    let volume = [];
    titleSound.play();
    volume.push(musicVol);
    localStorage.setItem('sc_gamevolume', JSON.stringify(volume));
    let money = [0];
    localStorage.setItem('money', JSON.stringify(money));
    let moneyLocalStorage = JSON.parse(localStorage.getItem('money'));
    document.querySelector('#vault').innerHTML = moneyLocalStorage[0];
    localStorage.setItem("visted", true);
}

let langLocalStorage = JSON.parse(localStorage.getItem('language'));
if (langLocalStorage !== null) {
    let langLocalStorage = JSON.parse(localStorage.getItem('language'));
    stop = true;
    document.querySelector('.pls-wait').style.display = 'none';
    document.querySelector('#pizza').style.display = 'none';
    document.querySelector('.achiv-btn').style.display = 'block';
    playButton.style.display = 'block';
    settingsButton.style.display = 'block';
    document.querySelector('.total-score').style.display = 'block';
    if (langLocalStorage[0] === "Romanian") {
        ro();
    } else {
        en();
    }
}
let volumeLocalStorage = JSON.parse(localStorage.getItem('sc_gamevolume'));
document.querySelector('.on-off').innerHTML = volumeLocalStorage[0].music;
document.querySelector('.on-off-sf').innerHTML = volumeLocalStorage[0].sf;
document.querySelector('.on-off-vib').innerHTML = volumeLocalStorage[0].vibration;

if (volumeLocalStorage[0].sf === 'on') {
    document.querySelector('.volume-icon-sf').innerHTML = 'volume_up';
} else {
    document.querySelector('.volume-icon-sf').innerHTML = 'volume_off';
}

let moneyLocalStorage = JSON.parse(localStorage.getItem('money'));
let money = [moneyLocalStorage[0]];
localStorage.setItem('money', JSON.stringify(money));
moneyLocalStorage = JSON.parse(localStorage.getItem('money'));
document.querySelector('#vault').innerHTML = moneyLocalStorage[0];

navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;
document.addEventListener('contextmenu', function (event) {
    event.preventDefault();
});

if (!localStorage.getItem("language")) {
    document.querySelector('.achiv-btn').style.display = 'none';
    playButton.style.display = 'none';
    settingsButton.style.display = 'none';
    document.querySelector('.pls-wait').style.display = 'block';
    document.querySelector('.total-score').style.display = 'none';
    stop = false;

    // noinspection JSAnnotator
    function update() {
        if (stop) {
            return;
        }
        requestAnimationFrame(update);
        pizza.update();
    }

    update();
}

titleSound.play();
window.addEventListener('blur', function () {
    titleSound.pause();
});

function removeData(dataToRemove) {
    incorrectAnswersPerSession.splice(dataToRemove, 1);
}

//Get a random number from length of the JSON object
function getRandom(x) {
    return Math.floor(Math.random() * x.length);
}

function removeDuplicates(removeDup) {
    incorrectAnswersPerSession.splice(removeDup, 1);
}

function changeButtons(param) {
    incorrectAnswersPerSession = incorrectAnswers.slice();
    for (let i = 0; i < incorrectAnswersPerSession.length; i++) {
        for (let x = 0; x < listaretete[param].ingrediente.length; x++) {
            if (incorrectAnswersPerSession[i] === listaretete[param].ingrediente[x]) {
                removeData(i);
            }
        }
    }
    for (let z = 0; z < buttons.length; z++) {
        let care = Math.floor(Math.random() * incorrectAnswersPerSession.length);
        document.querySelector(buttons[z]).innerHTML = incorrectAnswersPerSession[care];
        removeDuplicates(care);
    }
}

// ^^^^^^^^^^^^ CLOCK START ^^^^^^^^^^^^^^^^
let countdownClock = document.querySelector('#clock');
let countdownTimer = document.querySelector('#timer');

function colourChanger(intAngle) {
    // RGB values
    // Green: 	 51 153  0
    // Orange:	244 138  0
    // Red:		255   0  0

    intAngle = 6.29 - intAngle;

    if (Math.floor(72 + 55 * intAngle) < 255 || Math.floor(214 + 14 * intAngle) < 255) {
        // Animate from green to amber
        return 'rgb(' + Math.floor(72 + 55 * intAngle) + ',' + Math.floor(214 + 14 * intAngle) + ',0)';
    } else {
        // Animate from amber to red
        return 'rgb(' + Math.floor(255) + ',' + Math.floor(597 - (90 * intAngle)) + ',0)';
    }
}

function beginTimer(timer) {
    let dteStart = new Date();
    dteStart = dteStart.getTime();
    countDownClock(dteStart, timer);
    countdownClock.style.display = 'block';
    countdownTimer.style.display = 'block';
}

function countDownClock(dteStart, timer) {
    let d = new Date();
    window.intOffset = timer - (d.getTime() - dteStart);
    countdownTimer.innerHTML = "" + Math.ceil(window.intOffset / 1000);
    window.intAngle = 0.1048335 * 0.002 * window.intOffset;
    let canvas = document.getElementById("clock");
    if (canvas.getContext) // Does the browser support canvas?
    {
        let ctx = canvas.getContext("2d");

        // Clear canvas before re-drawing
        ctx.clearRect(0, 0, 300, 300);

        // Grey background ring
        ctx.beginPath();
        ctx.globalAlpha = 1;
        ctx.arc(150, 150, 140, 0, 6.283, false);
        ctx.arc(150, 150, 105, 6.283, ((Math.PI * 2)), true);
        ctx.fillStyle = "#bbb";
        ctx.fill();
        ctx.closePath();

        // Clock face ring
        ctx.beginPath();
        ctx.globalAlpha = 1;
        ctx.arc(150, 150, 140.1, -1.57, (-1.57 + window.intAngle), false);
        ctx.arc(150, 150, 105, (-1.57 + window.intAngle), ((Math.PI * 2) - 1.57), true);
        ctx.fillStyle = colourChanger(window.intAngle);
        ctx.fill();
        ctx.closePath();

        // Centre circle
        ctx.beginPath();
        ctx.arc(150, 150, 105, 0, 6.283, false);
        ctx.fillStyle = "#fff";
        ctx.fill();
        ctx.closePath();

    } else {
        // Put fallback for browsers that don't support canvas here...
    }
    if (window.intOffset <= 0) {
        nextQuestion(listaretete);
    } else { // Resersive ahoy!
        window.t = setTimeout("countDownClock(" + dteStart + "," + timer + ")", 50);
    }
}

// ^^^^^^^^^^ Clock END ^^^^^^^^^^

// PLAY FUNCTION
function playFunction(listaretete) {
    if (volumeLocalStorage[0].sf === "on") {
        buttonSound.play();
    }
    if (volumeLocalStorage[0].vibration === "on") {
        navigator.vibrate(500);
    }
    document.querySelector('#clock_wrapper').style.display = 'block';
    setTimeout(function () {
        for (let i = 0; i < answerButton.length; i++) {
            answerButton[i].disabled = false;
        }
    }, 1000);
    incorrectAnswersPerSession = incorrectAnswers;
    sessionScore = 0;
    stepSession = 1;
    clearInterval(window.t);
    beginTimer(30000);
    for (let i = 0; i < listaretete.length; i++) {
        intrebari.push(i);
    }
    //Animatii
    setTimeout(function () {
        elem.style.display = 'none';
        playScreen.style.display = 'block';
        let opacityPlay = 0;
        let playFade = setInterval(anim, 10);

        function anim() {
            if (opacityPlay >= 1) {
                clearInterval(playFade);
            } else {
                opacityPlay = opacityPlay + 0.1;
                playScreen.style.opacity = opacityPlay;
                document.querySelector('#clock_wrapper').style.opacity = opacityPlay;

            }
        }
    }, 200);

    //Add letiants and recipe with ingrediends -> JUST FOR WHEN CLICK PLAY BUTTON
    document.querySelector('.simple').innerHTML = "";
    document.querySelector('.complex').innerHTML = "";
    randomRecipeFixed = getRandom(listaretete);
    document.querySelector('.nume-reteta').innerHTML = listaretete[randomRecipeFixed].name;
    intrebari.splice(randomRecipeFixed, 1);
    nrIngrediente = listaretete[randomRecipeFixed].ingrediente.length;
    if (nrIngrediente > 22) {
        nrIngrediente = 22;
    }
    answer = Math.floor(Math.random() * nrIngrediente);

    //Add ingredients to list
    for (let i = 0; i < nrIngrediente; i++) {
        if ((listaretete[randomRecipeFixed].ingrediente[i] !== listaretete[randomRecipeFixed].ingrediente[answer])) {
            if (window.innerHeight > 550) {
                if (i <= 8) {
                    document.querySelector('.simple').innerHTML += '<li style="font-family: \'Merienda\', cursive; font-size: 16px; font-weight: bold; color: white;">' + listaretete[randomRecipeFixed].ingrediente[i] + '</li>';
                } else {
                    document.querySelector('.complex').innerHTML += '<li style="font-family: \'Merienda\', cursive; font-size: 16px; font-weight: bold; color: white;">' + listaretete[randomRecipeFixed].ingrediente[i] + '</li>';
                }
            } else if (window.innerHeight <= 550) {
                if (i <= 6) {
                    document.querySelector('.simple').innerHTML += '<li style="font-family: \'Merienda\', cursive; font-size: 16px; font-weight: bold;  color: white;">' + listaretete[randomRecipeFixed].ingrediente[i] + '</li>';
                } else {
                    document.querySelector('.complex').innerHTML += '<li style="font-family: \'Merienda\', cursive; font-size: 16px; font-weight: bold;  color: white;">' + listaretete[randomRecipeFixed].ingrediente[i] + '</li>';
                }
            }
        }
    }
    // Add a random ingredient which is removed from the ingredient list(for) to the button(correct answer)
    //changeButtons(randomRecipeFixed);

    // checkButtonsText(randomRecipeFixed, nrIngrediente);
    changeButtons(randomRecipeFixed);

    randomButton = Math.floor(Math.random() * buttons.length);
    if (listaretete[randomRecipeFixed].ingrediente[answer] === 'Sare' || listaretete[randomRecipeFixed].ingrediente[answer] === 'Piper') {
        document.querySelector(buttons[randomButton]).innerHTML = listaretete[randomRecipeFixed].ingrediente[answer - 2];
    } else {
        document.querySelector(buttons[randomButton]).innerHTML = listaretete[randomRecipeFixed].ingrediente[answer];
    }
}
//WHEN CLICK ON ANSWER FUNCTION(DOESNT MATTER IF IS THE WRONG OR CORRECT ANSWER)


    function nextQuestion(listaretete) {
        if (volumeLocalStorage[0].sf === "on") {
            buttonSound.play();
        }
        for (let i = 0; i < answerButton.length; i++) {
            answerButton[i].disabled = true;
        }
        setTimeout(function () {
            for (let i = 0; i < answerButton.length; i++) {
                answerButton[i].disabled = false;
            }
        }, 1000);
        if (stepSession === 5) {
            document.querySelector('#canvas-container').style.display = 'block';
            document.querySelector('.home').style.display = 'block';
            let totalLocalStorageFinal = JSON.parse(localStorage.getItem('sc_gameSettings'));
            let langLocalStorage = JSON.parse(localStorage.getItem('language'));
            if(langLocalStorage === 'Romanian'){
                // noinspection JSAnnotator
                function getObject() {
                    let jsonhttp = new XMLHttpRequest();
                    jsonhttp.onreadystatechange = function () {
                        if (this.readyState === 4 && this.status === 200) {
                            let x = JSON.parse(this.responseText);
                            let totalretete = x.retete;
                            for (let i = 0; i < 20; i++) {
                                let x = Math.floor(Math.random() * totalretete.length);
                                addData(totalretete[x]);
                                totalretete.splice(x, 1);
                            }
                            console.log(listaretete);
                        }
                    };
                    jsonhttp.open("GET", "/public/retete.json", true);
                    jsonhttp.send();
                }
                getObject();
            }else{
                // noinspection JSAnnotator
                function getObject() {
                    let jsonhttp = new XMLHttpRequest();
                    jsonhttp.onreadystatechange = function () {
                        if (this.readyState === 4 && this.status === 200) {
                            let x = JSON.parse(this.responseText);
                            let totalretete = x.retete;
                            for (let i = 0; i < 20; i++) {
                                let x = Math.floor(Math.random() * totalretete.length);
                                addData(totalretete[x]);
                                totalretete.splice(x, 1);
                            }
                            console.log(listaretete);
                        }
                    };
                    jsonhttp.open("GET", "/recipes.json", true);
                    jsonhttp.send();
                }

                getObject();
            }


            clearInterval(window.t);
            let tutorialStart = {
                "tutorial": 1,
                "totalScore": totalLocalStorageFinal[0].totalScore + sessionScore
            };



            let tutorial = [];
            tutorial.push(tutorialStart);
            localStorage.setItem('sc_gameSettings', JSON.stringify(tutorial));
            let opacityPlayOut = 1;
            let playFadeOut = setInterval(animPlayOut, 10);
            totalLocalStorageFinal = JSON.parse(localStorage.getItem('sc_gameSettings'));
            if(sessionScore >= 20){
                document.querySelector('#canvas-container').style.display = "block";
                var fworks = new Fireworks();
            }

            document.querySelector('#total-score').innerHTML = "" + totalLocalStorageFinal[0].totalScore;
            if (langLocalStorage[0] === "Romanian") {
                if (totalLocalStorageFinal[0].totalScore <= 7) {
                    let rank = {
                        "rank": "Incep"
                    };
                    let ranking = [];
                    ranking.push(rank);
                    localStorage.setItem('rank', JSON.stringify(ranking));
                    let rankLocalStorage = JSON.parse(localStorage.getItem('rank'));
                    document.querySelector('#rank-text').innerHTML = rankLocalStorage[0].rank;
                } else if (totalLocalStorageFinal[0].totalScore > 7 && totalLocalStorageFinal[0].totalScore <= 12) {
                    let rank = {
                        "rank": "Intermediar"
                    };
                    let ranking = [];
                    ranking.push(rank);
                    localStorage.setItem('rank', JSON.stringify(ranking));
                    let rankLocalStorage = JSON.parse(localStorage.getItem('rank'));
                    document.querySelector('#rank-text').innerHTML = rankLocalStorage[0].rank;
                } else if (totalLocalStorageFinal[0].totalScore > 12) {
                    let rank = {
                        "rank": "Bucatar"
                    };
                    let ranking = [];
                    ranking.push(rank);
                    localStorage.setItem('rank', JSON.stringify(ranking));
                    let rankLocalStorage = JSON.parse(localStorage.getItem('rank'));
                    document.querySelector('#rank-text').innerHTML = rankLocalStorage[0].rank;
                }
            }else{
                if(totalLocalStorageFinal[0].totalScore <=7){
                    let rank = {
                        "rank": "Beginner"
                    };
                    let ranking = [];
                    ranking.push(rank);
                    localStorage.setItem('rank', JSON.stringify(ranking));
                    let rankLocalStorage = JSON.parse(localStorage.getItem('rank'));
                    document.querySelector('#rank-text').innerHTML = rankLocalStorage[0].rank;
                }else if(totalLocalStorageFinal[0].totalScore > 7 && totalLocalStorageFinal[0].totalScore <=12){
                    let rank = {
                        "rank": "Intermediate"
                    };
                    let ranking = [];
                    ranking.push(rank);
                    localStorage.setItem('rank', JSON.stringify(ranking));
                    let rankLocalStorage = JSON.parse(localStorage.getItem('rank'));
                    document.querySelector('#rank-text').innerHTML = rankLocalStorage[0].rank;
                }else if(totalLocalStorageFinal[0].totalScore > 12){
                    let rank = {
                        "rank": "Chef"
                    };
                    let ranking = [];
                    ranking.push(rank);
                    localStorage.setItem('rank', JSON.stringify(ranking));
                    let rankLocalStorage = JSON.parse(localStorage.getItem('rank'));
                    document.querySelector('#rank-text').innerHTML = rankLocalStorage[0].rank;
                }
            }
            // noinspection JSAnnotator
            function animPlayOut() {
                if (opacityPlayOut <= 0) {
                    playScreen.style.display = "none";
                    document.querySelector('#clock_wrapper').style.display = "none";
                    clearInterval(playFadeOut);
                    finalScreen.style.display = 'block';
                    playAgainButton.disabled = false;
                    let opacityFinal = 0;
                    let finalFade = setInterval(animFinal, 10);

                    // noinspection JSAnnotator
                    function animFinal() {
                        if (opacityFinal >= 1) {
                            clearInterval(finalFade);
                        } else {
                            opacityFinal += 0.1;
                            finalScreen.style.opacity = opacityFinal;
                        }
                    }
                } else {
                    opacityPlayOut -= 0.1;
                    playScreen.style.opacity = opacityPlayOut;
                    document.querySelector('#clock_wrapper').style.opacity = opacityPlayOut;
                }
            }

            document.querySelector('#session-score-text').innerHTML = sessionScore;
            let id = document.querySelector('.user-id').innerHTML;
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState === 4 && this.status === 200) {
                    const sessionScore = document.querySelector('#session-score-text').innerHTML;
                    const user = JSON.parse(this.responseText);
                    console.log(user);
                    console.log(sessionScore);
                    console.log(user.totalScore);
                    fetch('users/' + id, {
                        method: 'put',
                        headers: {'Content-Type': 'application/json'},
                        body: JSON.stringify({
                            'totalScore': user.totalScore + parseInt(sessionScore)
                        })
                    })
                };
            };
            xhttp.open("GET", "users/" + id, true);
            xhttp.send();
                sessionScore = 0;
                stepSession = 0;
        } else {
            stepSession += 1;
            clearInterval(window.t);
            beginTimer(30000);
            //Remove old ingrediends from the ingredients list
            document.querySelector('.simple').innerHTML = "";
            document.querySelector('.complex').innerHTML = "";
            document.querySelector('.nume-reteta').innerHTML = "";

            //Add letiants and recipe with ingrediends -> JUST FOR WHEN CLICK PLAY BUTTON
            randomRecipeFixed = getRandom(listaretete);
            document.querySelector('.nume-reteta').innerHTML = listaretete[randomRecipeFixed].name;
            nrIngrediente = listaretete[randomRecipeFixed].ingrediente.length;
            if (nrIngrediente > 26) {
                nrIngrediente = 26;
            }
            answer = Math.floor(Math.random() * nrIngrediente);

            //Add ingredients to list
            for (let i = 0; i < nrIngrediente; i++) {
                if ((listaretete[randomRecipeFixed].ingrediente[i] !== listaretete[randomRecipeFixed].ingrediente[answer])) {
                    if (i <= 8) {
                        document.querySelector('.simple').innerHTML += '<li style="font-family: \'Merienda\', cursive; font-size: 16px; font-weight: bold;  color: white;">' + listaretete[randomRecipeFixed].ingrediente[i] + '</li>';
                    } else {
                        document.querySelector('.complex').innerHTML += '<li style="font-family: \'Merienda\', cursive; font-size: 16px; font-weight: bold;  color: white;">' + listaretete[randomRecipeFixed].ingrediente[i] + '</li>';
                    }
                }
            }
            changeButtons(randomRecipeFixed);
            // Add a random ingredient which is removed from the ingredient list(for) to the button(correct answer)
            randomButton = Math.floor(Math.random() * buttons.length);
            if (listaretete[randomRecipeFixed].ingrediente[answer] === 'Sare' || listaretete[randomRecipeFixed].ingrediente[answer] === 'Piper') {
                document.querySelector(buttons[randomButton]).innerHTML = listaretete[randomRecipeFixed].ingrediente[answer - 2];
            } else {
                document.querySelector(buttons[randomButton]).innerHTML = listaretete[randomRecipeFixed].ingrediente[answer];
            }
        }
    }
    let totalLocalStorageFinal = JSON.parse(localStorage.getItem('sc_gameSettings'));
    let visited = JSON.parse(localStorage.getItem('visited'));

setTimeout(function(){
    if(!localStorage.getItem("sc_gameSettings")){
        let langLocalStorage = JSON.parse(localStorage.getItem('language'));
        console.log(langLocalStorage[0]);
        if (langLocalStorage[0] === "Romanian") {
            let rank = {
                "rank": "Incep"
            };
            let ranking = [];
            ranking.push(rank);
            localStorage.setItem('rank', JSON.stringify(ranking));
            let rankLocalStorage = JSON.parse(localStorage.getItem('rank'));
            document.querySelector('#rank-text').innerHTML = rankLocalStorage[0].rank;
        }else{
            let rank = {
                "rank":'Beginner'
            };
            let ranking = [];
            ranking.push(rank);
            localStorage.setItem('rank', JSON.stringify(ranking));
            let rankLocalStorage = JSON.parse(localStorage.getItem('rank'));
            document.querySelector('#rank-text').innerHTML = rankLocalStorage[0].rank;
        }
    }else{
        if (langLocalStorage[0] === "Romanian") {
            if (totalLocalStorageFinal[0].totalScore <= 7) {
                let rank = {
                    "rank": "Incep"
                };
                let ranking = [];
                ranking.push(rank);
                localStorage.setItem('rank', JSON.stringify(ranking));
                let rankLocalStorage = JSON.parse(localStorage.getItem('rank'));
                document.querySelector('#rank-text').innerHTML = rankLocalStorage[0].rank;
            } else if (totalLocalStorageFinal[0].totalScore > 7 && totalLocalStorageFinal[0].totalScore <= 12) {
                let rank = {
                    "rank": "Intermediar"
                };
                let ranking = [];
                ranking.push(rank);
                localStorage.setItem('rank', JSON.stringify(ranking));
                let rankLocalStorage = JSON.parse(localStorage.getItem('rank'));
                document.querySelector('#rank-text').innerHTML = rankLocalStorage[0].rank;
            } else if (totalLocalStorageFinal[0].totalScore > 12) {
                let rank = {
                    "rank": "Bucatar"
                };
                let ranking = [];
                ranking.push(rank);
                localStorage.setItem('rank', JSON.stringify(ranking));
                let rankLocalStorage = JSON.parse(localStorage.getItem('rank'));
                document.querySelector('#rank-text').innerHTML = rankLocalStorage[0].rank;
            }
        }else{
            if(totalLocalStorageFinal[0].totalScore <=7){
                let rank = {
                    "rank": "Beginner"
                };
                let ranking = [];
                ranking.push(rank);
                localStorage.setItem('rank', JSON.stringify(ranking));
                let rankLocalStorage = JSON.parse(localStorage.getItem('rank'));
                document.querySelector('#rank-text').innerHTML = rankLocalStorage[0].rank;
            }else if(totalLocalStorageFinal[0].totalScore > 7 && totalLocalStorageFinal[0].totalScore <=12){
                let rank = {
                    "rank": "Intermediate"
                };
                let ranking = [];
                ranking.push(rank);
                localStorage.setItem('rank', JSON.stringify(ranking));
                let rankLocalStorage = JSON.parse(localStorage.getItem('rank'));
                document.querySelector('#rank-text').innerHTML = rankLocalStorage[0].rank;
            }else if(totalLocalStorageFinal[0].totalScore > 12){
                let rank = {
                    "rank": "Chef"
                };
                let ranking = [];
                ranking.push(rank);
                localStorage.setItem('rank', JSON.stringify(ranking));
                let rankLocalStorage = JSON.parse(localStorage.getItem('rank'));
                document.querySelector('#rank-text').innerHTML = rankLocalStorage[0].rank;
            }
        }
    }
}, 800);
// When click on answer buttons
    for (let i = 0; i < answerButton.length; i++) {
        answerButton[i].addEventListener('click', function () {
            if (this.innerHTML === listaretete[randomRecipeFixed].ingrediente[answer]) {
                sessionScore += 5;
            }
            listaretete.splice(randomRecipeFixed, 1);
            nextQuestion(listaretete);
        });
    }

    if (localStorage.getItem('sc_gameSettings') == null) {
        document.querySelector('#total-score').innnerHTML = 0;
    } else {
        document.querySelector('#total-score').innerHTML = totalLocalStorage[0].totalScore;
    }

    playButton.addEventListener('click', function () {
        let opacityWelcome = 1;
        let id = setInterval(frame, 10);

        function frame() {
            if (opacityWelcome <= 0) {
                clearInterval(id);
            } else {
                opacityWelcome = opacityWelcome - 0.1;
                elem.style.opacity = opacityWelcome;
            }
        }

        if (localStorage.getItem('sc_gameSettings') != null) {
            playFunction(listaretete);
        } else {
            /*
                elem.style.display = 'none';
                document.querySelector('#create-profile').style.display = 'block';
                let opacityTutorial = 0;
                let tutorialFade = setInterval(animT, 10);

                function animT() {
                  if (opacityTutorial >= 1) {
                    clearInterval(tutorialFade);
                  } else {
                    opacityTutorial = opacityTutorial + 0.1;
                    document.querySelector('#create-profile').style.opacity = opacityTutorial;
                  }
                } */
            let step = 1;
            let tutorialStart = {
                "tutorial": 1,
                "totalScore": 0
            };
            let tutorial = [];
            tutorial.push(tutorialStart);
            localStorage.setItem('sc_gameSettings', JSON.stringify(tutorial));
            setTimeout(function () {
                elem.style.display = 'none';
                tutorialScreen.style.display = 'block';
                let opacityTutorial = 0;
                let tutorialFade = setInterval(animT, 10);

                function animT() {
                    if (opacityTutorial >= 1) {
                        clearInterval(tutorialFade);
                    } else {
                        opacityTutorial = opacityTutorial + 0.1;
                        tutorialScreen.style.opacity = opacityTutorial;
                    }
                }
            }, 200)
            document.querySelector('.next').addEventListener('click', function () {
                if (step === 1) {
                    let opacityDial = 1;
                    let dialFade = setInterval(animD, 10);
                    document.querySelectorAll('#ingr')[1].classList.remove('blur');
                    document.querySelectorAll('.lista-ingrediente')[1].classList.remove('blur');
                    document.querySelectorAll('.nume-reteta')[1].classList.add('blur');

                    // noinspection JSAnnotator
                    function animD() {
                        if (opacityDial <= 0) {
                            clearInterval(dialFade);
                        } else {
                            opacityDial = opacityDial - 0.1;
                            document.querySelector('.title').style.opacity = opacityDial;
                            document.querySelector('.next').style.opacity = opacityDial;
                        }
                    }

                    let opacityDialIngr = 0;
                    let dialIngrFade = setInterval(animDIngr, 10);

                    // noinspection JSAnnotator
                    function animDIngr() {
                        if (opacityDialIngr >= 1) {
                            clearInterval(dialIngrFade);
                        } else {
                            opacityDialIngr += 0.1;
                            document.querySelector('.ingrediends-dial').style.opacity = opacityDialIngr;
                            document.querySelector('.next').style.opacity = opacityDialIngr;
                        }
                    }

                    step++;
                } else if (step === 2) {

                    let opacityIngrFadeOut = 1;
                    let dialIngrFadeOut = setInterval(animDIngrFadeOut, 10);
                    document.querySelectorAll('#ingr')[1].classList.add('blur');
                    document.querySelectorAll('.lista-ingrediente')[1].classList.add('blur');
                    document.querySelectorAll('#answers')[1].classList.remove('blur');

                    // noinspection JSAnnotator
                    function animDIngrFadeOut() {
                        if (opacityIngrFadeOut <= 0) {
                            clearInterval(dialIngrFadeOut);
                        } else {
                            opacityIngrFadeOut -= 0.1;
                            document.querySelector('.ingrediends-dial').style.opacity = opacityIngrFadeOut;
                            document.querySelector('.next').style.opacity = opacityIngrFadeOut;
                            document.querySelector('#tutorial-screen #question-box').style.border = "none";
                        }
                    }


                    let opacityDialAnsw = 0;
                    let dialAnswFade = setInterval(animDAnsw, 10);
                    document.querySelector('.next').classList.remove('title-pos');
                    document.querySelector('.next').classList.add('answ-pos');

                    // noinspection JSAnnotator
                    function animDAnsw() {
                        if (opacityDialAnsw >= 1) {
                            clearInterval(dialAnswFade);
                        } else {
                            opacityDialAnsw += 0.1;
                            document.querySelector('.answers-dial').style.opacity = opacityDialAnsw;
                            document.querySelector('.next').style.opacity = opacityDialAnsw;
                        }
                    }

                    step++;
                } else if (step === 3) {
                    let opacityAnswFadeOut = 1;
                    let dialAnswFadeOut = setInterval(animDAnswFadeOut, 10);
                    document.querySelectorAll('#ingr')[1].classList.remove('blur');
                    document.querySelectorAll('.lista-ingrediente')[1].classList.remove('blur');
                    document.querySelectorAll('.nume-reteta')[1].classList.remove('blur');
                    document.querySelectorAll('#answers')[1].classList.remove('blur');

                    // noinspection JSAnnotator
                    function animDAnswFadeOut() {
                        if (opacityAnswFadeOut <= 0) {
                            clearInterval(dialAnswFadeOut);
                        } else {
                            opacityAnswFadeOut -= 0.1;
                            document.querySelector('.answers-dial').style.opacity = opacityAnswFadeOut;
                            document.querySelector('.next').style.opacity = opacityAnswFadeOut;
                            document.querySelector('.next').style.display = 'none';
                        }
                    }

                    for (let i = 0; i <= 3; i++) {
                        document.querySelectorAll('#tutorial-screen .answer-tut')[i].disabled = false;
                    }
                    for (let i = 0; i < answerButtonTut.length; i++) {
                        answerButtonTut[i].addEventListener('click', function () {
                            document.querySelector('.alert').style.display = 'flex';

                            let alertOpacity = 0;
                            let alertFade = setInterval(animAlertFade, 10);

                            function animAlertFade() {
                                if (alertOpacity >= 1) {
                                    clearInterval(alertFade);
                                } else {
                                    alertOpacity += 0.1;
                                    document.querySelector('.alert').style.opacity = alertOpacity;
                                }
                            }

                            let langLocalStorage = JSON.parse(localStorage.getItem('language'));
                            if (langLocalStorage[0] === "Romanian") {
                                if (this.innerHTML === "Tomato sauce" || this.innerHTML === "Sos de rosii") {
                                    document.querySelector('.alert-text').innerHTML = 'Felicit&#x103;ri!';
                                    document.querySelector('.alert-button').innerHTML = 'Continu&#x103;';
                                    clearInterval(window.t);
                                } else {
                                    document.querySelector('.alert-text').innerHTML = 'R&#x103;spuns gre&#x15F;it!';
                                    document.querySelector('.alert-button').innerHTML = 'Mai incearc&#x103;';
                                }
                            } else {
                                if (this.innerHTML === "Tomato sauce") {
                                    document.querySelector('.alert-text').innerHTML = 'Congratulation!';
                                    document.querySelector('.alert-button').innerHTML = 'Continue';
                                    clearInterval(window.t);
                                } else {
                                    document.querySelector('.alert-text').innerHTML = 'Wrong answer!';
                                    document.querySelector('.alert-button').innerHTML = 'Try again';
                                }
                            }
                        });
                    }
                }
            });
        }
    })

    document.querySelector('.alert-button').addEventListener('click', function () {
        let alertOpacity = 1;
        let alertFade = setInterval(animAlertFade, 10);

        function animAlertFade() {
            if (alertOpacity <= 0) {
                document.querySelector('.alert').style.display = 'none';
                clearInterval(alertFade);
            } else {
                alertOpacity -= 0.1;
                document.querySelector('.alert').style.opacity = alertOpacity;
            }
        }

        if (document.querySelector('.alert-button').innerHTML === 'Continuă' || document.querySelector('.alert-button').innerHTML === 'Continue') {
            document.querySelector('#tutorial-screen').style.display = 'none';
            playFunction(listaretete);
        }
    });
    playAgainButton.addEventListener('click', function () {
        let opacityFinalOut = 1;
        let finalFadeOut = setInterval(animFinalOut, 10);

        function animFinalOut() {
            if (opacityFinalOut <= 0) {
                finalScreen.style.display = 'none';
                clearInterval(finalFadeOut);
            } else {
                opacityFinalOut -= 0.1;
                finalScreen.style.opacity = opacityFinalOut;
                playAgainButton.disabled = true;
            }
        }

        playFunction(listaretete);
    });

    settingsButton.addEventListener('click', settings);

    function settings() {
        if (volumeLocalStorage[0].sf === "on") {
            buttonSound.play();
        }
        let opacityWelcome = 1;
        let id = setInterval(frame, 10);

        function frame() {
            if (opacityWelcome <= 0) {
                elem.style.display = 'none';
                clearInterval(id);
                document.querySelector('#settings-screen').style.display = "block";
                let opacitySettings = 0;
                let settingsFade = setInterval(animFadeSet, 10);

                // noinspection JSAnnotator
                function animFadeSet() {
                    if (opacitySettings >= 1) {
                        clearInterval(settingsFade);
                    } else {
                        opacitySettings += 0.1;
                        document.querySelector('#settings-screen').style.opacity = opacitySettings;
                    }
                }
            } else {
                opacityWelcome -= 0.1;
                elem.style.opacity = opacityWelcome;
            }
        }
    }

    document.querySelector('#volume').addEventListener('click', musicVolume);

    function musicVolume() {
        let volumeLocalStorage = JSON.parse(localStorage.getItem('sc_gamevolume'));
        if (volumeLocalStorage[0].sf === "on") {
            buttonSound.play();
        }
        if (document.querySelector('.on-off').innerHTML === 'on') {
            titleSound.pause();
            document.querySelector('.on-off').innerHTML = 'off';
            let musicVol = {
                "music": document.querySelector('.on-off').innerHTML,
                "sf": document.querySelector('.on-off-sf').innerHTML,
                "vibration": document.querySelector('.on-off-vib').innerHTML
            };
            let volume = [];
            volume.push(musicVol);
            localStorage.setItem('sc_gamevolume', JSON.stringify(volume));
        } else {
            titleSound.play();
            document.querySelector('#volume').style.background = "rgba(242, 219, 140,0.4)";
            document.querySelector('.on-off').innerHTML = 'on';
            let musicVol = {
                "music": document.querySelector('.on-off').innerHTML,
                "sf": document.querySelector('.on-off-sf').innerHTML,
                "vibration": document.querySelector('.on-off-vib').innerHTML
            };
            let volume = [];
            volume.push(musicVol);
            localStorage.setItem('sc_gamevolume', JSON.stringify(volume));
        }
    }

    window.addEventListener('focus', function () {
        let volumeLocalStorage = JSON.parse(localStorage.getItem('sc_gamevolume'));
        if (volumeLocalStorage[0].music === 'on') {
            titleSound.play();
        }else{
            titleSound.pause();
        }
    });
if (performance.navigation.type === 1) {
    if (volumeLocalStorage[0].music === 'on') {
        titleSound.play();
    }else{
        titleSound.pause();
    }} else {
    if (volumeLocalStorage[0].music === 'on') {
        titleSound.play();
    }else{
        titleSound.pause();
    }}
    document.querySelector('#volume-sf').addEventListener('click', sfVolume);

    function sfVolume() {
        if (document.querySelector('.on-off-sf').innerHTML === 'on') {
            buttonSound.pause();
            document.querySelector('.on-off-sf').innerHTML = 'off';
            let musicVol = {
                "music": document.querySelector('.on-off').innerHTML,
                "sf": document.querySelector('.on-off-sf').innerHTML,
                "vibration": document.querySelector('.on-off-vib').innerHTML
            };
            let volume = [];
            volume.push(musicVol);
            localStorage.setItem('sc_gamevolume', JSON.stringify(volume));
            let volumeLocalStorage = JSON.parse(localStorage.getItem('sc_gamevolume'));
            if (volumeLocalStorage[0].sf === 'off') {
                document.querySelector('.volume-icon-sf').innerHTML = 'volume_off';
            }
        } else {
            buttonSound.play();
            document.querySelector('.on-off-sf').innerHTML = 'on';
            volumeLocalStorage = JSON.parse(localStorage.getItem('sc_gamevolume'));
            let musicVol = {
                "music": document.querySelector('.on-off').innerHTML,
                "sf": document.querySelector('.on-off-sf').innerHTML,
                "vibration": document.querySelector('.on-off-vib').innerHTML


            };
            let volume = [];
            volume.push(musicVol);
            localStorage.setItem('sc_gamevolume', JSON.stringify(volume));
            volumeLocalStorage = JSON.parse(localStorage.getItem('sc_gamevolume'));
            if (volumeLocalStorage[0].sf === 'on') {
                document.querySelector('.volume-icon-sf').innerHTML = 'volume_up';
            }
        }
    }


    vibrationToggler.addEventListener('click', function () {
        let volumeLocalStorage = JSON.parse(localStorage.getItem('sc_gamevolume'));
        if (volumeLocalStorage[0].sf === "on") {
            buttonSound.play();
        }
        if (document.querySelector('.on-off-vib').innerHTML === 'on') {
            document.querySelector('.on-off-vib').innerHTML = 'off';
            let musicVol = {
                "music": document.querySelector('.on-off').innerHTML,
                "sf": document.querySelector('.on-off-sf').innerHTML,
                'vibration': document.querySelector('.on-off-vib').innerHTML
            };
            let volume = [];
            volume.push(musicVol);
            localStorage.setItem('sc_gamevolume', JSON.stringify(volume));
        } else {
            document.querySelector('.on-off-vib').innerHTML = 'on';
            var musicVol = {
                "music": document.querySelector('.on-off').innerHTML,
                "sf": document.querySelector('.on-off-sf').innerHTML,
                'vibration': document.querySelector('.on-off-vib').innerHTML

            };
            let volume = [];
            volume.push(musicVol);
            localStorage.setItem('sc_gamevolume', JSON.stringify(volume));
            volumeLocalStorage = JSON.parse(localStorage.getItem('sc_gamevolume'));
            if (volumeLocalStorage[0].vibration === 'on') {
                navigator.vibrate(500);
            }
        }
    })

    document.querySelector('.back-btn').addEventListener('click', function () {
        if (volumeLocalStorage[0].sf === "on") {
            buttonSound.play();
        }
        let opacityWelcome = 1;
        let id = setInterval(frame, 10);

        function frame() {
            if (opacityWelcome <= 0) {
                document.querySelector('#settings-screen').style.display = 'none';
                clearInterval(id);
                elem.style.display = "block";
                let opacitySettings = 0;
                let settingsFade = setInterval(animFadeSet, 10);

                // noinspection JSAnnotator
                function animFadeSet() {
                    if (opacitySettings >= 1) {
                        clearInterval(settingsFade);
                    } else {
                        opacitySettings += 0.1;
                        elem.style.opacity = opacitySettings;
                    }
                }
            } else {
                opacityWelcome -= 0.1;
                document.querySelector('#settings-screen').style.opacity = opacityWelcome;
            }
        }
    });



document.querySelector('.back-btn-rank').addEventListener('click', function () {
    if (volumeLocalStorage[0].sf === "on") {
        buttonSound.play();
    }
    let opacityWelcome = 1;
    let id = setInterval(frame, 10);

    function frame() {
        if (opacityWelcome <= 0) {
            document.querySelector('.back-btn-rank').style.display= 'none';
            document.querySelector('#rank-screen').style.display = 'none';
            clearInterval(id);
            elem.style.display = "block";
            let opacitySettings = 0;
            let settingsFade = setInterval(animFadeSet, 10);

            // noinspection JSAnnotator
            function animFadeSet() {
                if (opacitySettings >= 1) {
                    clearInterval(settingsFade);
                } else {
                    opacitySettings += 0.1;
                    elem.style.opacity = opacitySettings;
                }
            }
        } else {
            opacityWelcome -= 0.1;
            document.querySelector('#rank-screen').style.opacity = opacityWelcome;
        }
    }
});






// document.querySelector('.buy-cookies').addEventListener('click',buyCurrency);
//
// function buyCurrency(){
//   document.querySelector('.alert-buy').style.display = "flex";
//   let buy = 0;
//   let id = setInterval(frame, 10);
//   function frame() {
//     if (buy >= 1) {
//       clearInterval(id);
//     } else {
//       buy += 0.1;
//       document.querySelector('.alert-buy').style.opacity = buy;
//     }
//   }
// }
//
// document.querySelector('.close-buy').addEventListener('click',closeBuy);
//
// function closeBuy(){
//   let buy = 1;
//   let id = setInterval(frame, 10);
//   function frame() {
//     if (buy <= 0) {
//       clearInterval(id);
//       document.querySelector('.alert-buy').style.display= "none";
//     } else {
//       buy -= 0.1;
//       document.querySelector('.alert-buy').style.opacity = buy;
//     }
//   }
// }
//
// document.querySelector('#buy-treasure').addEventListener('click',buyTreasure);
//
// function buyTreasure(){
//   let moneyLocalStorage = JSON.parse(localStorage.getItem('money'));
//   let money = [moneyLocalStorage[0] + 250];
//   localStorage.setItem('money', JSON.stringify(money));
//   let moneyLocalStorage = JSON.parse(localStorage.getItem('money'));
//   document.querySelector('#play-screen #vault').innerHTML =document.querySelector('#vault').innerHTML =  moneyLocalStorage[0];
//   let buy = 1;
//   let id = setInterval(frame, 10);
//   function frame() {
//     if (buy <= 0) {
//       clearInterval(id);
//       document.querySelector('.alert-buy').style.display= "none";
//     } else {
//       buy -= 0.1;
//       document.querySelector('.alert-buy').style.opacity = buy;
//     }
//   }
// }
//
//
// document.querySelector('#buy-bag').addEventListener('click',buyBag);
//
// function buyBag(){
//   let moneyLocalStorage = JSON.parse(localStorage.getItem('money'));
//   let money = [moneyLocalStorage[0] + 100];
//   localStorage.setItem('money', JSON.stringify(money));
//   let moneyLocalStorage = JSON.parse(localStorage.getItem('money'));
//   document.querySelector('#play-screen #vault').innerHTML =document.querySelector('#vault').innerHTML =  moneyLocalStorage[0];
//   let buy = 1;
//   let id = setInterval(frame, 10);
//   function frame() {
//     if (buy <= 0) {
//       clearInterval(id);
//       document.querySelector('.alert-buy').style.display= "none";
//     } else {
//       buy -= 0.1;
//       document.querySelector('.alert-buy').style.opacity = buy;
//     }
//   }
// }
    let gender = "male";
    document.querySelector('.gender').addEventListener('click', function () {
        document.querySelector('.gender-back').style.display = 'block';
        document.querySelector('.gender-next').style.display = 'block';
        document.querySelector('.hair-back').style.display = 'none';
        document.querySelector('.hair-next').style.display = 'none';
        document.querySelector('.suit-back').style.display = 'none';
        document.querySelector('.suit-next').style.display = 'none';
        document.querySelector('.hat-back').style.display = 'none';
        document.querySelector('.hat-next').style.display = 'none';

        document.querySelector('.gender').style.backgroundColor = "#f2db8c";
        document.querySelector('.hairstyle').style.backgroundColor = "#d3c07e";
        document.querySelector('.hat').style.backgroundColor = "#d3c07e";
        document.querySelector('.suit').style.backgroundColor = "#d3c07e";
        document.querySelector('.gender-back').disabled = true;
        document.querySelector('.gender-next').disabled = false;

        document.querySelector('.gender-back').addEventListener('click', function () {
            document.getElementById("male_profile").src = "assets/profile/male.png";
            document.querySelector('#hair').src = "assets/profile/male_hair/hair1_black.png";
            gender = "male";
            document.querySelector('.gender-back').disabled = true;
            document.querySelector('.gender-next').disabled = false;

        });
        document.querySelector('.gender-next').addEventListener('click', function () {
            document.getElementById("male_profile").src = "assets/profile/female.png";
            gender = "female";
            document.querySelector('#hair').src = "assets/profile/female_hair/hair1_black.png";
            document.querySelector('.gender-next').disabled = true;
            document.querySelector('.gender-back').disabled = false;
        });
    });

    document.querySelector('.hairstyle').addEventListener('click', function () {
        document.querySelector('.gender-back').style.display = 'none';
        document.querySelector('.gender-next').style.display = 'none';
        document.querySelector('.hair-back').style.display = 'block';
        document.querySelector('.hair-next').style.display = 'block';
        document.querySelector('.hairstyle').style.backgroundColor = "#f2db8c";
        document.querySelector('.gender').style.backgroundColor = "#d3c07e";
        document.querySelector('.hat').style.backgroundColor = "#d3c07e";
        document.querySelector('.suit').style.backgroundColor = "#d3c07e";
        document.querySelector('.hair-back').disabled = true;
        document.querySelector('.hair-next').disabled = false;

        document.querySelector('.hair-back').addEventListener('click', function () {
            document.querySelector('.hair-back').disabled = true;
            document.querySelector('.hair-next').disabled = false;
            if (gender === 'male') {
                document.querySelector('#hair').src = "assets/profile/male_hair/hair1_black.png";
            } else if (gender === 'female') {
                document.querySelector('#hair').src = "assets/profile/female_hair/hair1_black.png";
            }

        });
        document.querySelector('.hair-next').addEventListener('click', function () {
            document.querySelector('.hair-next').disabled = true;
            document.querySelector('.hair-back').disabled = false;
            if (gender === 'male') {
                document.querySelector('#hair').src = "assets/profile/male_hair/hair1_yellow.png";
            } else if (gender === 'female') {
                document.querySelector('#hair').src = "assets/profile/female_hair/hair1_yellow.png";
            }

        });
    });


    document.querySelector('.hat').addEventListener('click', function () {
        document.querySelector('.gender-back').style.display = 'none';
        document.querySelector('.gender-next').style.display = 'none';
        document.querySelector('.hair-back').style.display = 'none';
        document.querySelector('.hair-next').style.display = 'none';
        document.querySelector('.suit-back').style.display = 'none';
        document.querySelector('.suit-next').style.display = 'none';
        document.querySelector('.hat-back').style.display = 'block';
        document.querySelector('.hat-next').style.display = 'block';
        document.querySelector('.hairstyle').style.backgroundColor = "#d3c07e";
        document.querySelector('.gender').style.backgroundColor = "#d3c07e";
        document.querySelector('.hat').style.backgroundColor = "#f2db8c";
        document.querySelector('.suit').style.backgroundColor = "#d3c07e";

        document.querySelector('.hat-back').addEventListener('click', function () {
            document.querySelector('.hair-back').disabled = true;
            document.querySelector('.hair-next').disabled = false;
            document.querySelector('#hat').src = "assets/profile/hat/hat_1.png";

        });
        document.querySelector('.hat-next').addEventListener('click', function () {
            document.querySelector('.hair-next').disabled = true;
            document.querySelector('.hair-back').disabled = false;
            document.querySelector('#hat').src = "assets/profile/hat/hat_2.png";
        });
    });


    document.querySelector('.suit').addEventListener('click', function () {
        document.querySelector('.gender-back').style.display = 'none';
        document.querySelector('.gender-next').style.display = 'none';
        document.querySelector('.hair-back').style.display = 'none';
        document.querySelector('.hair-next').style.display = 'none';
        document.querySelector('.suit-back').style.display = 'block';
        document.querySelector('.suit-next').style.display = 'block';
        document.querySelector('.hat-back').style.display = 'none';
        document.querySelector('.hat-next').style.display = 'none';
        document.querySelector('.hairstyle').style.backgroundColor = "#d3c07e";
        document.querySelector('.gender').style.backgroundColor = "#d3c07e";
        document.querySelector('.hat').style.backgroundColor = "#d3c07e";
        document.querySelector('.suit').style.backgroundColor = "#f2db8c";

        document.querySelector('.suit-back').addEventListener('click', function () {
            document.querySelector('.suit-back').disabled = true;
            document.querySelector('.suit-next').disabled = false;
            document.querySelector('#suit').src = "assets/profile/suits/black_suite.png";

        });
        document.querySelector('.suit-next').addEventListener('click', function () {
            document.querySelector('.suit-next').disabled = true;
            document.querySelector('.suit-back').disabled = false;
            document.querySelector('#suit').src = "assets/profile/suits/red_suite.png";
        });
    });

    document.querySelector('#language').addEventListener('click', function () {
        let langLocalStorage = JSON.parse(localStorage.getItem('language'));
        listaretete = [];
        if(!localStorage.getItem("sc_gameSettings")){
            if (langLocalStorage[0] === 'Romanian') {
                let lang = ['English'];
                localStorage.setItem('language', JSON.stringify(lang));
                en();
                    let rank = {
                        "rank": "Beginner"
                    };
                    let ranking = [];
                    ranking.push(rank);
                    localStorage.setItem('rank', JSON.stringify(ranking));
                    let rankLocalStorage = JSON.parse(localStorage.getItem('rank'));
                    document.querySelector('#rank-text').innerHTML = rankLocalStorage[0].rank;
                }else{
                let lang = ['Romanian'];
                localStorage.setItem('language', JSON.stringify(lang));
                ro();
                let rank = {
                    "rank": "Incep"
                };
                let ranking = [];
                ranking.push(rank);
                localStorage.setItem('rank', JSON.stringify(ranking));
                let rankLocalStorage = JSON.parse(localStorage.getItem('rank'));
                document.querySelector('#rank-text').innerHTML = rankLocalStorage[0].rank;
            }
        }else{
            if (langLocalStorage[0] === 'Romanian') {
                let totalLocalStorageFinal = JSON.parse(localStorage.getItem('sc_gameSettings'));
                let lang = ['English'];
                localStorage.setItem('language', JSON.stringify(lang));
                en();
                if(totalLocalStorageFinal[0].totalScore <=7){
                    let rank = {
                        "rank": "Beginner"
                    };
                    let ranking = [];
                    ranking.push(rank);
                    localStorage.setItem('rank', JSON.stringify(ranking));
                    let rankLocalStorage = JSON.parse(localStorage.getItem('rank'));
                    document.querySelector('#rank-text').innerHTML = rankLocalStorage[0].rank;
                }else if(totalLocalStorageFinal[0].totalScore > 7 && totalLocalStorageFinal[0].totalScore <=12){
                    let rank = {
                        "rank": "Intermediate"
                    };
                    let ranking = [];
                    ranking.push(rank);
                    localStorage.setItem('rank', JSON.stringify(ranking));
                    let rankLocalStorage = JSON.parse(localStorage.getItem('rank'));
                    document.querySelector('#rank-text').innerHTML = rankLocalStorage[0].rank;
                }else if(totalLocalStorageFinal[0].totalScore > 12){
                    let rank = {
                        "rank": "Chef"
                    };
                    let ranking = [];
                    ranking.push(rank);
                    localStorage.setItem('rank', JSON.stringify(ranking));
                    let rankLocalStorage = JSON.parse(localStorage.getItem('rank'));
                    document.querySelector('#rank-text').innerHTML = rankLocalStorage[0].rank;
                }
            } else {
                let totalLocalStorageFinal = JSON.parse(localStorage.getItem('sc_gameSettings'));
                let lang = ['Romanian'];
                localStorage.setItem('language', JSON.stringify(lang));
                ro();
                if(totalLocalStorageFinal[0].totalScore <=7){
                    let rank = {
                        "rank": "Incep"
                    };
                    let ranking = [];
                    ranking.push(rank);
                    localStorage.setItem('rank', JSON.stringify(ranking));
                    let rankLocalStorage = JSON.parse(localStorage.getItem('rank'));
                    document.querySelector('#rank-text').innerHTML = rankLocalStorage[0].rank;
                }else if(totalLocalStorageFinal[0].totalScore > 7 && totalLocalStorageFinal[0].totalScore <=12){
                    let rank = {
                        "rank": "Intermediar"
                    };
                    let ranking = [];
                    ranking.push(rank);
                    localStorage.setItem('rank', JSON.stringify(ranking));
                    let rankLocalStorage = JSON.parse(localStorage.getItem('rank'));
                    document.querySelector('#rank-text').innerHTML = rankLocalStorage[0].rank;
                }else if(totalLocalStorageFinal[0].totalScore > 12){
                    let rank = {
                        "rank": "Bucatar"
                    };
                    let ranking = [];
                    ranking.push(rank);
                    localStorage.setItem('rank', JSON.stringify(ranking));
                    let rankLocalStorage = JSON.parse(localStorage.getItem('rank'));
                    document.querySelector('#rank-text').innerHTML = rankLocalStorage[0].rank;
                }
            }
        }
    });

    document.querySelector('.achiv-btn').addEventListener('click',function(){
        if (volumeLocalStorage[0].sf === "on") {
            buttonSound.play();
        }
        let opacityWelcome = 1;
        let id = setInterval(frame, 10);

        function frame() {
            if (opacityWelcome <= 0) {
                clearInterval(id);
                document.querySelector('#welcome-screen').style.display = 'none';
                document.querySelector('#rank-screen').style.display = 'block';
                document.querySelector('.back-btn-rank').style.display = 'block';
                let opacityRank = 0;
                let animRank = setInterval(rank, 10);
                // noinspection JSAnnotator
                function rank(){
                    if(opacityRank >= 1){
                        clearInterval(animRank);
                    }else{
                        opacityRank += 0.1;
                        document.querySelector('#rank-screen').style.opacity = opacityRank;
                    }
                }
            } else {
                opacityWelcome -= 0.1;
                document.querySelector('#welcome-screen').style.opacity = opacityWelcome;
            }
        }
    });
    document.querySelector('.home').addEventListener('click',function(){
        if (volumeLocalStorage[0].sf === "on") {
            buttonSound.play();
        }
        document.querySelector('#canvas-container').style.display = 'none';
        let opacityWelcome = 1;
        let id = setInterval(frame, 10);

        function frame() {
            if (opacityWelcome <= 0) {
                document.querySelector('.home').style.display= 'none';
                document.querySelector('#final-screen').style.display = 'none';
                clearInterval(id);
                elem.style.display = "block";
                let opacitySettings = 0;
                let settingsFade = setInterval(animFadeSet, 10);

                // noinspection JSAnnotator
                function animFadeSet() {
                    if (opacitySettings >= 1) {
                        clearInterval(settingsFade);
                    } else {
                        opacitySettings += 0.1;
                        elem.style.opacity = opacitySettings;
                    }
                }
            } else {
                opacityWelcome -= 0.1;
                document.querySelector('#final-screen').style.opacity = opacityWelcome;
            }
        }
    });

document.querySelector('.buy-icon').addEventListener('click',function(){
    document.querySelector('.buy-alert-error').classList.remove('alert-err-animation-later');
    document.querySelector('#alert').classList.remove('err-animation-later');
    document.querySelector('.buy-alert-error').style.display = 'flex'
    document.querySelector('.buy-alert-error').classList.add('alert-err-animation');
    document.querySelector('#alert').classList.add('err-animation');
});

document.querySelector('.later').addEventListener('click',function(){
    document.querySelector('.buy-alert-error').classList.add('alert-err-animation-later');
    document.querySelector('#alert').classList.add('err-animation-later');
    document.querySelector('.buy-alert-error').classList.remove('alert-err-animation');
    document.querySelector('#alert').classList.remove('err-animation');
    setTimeout(function(){
        document.querySelector('.buy-alert-error').style.display = 'none';
    },400);

});