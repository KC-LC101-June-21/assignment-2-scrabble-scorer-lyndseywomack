// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
   let answer = input.question("Let's play some scrabble! Enter a word:")
  return answer;
};

let simpleScore = function(word){
  word = word.toUpperCase()
  score = word.length;
  return score;
}

let vowelBonusScore = function(word){
  word = word.toUpperCase();
  let numberOfVowels = 0;
  let numberOfConst = 0;
  let vowelArray = ['A', 'E', 'I', 'O', 'U'];
  for (let i=0; i<word.length; i++){
    if (vowelArray.includes(word[i])){
    numberOfVowels += 1
    }
  } 
  numberOfConst = word.length - numberOfVowels;
  let score = numberOfVowels*3+numberOfConst;
  return score;
};

let scrabbleScore = function(word){
  word = word.toLowerCase();
  let wordScore = 0;
  for (let i=0; i<word.length; i++){
    for(letter in newPointStructure){
    if (letter === word[i]){
      wordScore += (newPointStructure[letter])
      }
    }
  }
  return wordScore;
}

const oldScoreMethod = {
  name: "Old Scrabble Score",
  description: "The traditional scoring algorithm.",
  scoringFunction: function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
 }
};
const scrabbleScoreMethod = {
  name: "Scrabble",
  description : "Uses Scrabble point system",
  scoringFunction: function(word){
  word = word.toLowerCase();
  let wordScore = 0;
  for (let i=0; i<word.length; i++){
    for(letter in newPointStructure){
    if (letter === word[i]){
      wordScore += Number(newPointStructure[letter])
      }
    }
  }
  return (wordScore);
}
};

const simpleScoreMethod = {
  name: "Simple Score",
  description: "Each letter is worth 1 point.",
  scoringFunction: function(word){
  word = word.toUpperCase()
  score = word.length;
  return score;
}
};

const vowelBonusMethod = {
  name: "Vowel Bonus Score",
  description: "Vowels are 3 pts, consonants are 1 pt.",
  scoringFunction: function(word){
  word = word.toUpperCase();
  let numberOfVowels = 0;
  let numberOfConst = 0;
  let vowelArray = ['A', 'E', 'I', 'O', 'U'];
  for (let i=0; i<word.length; i++){
    if (vowelArray.includes(word[i])){
    numberOfVowels += 1
    }
  } 
  numberOfConst = word.length - numberOfVowels;
  let score = numberOfVowels*3+numberOfConst;
  return score;
}
};

let newPointStructure = transform(oldPointStructure);


const scoringAlgorithms = [simpleScoreMethod, vowelBonusMethod, scrabbleScoreMethod];

function scorerPrompt(word) {
  let userNumber = input.question("Which scoring algorithm you would like to use?\n\n 0- Simple: One point per character\n 1 - Vowel Bonus: Vowels are worth 3 points\n 2 - Scrabble: Uses scrabble point system\n Enter 0, 1, or 2: ");{
    if (userNumber === "0"){
    console.log("Score for '" + word + "': " + scoringAlgorithms[0].scoringFunction(word));
  } else if (userNumber === "1"){
    console.log("Score for '" + word + "': " + scoringAlgorithms[1].scoringFunction(word));
  } else if (userNumber === "2"){
    console.log("Score for '" + word + "': " + scoringAlgorithms[2].scoringFunction(word));
    } 
  }
};

function transform(object){
  let newObj = {}
  for(key in object){
    for (let i=0;i<object[key].length; i++){
    let newVar = object[key][i]
    newObj[newVar.toLowerCase()] = Number(key);
    }
  }
  return newObj;
}

function runProgram() {
   scorerPrompt(initialPrompt());
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};

