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
 * Counter1 is a closure.
 * 2. Which of the two uses a closure? How can you tell?
 * Counter1 uses the closure, you can tell from the second function nested within the first.
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 * Counter1 would be preferable if you have code that needs to be recalled later on within the nested functions.
 * Counter2 would suffice if the code its being used for is not needed more than once.
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

Write a function called `inning` that generates a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(){
    return Math.round(Math.random() * 2);
  }

console.log(inning());


/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

function finalScore(inning,inningNum){
  let scoreHome = 0;

  for (let i=0; i <= inningNum; i++){
    scoreHome = inning() + scoreHome;
  };

  let scoreAway = 0;

  for(let i=0; i<=inningNum; i++){
    scoreAway = inning() + scoreAway;
  };
  return{"Home": scoreHome, "Away": scoreAway};
}

console.log(finalScore(inning,9));



/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `inning` that you wrote above
(2) A number of innings

and returns the score at each pont in the game, like so:

1st inning: 0 - 2
2nd inning: 1 - 3
3rd inning: 1 - 3
4th inning: 2 - 4
5th inning: 4 - 6
6th inning: 4 - 6
7th inning: 4 - 6
8th inning: 5 - 8
9th inning: 6 - 10

Final Score: 6 - 10 */

function scoreboard(inning,amtOfInnings) {
  let scoreHome = 0;

  for (let i=0; i <= amtOfInnings; i++){
    scoreHome = inning() + scoreHome;
  };//end of home scores

  let scoreAway = 0;

  for(let i=0; i <= amtOfInnings; i++){
    scoreAway = inning() + scoreAway;
  };//end of away scores
  return scoreHome + '-' + scoreAway;
}//End of scoreboard
console.log("1st inning:" + scoreboard(inning,1));
console.log("2nd inning:" + scoreboard(inning,2));
console.log("3rd inning:" + scoreboard(inning,3));
console.log("4th inning:" + scoreboard(inning,4));
console.log("5th inning:" + scoreboard(inning,5));
console.log("6th inning:" + scoreboard(inning,6));
console.log("7th inning:" + scoreboard(inning,7));
console.log("8th inning:" + scoreboard(inning,8));
console.log("9th inning:" + scoreboard(inning,9));
console.log("Final Score:" + scoreboard(inning,10));