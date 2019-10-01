global.window = global;
global.assert = require('chai').assert;
require('../src/data.js');
require('../src/data/lol/lol.js')
require('./data.spec.js');
//ordenar
describe('data.order', () => {
  const muestra= [
      { 
      name:"MissFortune",
     
    },
    { 
        name:"Darius",
        
    },
      { 
        name: "Braum",
      },
          
      ];
  
  it('debería ser una función', () => {
    assert.equal(typeof window.sort.order, 'function');
  });


    it('deberia retornar en orden: Braum, Darius, MissFortune al ordenar por nombre de A a Z',() =>{
      assert.deepEqual(window.sort.order((muestra,"name"),
      [ "Braum",
      "Darius",
      "MissFortune"]
    ))});
  });
 

  describe('data.tags', () => {
    const muestra2= [
         {
          id: "Aatrox",
         tags: ["Fighter", "Mage"]
         },
         {
          id: "Bard",
          name: "Bard",
          tags: ["Support", "Mage"]
         },
         {
          id: "Caitlyn",
          name: "Caitlyn",
          tags: ["Marksman"]
         }
        ]

         it('debería ser una función', () => {
          assert.equal(typeof  window.filter.tags, 'function');
        });
        it('deberia retornar values de Aatroxal filtrar por figther',() => { 
          assert.deepEqual(window.filter.tags(muestra2,"Fighter"),[{
            id: "Aatrox",
           tags: ["Fighter", "Mage"]
           }]);
        });
      
});