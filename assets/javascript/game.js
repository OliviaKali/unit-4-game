$(document).ready(function () {

    var wins = 0;
    var losses = 0;
    var score = 0;

    var randomNum = (Math.floor(Math.random() * 102) + 19);

    var crystal1 = (Math.floor(Math.random() * 12) + 1);
    var crystal2 = (Math.floor(Math.random() * 12) + 1);
    var crystal3 = (Math.floor(Math.random() * 12) + 1);
    var crystal4 = (Math.floor(Math.random() * 12) + 1);

    console.log("Random Number: " + randomNum);
    console.log("crystal1 " + crystal1);
    console.log("crystal2 " + crystal2);
    console.log("crystal3: " + crystal3);
    console.log("crystal4: " + crystal4);

    //for ( var i = 0; i <4; i++) {

    $("#randomNumber").text("Random #: " + randomNum);

    $("#crystal-1").on("click", function () {
        score = score + crystal1;
        checker(score)
        $("#totalScore").text(score);
        console.log("now the score is: " + score);
        // $("#score").html(score);
    })

    $("#crystal-2").on("click", function () {
        score = score + crystal2;
        checker(score)
        $("#totalScore").text(score);
        console.log("now the score is: " + score);
    })

    $("#crystal-3").on("click", function () {
        score = score + crystal3;
        checker(score)
        $("#totalScore").text(score);
        console.log("now the score is: " + score);
    })

    $("#crystal-4").on("click", function () {
        score = score + crystal4;
        checker(score)
        $("#totalScore").text(score);
        console.log("now the score is: " + score);
    })


    function checker(number) {
        if (number > randomNum) {
            console.log("You lose!");
            losses++;
            $("#losses-text").text("Losses: " + losses)
            reset();
        }
        if (number === randomNum) {
            console.log("Winner");
            wins++;
            $("#win-text").text("Wins: " + wins)
            reset();
        }
    }

    function reset() {
        score = 0

        randomNum = (Math.floor(Math.random() * 102) + 19);
        crystal1 = (Math.floor(Math.random() * 12) + 1);
        crystal2 = (Math.floor(Math.random() * 12) + 1);
        crystal3 = (Math.floor(Math.random() * 12) + 1);
        crystal4 = (Math.floor(Math.random() * 12) + 1);

        $("#randomNumber").text("Random #: " + randomNum);

        console.log(wins)
        console.log(randomNum)
        console.log("crystal1 " + crystal1);
        console.log("crystal2 " + crystal2);
        console.log("crystal3: " + crystal3);
        console.log("crystal4: " + crystal4);
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