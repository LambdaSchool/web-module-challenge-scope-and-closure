// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 * 
 * counter1 has a function within a function, while counter2 is just a regular function.
 * 
 * 2. Which of the two uses a closure? How can you tell?
 * 
 * counter1 uses closure because the inner function is returned and uses a vairable in the outer function.
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 *
 * counter1 is prefered when you want to keep the counter variable private.
 * 
 * counter2 is prefered when you want to prevent over-consumption of memory.
 * 
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that returns a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(){
  let score = Math.round(Math.random() * 2);
  return score; 
};

// console.log(inning());


/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

function finalScore(callback, num){
  let score1 = 0;
  let score2 = 0;
  game = {};
  for(let i = 0; i < num; i++){
      score1 = score1 + callback();
      score2 = score2 + callback();
    }
    return {"Home": score1, "Away": score2};
  }


// console.log(finalScore(inning, 9))

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 
(1) Callback function `getInningScore`
(2) Callback function `inning`
(3) A number of innings
and returns the score at each pont in the game, like so:
1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam
Final Score: awayTeam - homeTeam */

var awayTeam = 0;
var homeTeam = 0;

function getInningScore(callback){
  awayTeam = awayTeam + callback();
  homeTeam = homeTeam + callback();
  return `${awayTeam} - ${homeTeam}`
}



function scoreboard(callback1, callback2, numInnings) {
  for(let i = 0; i > numInnings; i++){
    let score = callback2(callback1);
    if(i = 0){
      console.log(`1st inning: ${score}`)
    } else if(i = 1){
      console.log(`2nd inning: ${score}`)
    } else if(i = 2){
      console.log(`3rd inning: ${score}`)
    } else if(i = 3){
      console.log(`4th inning: ${score}`)
    } else if(i = 4){
      console.log(`5 inning: ${score}`)
    } else if(i = 5){
      console.log(`6th inning: ${score}`)
    } else if(i = 6){
      console.log(`7th inning: ${score}`)
    } else if(i = 7){
      console.log(`8th inning: ${score}`)
    } else if(i = 8){
      console.log(`9th inning: ${score}`)
    }
    console.log(`Final Score: ${score}`)
  }
};

console.log(scoreboard(inning, getInningScore, 9));