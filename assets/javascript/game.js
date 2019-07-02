$(document).ready(function () {
    var wins = 0;
    var losses = 0;
    var score = 0;

    var randomNum = (Math.floor(Math.random() * 120) + 19);
        //make sure randomNum formula is correct and only goes between 19-120

    var crystal1 = (Math.floor(Math.random() * 12) + 1);
    var crystal2 = (Math.floor(Math.random() * 12) + 1);
    var crystal3 = (Math.floor(Math.random() * 12) + 1);
    var crystal4 = (Math.floor(Math.random() * 12) + 1);

console.log(randomNum);
console.log(crystal1);
console.log(crystal2);
console.log(crystal3);
console.log(crystal4);

// $("#crystal1)").on("click", function() {
//     console.log("Crystal1 has been clicked");
// });

function reset () {
    score = 0

    var crystal1 = (Math.floor(Math.random() * 12) + 1);
    var crystal2 = (Math.floor(Math.random() * 12) + 1);
    var crystal3 = (Math.floor(Math.random() * 12) + 1);
    var crystal4 = (Math.floor(Math.random() * 12) + 1);
    
}

});

    //assign a random number generator (1-12) for each crystal
    //assign button/onclick for each crystal 
    //Make the score appear whenever a crystal is clicked
    //(Score needs to be added everytime a crystal is clicked)
    //use for loop for crystals
    //Make the wins and losses go up based on if they win or lose
    //write if/else statement concerning score = random #
    //if score = randomNum wins++
    //else score > randomNum losses++
    //reset items on the page randomNum, 
        //crystals, total score so game can be played again
    //make score and wins appear on html page    