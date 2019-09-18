'use strict';

const fs = require('fs');

describe('fs.readFile', () => {
  it('calls callback with error for missing file', done => {
    const fileToRead = `files/data/falsey.json`;

    fs.readFile(fileToRead, (err, data) => {
      expect(err).toBeDefined();
      expect(data).not.toBeDefined();

      done();
    });
  });

  it('calls callback without error, and with data, for real file', done => {
    const fileToRead = `files/data/person.json`;

    fs.readFile(fileToRead, (err, data) => {
      expect(err).toBeNull();
      expect(data).toBeDefined();
      expect(data.toString().trim().length).toBe(161);

      done();
    });
  });
});