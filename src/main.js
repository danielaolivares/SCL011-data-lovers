const allChamp = window.LOL.data;
//console.log(allChamp);
let recoverValues= Object.values(allChamp);
console.log(recoverValues)
document.getElementById("filterAll").addEventListener("click", ()=>{
  //console.log("ok");
  document.getElementById("filterWrap").innerHTML =`<div class="fila">
  <div class="col">IMAGEN</div>
      <div class="col"><select ><option id="azOrder">A-Z</option> 
      <option id="zaOrder">Z-A</option> CAMPEÓN
      </select></div>
      <div class="col">TIPO</div>
  <div class="col">DIFICULTAD</div>
  </div>`
  recoverValues.forEach(element => {
  //console.log(element.id);
  document.getElementById("filterWrap").innerHTML +=`<div class="fila">
  <div class="col"><img src="${element.img}" alt=""></div>
  <div class="col">${element.id}</div>
  <div class="col">${element.tags}</div>
  <div class="col">${element.info.difficulty}</div>    
  </div>`
  });
  });

  //--------------filtro luchador-------------
  document.getElementById("filterFighter").addEventListener("click",()=>{
    document.getElementById("filterWrap").value="";
    let condition = "figther"
    filterChamp(recoverValues, condition)
  })

