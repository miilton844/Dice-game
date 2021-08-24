let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;
let img1Source;
let img2Source;

switch (randomNumber1) {
    case 1:
        img1Source = 'dice1.png';
        break;
    case 2:
        img1Source = 'dice2.png';
        break;
    case 3:
        img1Source = 'dice3.png';
        break;
    case 4:
        img1Source = 'dice4.png';
        break;
    case 5:
        img1Source = 'dice5.png';
        break;
    case 6:
        img1Source = 'dice6.png';
        break;
}

switch (randomNumber2) {
    case 1:
        img2Source = 'dice1.png';
        break;
    case 2:
        img2Source = 'dice2.png';
        break;
    case 3:
        img2Source = 'dice3.png';
        break;
    case 4:
        img2Source = 'dice4.png';
        break;
    case 5:
        img2Source = 'dice5.png';
        break;
    case 6:
        img2Source = 'dice6.png';
        break;
}


document.getElementsByClassName('img1')[0].src = "./images/" + img1Source;
document.getElementsByClassName('img2')[0].src = "./images/" + img2Source;

if (randomNumber1 > randomNumber2) {
    document.getElementsByClassName('winner')[0].innerHTML = 'Player 1 wins!';
}
else if (randomNumber2 > randomNumber1) {
    document.getElementsByClassName('winner')[0].innerHTML = 'Player 2 wins!';
}
else {
    document.getElementsByClassName('winner')[0].innerHTML = 'Draw!';
}







