
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







