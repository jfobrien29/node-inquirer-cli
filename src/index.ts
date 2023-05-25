#!/usr/bin/env node

import inquirer from 'inquirer';
import { welcome } from './utils/welcome.js';
import { getRandomGreeting } from './utils/random.js';

async function main() {
  const { name } = await inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: "What's your name?",
    },
  ]);

  console.log(`${getRandomGreeting()}, ${name}!`);
}

// For fun, can remove for the real thing!
await welcome();

// The main loop
await main();
