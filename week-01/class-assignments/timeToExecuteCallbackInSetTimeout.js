// Calculate the time it takes between a setTimeout call and the inner function actually running

const startTime = Date.now();
const DELAY = 2000;
setTimeout(() => {
  const endTime = Date.now();
  console.log(
    `Time taken to actually run inner function inside the setTimeout with a delay of ${DELAY} = ${
      (endTime - startTime) / 1000
    }`
  );
}, DELAY);
