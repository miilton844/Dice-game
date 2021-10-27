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