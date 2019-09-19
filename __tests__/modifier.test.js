'use strict';

const modifier = require('../src/modifier');

describe('modifier', () => {
  it('makes the first person', () {
    var data = [
      {
        firstName: 'Jon',
        lastName: 'Struve',
        hair: { type: 'hat' },
        favoriteFoods: 'Chicken',
        pets: [],
      },
    ];
    modifier(data);

    // expect(data.length).toBe(1);
    // expect(data[0].firstName).toBe('Tony');
    // expect(data[0].lastName).toBe('Stark');
    // expect(data[0].hair).toHaveProperty('type', 'scruffy');
    // expect(data[0].hair).toHaveProperty('color', 'black');
    // expect(data[0].favoriteFoods).toBe(['shawarma', 'alcohol', 'coffee grounds']);
    // expect(data[0].married).toBe(true);
    // expect(data[0].kids).toBe(1);


    expect(data).toEqual([
      {
        firstName: 'Tony',
        lastName: 'Stark',
        hair: {type: 'scruffy', color: 'black'},
        favoriteFoods: ['shawarma', 'alcohol', 'coffee grounds'],
        married: true,
        kids: 1,
      },
    ]);
  });
});