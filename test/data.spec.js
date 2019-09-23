global.window = global;
global.assert = require('chai').assert;
require('../src/data.js');
require('../src/data/lol/lol.js')
require('./data.spec.js');
//ordenar
describe('data.order', () => {
  const muestra= {
    data: {
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
          }}
        };
  
  it('debería ser una función', () => {
    assert.equal(typeof window.sort.order, 'function');
  });


    it('deberia retornar en orden: MissFortune, Darius, Braum al ordenar por nombre de Z a A',() =>{
      assert.deepEqual(window.orderChamp("nameZ_A",muestra.data),
      [{id:"MissFortune", info: {difficulty:1}},
      {id:"Darius", info: {difficulty:2}},
       {id:"Braum", info: {difficulty:3}}]
    )});
  }); 

  describe('data.tags', () => {
    const muestra= { 
      data: {
        Aatrox: {
          id: "Aatrox",
         name: "Aatrox",
         tags: ["Fighter", "Tank"],
         },
         Irelia: {
          id: "Irelia",
          name: "Irelia",
          tags: ["Fighter", "Assassin"],
         },
         Sejuani: {
          id: "Sejuani",
          name: "Sejuani",
          tags: ["Tank", "Fighter"],
         },}}
         it('debería ser una función', () => {
          assert.equal(typeof  window.filter.tags, 'function');
        });
        it('deberia retornar values de Aatrox,Irelia y Sejuani al filtrar por figther',() => { 
          assert.deepEqual(window.filterChamp("Fighter",muestra.data),[{
            id: "Aatrox",
           name: "Aatrox",
           tags: ["Fighter", "Tank"],
           },
          {
            id: "Irelia",
            name: "Irelia",
            tags: ["Fighter", "Assassin"],
           },
          {
            id: "Sejuani",
          name: "Sejuani",
          tags: ["Tank", "Fighter"],
          }]);})
      
      });
