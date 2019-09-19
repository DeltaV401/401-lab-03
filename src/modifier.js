'use strict';

function modifyData(dataArray) {
  dataArray.firstName = 'Tony';
  dataArray.lastName = 'Stark';
  dataArray.hair = {type:'scruffy', color:'black'};
  dataArray.favoriteFoods = ['shawarma', 'alcohol','coffee grounds'];
  dataArray.married = true;
  dataArray.kids = 1;
}

module.exports = modifyData;