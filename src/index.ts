#!/usr/bin/env node

import inquirer from 'inquirer';

const CORRECT_GUESS = '🟩';
const CORRECT_BUT_WRONG_POSITION = '🟨';
const WRONG_GUESS = '⬜';
const WORD_LENGTH = 5;

async function main() {
  // pick a random 5 letter word (maybe set it while testing)
  const targetWord = 'ERTHE';
  let turn = 0;

  // game loop
  while (turn < 6) {
    // input
    const { guess } = await inquirer.prompt([
      {
        type: 'input',
        name: 'guess',
        message: "What's your guess?",
      },
    ]);

    // TODO add validation
    // Assume guess is 5 characters long, alphanumeric

    const targetWordLetterMap = targetWord.split('').reduce((acc, letter) => {
      acc.has(letter) ? acc.set(letter, acc.get(letter)! + 1) : acc.set(letter, 1);
      return acc;
    }, new Map<string, number>());

    const greenWhiteOutputArray = (guess as string)
      .toUpperCase()
      .split('')
      .map((letter, index) => {
        if (letter === targetWord[index]) {
          targetWordLetterMap.set(letter, targetWordLetterMap.get(letter)! - 1);
          return CORRECT_GUESS;
        } else {
          return WRONG_GUESS;
        }
      });

    const finalOutput = (guess as string)
      .toUpperCase()
      .split('')
      .map((letter, index) => {
        if (
          letter !== targetWord[index] &&
          targetWord.includes(letter) &&
          targetWordLetterMap.get(letter)! > 0
        ) {
          targetWordLetterMap.set(letter, targetWordLetterMap.get(letter)! - 1);
          return CORRECT_BUT_WRONG_POSITION;
        } else {
          console.log(index, greenWhiteOutputArray, greenWhiteOutputArray[index]);
          return greenWhiteOutputArray[index];
        }
      });

    // print out the guess, print out the output
    console.log(guess);
    console.log(finalOutput.join(''));

    // check if everything is green, if yes exit (you win)
    if (finalOutput.join('') === CORRECT_GUESS.repeat(WORD_LENGTH)) {
      console.log('You win!');
      return;
    }

    // increment turn
    turn++;
  }

  if (turn >= 6) {
    console.log('Game over :(');
  }
}

// The main loop
await main();
