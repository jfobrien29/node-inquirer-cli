#!/usr/bin/env node 
 
import inquirer from "inquirer"; 
import { welcome } from "./utils/welcome.js"; 
 
async function main() {
  const { name } = await inquirer.prompt([ 
    {
      type: 'input',
      name: 'name',
      message: 'What\'s your name?',
    }, 
  ]) 
 
  console.log(`Hello, ${name}!`);
} 

// For fun, can remove
await welcome(); 

// The main loop
await main(); 