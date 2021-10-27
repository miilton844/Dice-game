(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){

const {randomCubeResults} = require('./model/functions')
const results = randomCubeResults();


document.getElementsByClassName('img1')[0].src = "./images/" + results.img1Source;
document.getElementsByClassName('img2')[0].src = "./images/" + results.img2Source;

if (results.randomNumber1 > results.randomNumber2) {
    document.getElementsByClassName('winner')[0].innerHTML = 'Player 1 wins!';
}
else if (results.randomNumber2 > results.randomNumber1) {
    document.getElementsByClassName('winner')[0].innerHTML = 'Player 2 wins!';
}
else {
    document.getElementsByClassName('winner')[0].innerHTML = 'Draw!';
}








},{"./model/functions":2}],2:[function(require,module,exports){
const randomCubeResults = () => {
    let randomNumber1 = Math.floor(Math.random() * 6) + 1;
    let randomNumber2 = Math.floor(Math.random() * 6) + 1;
    let img1Source = choosingCube(randomNumber1);
    let img2Source = choosingCube(randomNumber2);
    return {
        img1Source: img1Source,
        img2Source: img2Source,
        randomNumber1:randomNumber1,
        randomNumber2:randomNumber2
    }
}

const choosingCube = (randomNumber) => {
    let imgSource
    switch (randomNumber) {
        case 1:
            imgSource = 'dice1.png';
            break;
        case 2:
            imgSource = 'dice2.png';
            break;
        case 3:
            imgSource = 'dice3.png';
            break;
        case 4:
            imgSource = 'dice4.png';
            break;
        case 5:
            imgSource = 'dice5.png';
            break;
        case 6:
            imgSource = 'dice6.png';
            break;
    }
    return imgSource
}

module.exports =  { randomCubeResults }
},{}]},{},[1]);
