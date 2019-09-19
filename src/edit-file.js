'use strict';

const fs = require('fs');
const promisify = require('./util/promisify');
const modifyData = require('./modifier');
const readFileAsObject = require('./read-file-as-object');

const file = process.argv[2];

const promiseToReadFileAsObject = promisify(readFileAsObject);
const writeFile = promisify(fs.writeFile);

const fileToRead = 'files/data/person.json';
console.log(fileToRead);

const readData = [];
promiseToReadFileAsObject(file)
  .then(data => {
    readData.push(data);
    console.log('async readFile succeeded!');
    console.log(data.toString());
    modifyData(readData);

    return 'Promises are fun';
  })
  .then(() => writeFile(file, JSON.stringify(readData)))
  .catch(err => {
    console.error(err);
  });

const writeData = [];
writeFile(file)
  .then(data => {
    writeData.push(data.toString());

    console.log('async writeFile succeeded!');
    console.log(data.toString());

    return 'Promises aren\'t fun anymore';
  })
  .then(message => {
    console.log('Promise message v2', message);
  })
  .catch(err => {
    console.log(err);
  });

function readDataLength() {
  console.log(readData.length);
}

module.exports = readData;