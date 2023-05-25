#!/usr/bin/env node

import inquirer from 'inquirer';
import chalkAnimation from 'chalk-animation';

import { getRandomGreeting } from './utils/random.js';
import { generateWelcomePoem } from './utils/openAI.js';
import chalk from 'chalk';

async function main() {
  const { name } = await inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: "What's your name?",
    },
  ]);

  console.log();
  console.log(`${getRandomGreeting()}, ${name}!`);
  console.log();

  const loading = chalkAnimation.neon('Writing a poem to greet you...');
  const haiku = await generateWelcomePoem(name);
  loading.replace('');
  loading.stop();

  console.log();
  console.log(chalk.blueBright(haiku));
  console.log();
}

// The main loop
await main();
