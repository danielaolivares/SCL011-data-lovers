const allChamp = window.LOL.data;
//console.log(allChamp);
let recoverValues= Object.values(allChamp);
//console.log(recoverValues)
let recoverKeys= Object.keys(allChamp);//solo nombres
//console.log(recoverKeys); 
//mostrar todos los campeones
document.getElementById("allChampion").addEventListener('click',()=>{
  //console.log("ok");
  
 
  document.getElementById("showData").innerHTML =`<div class="fila">
  <div class="col">IMAGEN</div>
      <div class="col"><select ><option id="azOrder">A-Z</option> 
      <option id="zaOrder">Z-A</option> CAMPEÓN
      </select></div>
      <div class="col">TIPO</div>
  <div class="col">DIFICULTAD</div>
  </div>`
   recoverValues.forEach(element => {
  //console.log(element.id);
    document.getElementById("showData").innerHTML +=`<div class="fila">
    <div class="col"><img src="${element.img}" alt=""></div>
    <div class="col">${element.id}</div>
    <div class="col">${element.tags}</div>
    <div class="col">${element.info.difficulty}</div>    
    </div>`
    });
    //ordenar
    document.getElementById("orderChamp").addEventListener('change', () => {
      //console.log("ok")
       let sortOrder = recoverValues.forEach(element =>{
         element.tags
       });
       let orderResult = window.sort.order(recoverValues,sortOrder);
     
     document.getElementById("showData").innerHTML="";
     const finalOrder = orderResult.map((showOrder)=>{
     
       document.getElementById("showData").innerHTML += 
         `<div class="fila">
         <div class="col"><img src="${showOrder.img}" alt=""></div>
         <div class="col">${showOrder.id}</div>
         <div class="col">${showOrder.tags}</div>
         <div class="col">${showOrder.info.difficulty}</div>    
         </div>`
     });
     return finalOrder;
     });
     });
//funcion filtrar
const filterSelector = document.getElementById("filterTypeChamp").addEventListener('change', () => {
  //console.log(ok);
  //document.getElementById("showData").value=""
  let condition = document.getElementById("filterTypeChamp").options[document.getElementById("filterTypeChamp").selectedIndex].value;
  //console.log(condition); 
  let resultFilterChamp= window.filter.tags(recoverValues,condition);
  document.getElementById("showData").innerHTML="";
  //console.log(resultFilterChamp); 
  resultFilterChamp.map((showChamp)=>{
  
    document.getElementById("showData").innerHTML += 
    `<div class="fila">
    <div class="col"><img src="${showChamp.img}" alt=""></div>
    <div class="col">${showChamp.id}</div>
    <div class="col">${showChamp.tags}</div>
    <div class="col">${showChamp.info.difficulty}</div>    
    </div>`
  });
  //console.log(finalFilter)
  return resultFilterChamp;
  
  
  });
  //document.getElementById("showData").innerHTML= finalFilter;