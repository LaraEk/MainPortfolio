$(document).ready(function() {
    console.log("script has begun");

var portfolioitems = [
    {
        name: wordguess,
        assigpic: 'assets/images/portpics/wordguessportpic.png',
        assigname: "Tolkien Word Guess Game",
        assigdescrip: "abcd",
        assigimproves: "improvements I intend to make",
        assiglink: "https://laraek.github.io/Hangman-Game/",
    }, {
        name: pokemonrpg,
        assigpic: 'assets/images/portpics/eevee.png',
        assigname: "Pokemon RPG Game",
        assigdescrip: "abcd",
        assigimproves: "improvements I intend to make",
        assiglink: "https://laraek.github.io/Assignment-Four/",
    }, {
        name: tolkientrivia,
        assigpic: 'assets/images/portpics/tolkienportpic.jpg',
        assigname: "abc",
        assigdescrip: "abcd",
        assigimproves: "improvements I intend to make",
        assiglink: "https://laraek.github.io/TriviaGame/",
    }, {
        name: cloudyapi,
        assigpic: 'assets/images/portpics/cloudsportpic.jpg',
        assigname: "abc",
        assigdescrip: "abcd",
        assigimproves: "improvements I intend to make",
        assiglink: "https://laraek.github.io/Clouds-API",
    }, {
        name: trainscheduler,
        assigpic: 'assets/images/portpic/trainportpic.jpg',
        assigname: "abc",
        assigdescrip: "abcd",
        assigimproves: "improvements I intend to make",
        assiglink: "https://laraek.github.io/Week-7",
    }
];

});

$("#portfoliothings .portpic").on("click", function() {
//        clear it first 
        $("#portpicholder").append(this);

        for (i = 0; i < portfolioitems.length; i++) { 
            console.log(i);
        }
        // var assignment = 
        // for (i = 0; i < portfolioitems.length; i++) { 




    //     $("#portpicholder").attr("src", portfolioitems.assigpic);
    // $("#portnameholder").text(portfolioitems.assigname);
    // $("#portdescripholder").text(portfolioitems.assigdescrip);
    // $("#portnameholder").text(portfolioitems.assigname);
    // $("#portnameholder").text(portfolioitems.assigname);

  });