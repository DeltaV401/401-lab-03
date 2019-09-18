'use strict';

console.log(process.argv);

const fs = require('fs');
const util = require('util');

const promiseToReadFile = util.promisify(fs.readFile);
const promiseToWriteFile = util.promisify(fs.writeFile);

const fileToRead = 'files/data/person.json';
console.log(fileToRead);

const readData = [];
promiseToReadFile(fileToRead)
  .then(data => {
    readData.push(data.toString());

    console.log('async readFile succeeded!');
    console.log(data.toString());

    readDataLength();

    return 'Promises are fun';
  })
  .then(message => {
    modifyData();
    console.log('Promise message', message);
  })
  .catch(err => {
    console.error(err);
  });

const writeData = [];
promiseToWriteFile(fileToRead)
  .then(data => {
    writeData.push(data.toString());

    console.log('async writeFile succeeded!');
    console.log(data.toString());

    return 'Promises aren\' fun anymore';
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

function modifyData(first, last, hair, foods, married, kids) {
  readData[0].firstName = first;
  readData[0].lastName = last;
  readData[0].hair = hair;
  readData[0].favoriteFoods = foods;
  readData[0].married = married;
  readData[0].kids = kids;
}
