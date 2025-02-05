'use strict';

const fs = require('fs');

function copyFile() {
  const args = process.argv.slice(2);
  const pathToCopyFile = args[0];
  const pathToInsertFile = args[1];

  if (pathToCopyFile === pathToInsertFile) {
    return;
  }

  try {
    fs.cpSync(pathToCopyFile, pathToInsertFile);
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('Error: ', err.code);
  }
}

copyFile();
