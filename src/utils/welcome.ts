import chalkAnimation from 'chalk-animation';

export const sleep = (ms: number = 1000) => new Promise((resolve) => setTimeout(resolve, ms));

export async function welcome() {
  const rainbowTitle = chalkAnimation.rainbow('Welcome to the Watershed Interview CLI');
  await sleep();
  rainbowTitle.stop();
  console.log();
}
