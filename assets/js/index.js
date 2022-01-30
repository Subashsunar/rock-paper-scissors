var letterArray = ['R', 'P', 'S'];
var userInput = prompt("Enter R, P, or S:");
var randomNumber = rand(3);
var letter = letterArray[randomNumber];

userInput = userInput.toUpperCase();

function rand(max) {
    return Math.floor(Math.random() * max);
}

var computerChoosen = letter;
console.log(`${computerChoosen}`);


if (userInput === computerChoosen) {
    console.log(`Game is draw!`);
} else if (userInput === 'R' && computerChoosen === 'S' || userInput === 'S' && computerChoosen === 'P' || userInput === 'P' && computerChoosen === 'R') {
    console.log(`You won the game!!!`);
} else {
    console.log(`Computer won the game!!!!`);
}