//My Variables
//----------------------------------------------------------
//Create an array of words
const StarWarsArray = ["lightsaber", "chewbacca", "ewok", "vader", "jarjar"];

const imgArray = []



//Choose word at random
let randomWord = Math.floor(Math.random() * StarWarsArray.length);

//chose a word
let wordChoosen = StarWarsArray[randomWord];
let imgChoosen = imgArray[randomWord];


//empty array to create underscores to match length of choosen word
let underScores = [];

//empty array to show us letters that have been choosen that is correct
let rightLetter = [];

//empty array to show us letters that have been choosen that is wrong
let wrongLetter = [];

//Manipulate the dom
let manipulateUnderScores = document.getElementsByClassName("wordLength");
let manipulateRightGuess = document.getElementsByClassName("rightGuess");
let manipulateWrongGuess = document.getElementsByClassName("wrongGuess");


// console.log(StarWarsArray[randomWord]);
//Create underscores based on word length

let createUnderScore = function () {
    for (i = 0; i < wordChoosen.length; i++) {
        underScores.push("_");
        manipulateUnderScores[0].innerHTML = underScores.join(" ");
    }
    return underScores;
}

let putImgin = function(){
    document.getElementById('myImg').innerHTML = wordChoosen;
}

console.log(wordChoosen);
console.log(createUnderScore());
//Get users guess
document.onkeypress = function (event) {
    let keyCode = event.keyCode;

    let keyPress = String.fromCharCode(keyCode);
    if (wordChoosen.indexOf(keyPress) > -1) {
        //adds to right Letter array
        rightLetter.push(keyPress);
        underScores[wordChoosen.indexOf(keyPress)] = keyPress;

        for (var i = 0; i < wordChoosen.length; i++) {
            if (wordChoosen.charAt(i) === keyPress) {

                keyPress += 1;
                manipulateUnderScores[0].innerHTML = underScores.join(" ");
                manipulateRightGuess[0].innerHTML = rightLetter;
            }
        }

        // manipulateUnderScores[0].innerHTML = underScores.join(" ");
        // manipulateRightGuess[0].innerHTML = rightLetter;
        //check to see if word matches the guess
        if (underScores.join("") === wordChoosen) {
            alert("YOU WIN!");
            location.reload();
        }
    }
    //pushes wrong letter to wrong guess
    else {
        wrongLetter.push(keyPress);
        manipulateWrongGuess[0].innerHTML = wrongLetter.join(" ");
    }
};
