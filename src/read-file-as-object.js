'use strict';

const fs = require('fs');

function readFileAsObject(filename, callback) {
  fs.readFile(filename, (err, data) => {
    if(err){
      callback(err);
      return;
    }

    try {
      var object = JSON.parse(data);
      callback(null, object);
    }
    catch(parseErr) {
      callback(parseErr);
    }
  });
}

module.exports = readFileAsObject;