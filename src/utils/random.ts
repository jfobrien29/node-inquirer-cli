// Pick a random greeting
const GREETINGS = [
  'Hello',
  'Howdy',
  'Hi there',
  "What's up",
  'Greetings',
  'Salutations',
  'Good to see you',
];
export const getRandomGreeting = () => GREETINGS[Math.floor(Math.random() * GREETINGS.length)];

const PERSON_NAMES = ['Partner', 'Man', 'Friend', 'Fellow', 'Commrade'];
export const getRandomPersonName = () =>
  PERSON_NAMES[Math.floor(Math.random() * PERSON_NAMES.length)];
