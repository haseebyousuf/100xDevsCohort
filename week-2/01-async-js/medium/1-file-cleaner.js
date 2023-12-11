// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```
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
