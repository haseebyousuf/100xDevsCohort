# Week 2 Assignments

## Easy

### [Q1.Counter use setInterval](01-async-js/easy/1-counter.js)

We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
It should go up as time goes by in intervals of 1 second

```js
let i = 1;
setInterval(() => {
  console.log(i);
  i++;
}, 1000);
```

Here's how the function works:

- Convert the input strings to lowercase, split them into arrays so that we can sort them, and then join them back into strings.
- Compare the two strings and return `true` if they are anagrams of each other, and `false` if they are not.

### [Q2.Counter without setInterval](01-async-js/easy/2-counter.js)

```js
let counter = 0;
function incrementCounter() {
  counter++;
  console.log(counter);
  if (counter < 30) {
    setTimeout(incrementCounter, 1000);
  }
}

incrementCounter();
```

### [Q3.Read contents of a file](01-async-js/easy/3-read-file.js)

Write code to read contents of a file and print it to the console.
You can use the fs library to as a black box, the goal is to understand async tasks.
Try to do an expensive operation below the file read and see how it affects the output.
Make the expensive operation more and more expensive and see how it affects the output.

```js
const fs = require('fs');

console.log('start');
fs.readFile('./fie.txt', 'utf-8', (err, content) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(content);
});

//expensive operation
let sum = 0;
for (let i = 0; i < 1000000000; i++) {
  sum += i;
}
console.log('sum: ', sum);
```

### [Q4.Write contents to a file](01-async-js/easy/4-write-file.js)

Using the fs library again, try to write to the contents of a file.
You can use the fs library to as a black box, the goal is to understand async tasks.

```js
const fs = require('fs');

fs.writeFile('./fie.txt', 'Hello, World from write file!', 'utf8', (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('File has been written');
});
```

## Medium

### [Q1.File Cleaner](01-async-js/medium/1-file-cleaner.js)

Read a file, remove all the extra spaces and write it back to the same file.

For example, if the file input was

```txt
hello     world    my    name   is       raman
```

After the program runs, the output should be

```txt
hello world my name is raman
```

```js
const fs = require('fs');

fs.readFile('file.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  // Remove extra spaces
  const cleanedData = data.replace(/\s+/g, ' ').trim();

  fs.writeFile('file.txt', cleanedData, 'utf8', (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('File has been cleaned');
  });
});
```

### [Q2. Clock](01-async-js/medium/2-clock.js)

Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
clock that shows you the current machine time?

Can you make it so that it updates every second, and shows time in the following formats -

- HH:MM::SS (Eg. 13:45:23)

- HH:MM::SS AM/PM (Eg 01:45:23 PM)

```js
function clock() {
  const date = new Date();
  const hours = date.getHours();
  const ampm = hours >= 12 ? 'PM' : 'AM';

  const displayHours = hours % 12 || 12;

  console.log(
    ` ${displayHours}:${date.getMinutes()}:${date.getSeconds()} ${ampm}`
  );
}

setInterval(clock, 1000);
```

## Hard

### [Q1 Promisify setTimeout.](01-async-js/hard/1-promisify-setTimeout.js)

Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.

```js
function wait(n) {
  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, n * 1000);
  });
  return myPromise;
}
```

### [Q2.Sleep Completely](01-async-js/hard/2-sleep-completely.js)

Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
During this time the thread should not be able to do anything else.
the function should return a promise just like before

```js
function sleep(milliseconds) {
  return new Promise((resolve) => {
    const end = Date.now() + milliseconds;
    while (Date.now() < end) continue;
    resolve();
  });
}
```

### [Q3.Promise All](01-async-js/hard/3-promise-all.js)

Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
Return a promise.all which return the time in milliseconds it takes to complete the entire operation.

```js
function wait1(t) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, t * 1000);
  });
}

function wait2(t) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, t * 1000);
  });
}

function wait3(t) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, t * 1000);
  });
}

async function calculateTime(t1, t2, t3) {
  return new Promise((resolve) => {
    const start = Date.now();
    Promise.all([wait1(t1), wait2(t2), wait3(t3)]).then(() => {
      const end = Date.now();
      resolve(end - start);
    });
  });
}
```

### [Q2.Promise Chain](01-async-js/hard/4-promise-chain.js)

Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
Write a function that sequentially calls all 3 of these functions in order.
Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
Compare it with the results from 3-promise-all.js

```js
function wait1(t) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, t * 1000);
  });
}

function wait2(t) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, t * 1000);
  });
}

function wait3(t) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, t * 1000);
  });
}

async function calculateTime(t1, t2, t3) {
  const start = Date.now();
  return wait1(t1)
    .then(() => wait2(t2))
    .then(() => wait3(t3))
    .then(() => {
      const end = Date.now();
      return end - start;
    });
}
```
