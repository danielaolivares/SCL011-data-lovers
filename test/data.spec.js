global.window = global;
global.assert = require('chai').assert;
require('../src/data.js');
require('../src/data/lol/lol.js')
require('./data.spec.js');
//ordenar
describe('data.order', () => {
  const muestra= [{
      MissFortune: {
      id:"MissFortune",
      info: { difficulty: 1}
    },
    Darius: {
        id:"Darius",
        info: {difficulty: 2}
      },
      Braum: {
        id: "Braum",
          info: {difficulty: 3},
          }
        }];
  
  it('debería ser una función', () => {
    assert.equal(typeof window.sort.order, 'function');
  });


    it('deberia retornar en orden: MissFortune, Darius, Braum al ordenar por nombre de Z a A',() =>{
      assert.deepEqual(window.sort.order("idZ_A",muestra),
      [{id:"MissFortune", info: {difficulty:1}},
      {id:"Darius", info: {difficulty:2}},
       {id:"Braum", info: {difficulty:3}}]
    )});
  }); 

  describe('data.tags', () => {
    const muestra2= [
        Aatrox: {
          id: "Aatrox",
         name: "Aatrox",
         tags: ["Fighter", "Mage"]
         },
         Irelia: {
          id: "Irelia",
          name: "Irelia",
          tags: ["Support", "Assassin"]
         },
         Sejuani {
          id: "Sejuani",
          name: "Sejuani",
          tags: ["Marksman", "Tank"]
         }]

         it('debería ser una función', () => {
          assert.equal(typeof  window.filter.tags, 'function');
        });
        it('deberia retornar values de Aatrox,Irelia y Sejuani al filtrar por figther',() => { 
          assert.deepEqual(window.filter.tags(muestra2,"Fighter"),[{
            id: "Aatrox",
           name: "Aatrox",
           tags: ["Fighter", "Tank"]
           },
          {
            id: "Irelia",
            name: "Irelia",
            tags: ["Fighter", "Assassin"]
           },
          {
            id: "Sejuani",
          name: "Sejuani",
          tags: ["Tank", "Fighter"]
          }]);
        })
      
      });
    ]});