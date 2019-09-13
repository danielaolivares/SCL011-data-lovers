global.window = global;
global.assert = require('chai').assert;
require('../src/data');
require('./data.spec.js');

describe('filterChamp', () => {

  const sample = [
    { name: "Aatrox", tags: ["Fighter", "Tank" ]},
    { name: "Orianna", tags: ["Mage", "Support"] },
    { name: "Sejuani", tags: ["Tank", "Fighter"] },
  ]
  
  it('debería ser una función', () => {
    assert.equal(typeof filterChamp, 'function');
  });

  it('debería retornar "Orianna"  al seleccionar "Mage"', () => {
    assert.deepEqual(window.filterChamp(sample,"Mage"), "Orianna");
  });
});
