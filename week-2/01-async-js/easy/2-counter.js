// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.let counter = 0;

let counter = 0;
function incrementCounter() {
  counter++;
  console.log(counter);
  if (counter < 30) {
    setTimeout(incrementCounter, 1000);
  }
}

incrementCounter();
