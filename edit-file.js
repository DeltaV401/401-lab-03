'use strict';

console.log(process.argv);

const fs = require('fs');
let readData = [];

fs.readFile('files/data/person.json', (err, data) => {
  if(err) throw err;
  let person = JSON.parse(data);
  console.log(person);

  readData.push(person);

  modifyData('Tony', 'Stark', {'type': 'scruffy', 'color': 'black'}, ['shawarma', 'alcohol', 'coffee grounds'], true, 1);

  fs.writeFile('files/data/person.json', JSON.stringify(readData[0]).trim(), (err) => {
    if (err) throw err;
    console.log('Data written to file');
  });
});

function modifyData(first, last, hair, foods, married, kids) {
  readData[0].firstName = first;
  readData[0].lastName = last;
  readData[0].hair = hair;
  readData[0].favoriteFoods = foods;
  readData[0].married = married;
  readData[0].kids = kids;
}

console.log('Post file call');