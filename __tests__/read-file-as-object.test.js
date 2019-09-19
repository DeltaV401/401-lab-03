'use strict';

const readFileAsObject = require('../src/read-file-as-object');

describe('read-file module', () => {
  it('reads in the text file and converts its contents to an object', done => {
    const file = `${__dirname}/../files/data/person.json`;

    readFileAsObject(file, (err, object) => {
      if (err) throw err;

      expect(object).toEqual({'firstName':'Tony','lastName':'Stark','hair':{'type':'scruffy','color':'black'},'favoriteFoods':['shawarma','alcohol','coffee grounds'],'married':true,'kids':1});

      done();
    });
  });

  it('calls callback with error for missing file', done => {
    const file = 'missing.txt';

    readFileAsObject(file, (err, object) => {
      expect(err).toBeDefined();
      expect(object).not.toBeDefined();
      
      done();
    });
  });
  it('calls callback with error for invalid file', done => {
    const file = `${__dirname}/../files/data/invalid.json`;

    readFileAsObject(file, (err, object) => {
      expect(err).toBeDefined();
      expect(object).not.toBeDefined();
      
      done();
    });
  });
});