const allChamp = window.LOL.data;
//console.log(allChamp);
let recoverValues= Object.values(allChamp);
//console.log(recoverValues)
//let recoverKeys= Object.keys(allChamp);//solo nombres
//console.log(recoverKeys); 
//mostrar todos los campeones
let currentFilter = recoverValues;

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
 document.getElementById("filterTypeChamp").addEventListener('change', () => {
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
  

                                  //CALCULOS//                                 
// filtro 1 para calculo

function championFilter(condition) {
    //para iniciar, el filtro actual comienza siempre como recover values, para poder recargar la informacion y filtrar en base a ella en vez de filtrar sobre la informacion ya filtrada.
    currentFilter = recoverValues;
   //regresa el valor del filtro actual, y a ello se le aplica una condicion que busca el tag especifico incluida en la busqueda
    return currentFilter.filter(marks => (marks.tags.includes(condition)));
}

//filtro2 para calculo

function applyFilter (condition) {
  //condicion todos para invocar a todos los campeones sin ningun filtro
  if (condition === "Todos"){
      //llamamos la tabla vacia para poder rellenarla con los valores que estamos pidiendo
  document.getElementById("table").innerHTML = "";
  //en este caso como queremos a todos los campeones simplemente establecemos que currentFiler traiga a todos(recoverValues)
  currentFilter = recoverValues;
  //y ahora con la tabla vacia y los valores especificados llamamos a la funcion invocando a todos los campeones
  campeonLista(currentFilter);
  } else { //si no queremos a todos los campeones, entonces condicionamos
      //primero vaciando la tabla para poder traer los valores que queremos
  document.getElementById("table").innerHTML = "";
  //establecemos una variable que contenga la funcion filtro aplicando el parametro de la condicion pedida
  let filter = championFilter(condition);
  //establecemos que el filtro actual es igual al que pedimos en la codicion para que traiga a esos campeones
  currentFilter = filter;
  //y aplicamos esa variable a nuestra funcion de filtro
  campeonLista(filter);
}
}

  //CONSTANTE TOTAL DE CAMPEONES
  const totalChamps = 242;
  //CALCULO PORCENTAJE FIGHTERS
  function percentageFigthers(){
    // tabla de los titulos que contiene la data de los campeones, en el area campeon se inserta la funcion orden en dos botones, ascendente y descendente
    let totalFighter = championFilter("Fighter").length;
    let percentageFighter= parseInt((totalFighter*100) / totalChamps);
    document.getElementById("percentageTotalFigther").innerHTML="Luchadores: " + percentageFighter+"%";
    return percentageFighter;
} 
percentageFigthers();

//CALCULO PORCENTAJE MARKSMAN

function percentageMarksmans(){
    // tabla de los titulos que contiene la data de los campeones, en el area campeon se inserta la funcion orden en dos botones, ascendente y descendente
    let totalMarksman = championFilter("Marksman").length;
    let percentageMarksman= parseInt((totalMarksman*100) / totalChamps);
    document.getElementById("percentageTotalMarksman").innerHTML="Tiradores: " + percentageMarksman+"%";
    return percentageMarksman;
}
percentageMarksmans();

//CALCULO PORCENTAJE TANK

function percentageTanks(){
    // tabla de los titulos que contiene la data de los campeones, en el area campeon se inserta la funcion orden en dos botones, ascendente y descendente
    let totalTank = championFilter("Tank").length;
    let percentageTank= parseInt((totalTank*100) / totalChamps);
    document.getElementById("percentageTotalTank").innerHTML="Tanques: " + percentageTank+"%";
    return percentageTank;
}
percentageTanks();

//CALCULO PORCENTAJE MAGES

function percentageMages(){
    // tabla de los titulos que contiene la data de los campeones, en el area campeon se inserta la funcion orden en dos botones, ascendente y descendente
    let totalMage = championFilter("Mage").length;
    let percentageMage= parseInt((totalMage*100) / totalChamps);
    document.getElementById("percentageTotalMage").innerHTML="Magos: " + percentageMage+"%";
    return percentageMage;
}
percentageMages();

//CALCULO PORCENTAJE SUPPORT

function percentageSupports(){
    // tabla de los titulos que contiene la data de los campeones, en el area campeon se inserta la funcion orden en dos botones, ascendente y descendente
    let totalSupport = championFilter("Support").length;
    let percentageSupport= parseInt((totalSupport*100) / totalChamps);
    document.getElementById("percentageTotalSupport").innerHTML="Soportes: " + percentageSupport+"%";
    return percentageSupport;
}
percentageSupports();

//CALCULO PORCENTAJE ASSASSIN

function percentageAssassins(){
    // tabla de los titulos que contiene la data de los campeones, en el area campeon se inserta la funcion orden en dos botones, ascendente y descendente
    let totalAssassin = championFilter("Assassin").length;
    let percentageAssassin= parseInt((totalAssassin*100) / totalChamps);
    document.getElementById("percentageTotalAssassin").innerHTML="Asesinos: " + percentageAssassin+"%";
    return percentageAssassin;
}
percentageAssassins();
