/* Manejo del DOM */
const allChamp= window.LOL.data;//variable que engloba toda la data, campeones y popiedades.
//console.log(all);
//const recoverKeys= Object.keys(allChamp);//palabra adelante :
//console.log(recoverData);
const recoverValues= Object.values(allChamp);
//console.log(recoverValues);
const fichaDeCampeones = recoverValues.filter(campeon => (campeon.name === "Aatrox"));
console.log(fichaDeCampeones)
// FUNCION FILTRO, estructura de la tabla donde iran los valores

function campeonLista(lista) {
    const tableStructure = document.getElementById("table");
    // tabla de todos los campeones
    tableStructure.innerHTML +=
    `<tr class="tabla">
        <th>IMAGEN</th>
        <th>CAMPEÓN</th>
        <th>TIPO</th>
        <th>DIFICULTAD</th>
    </tr>`
    lista.forEach(campeon => {

        tableStructure.innerHTML +=
        `<tr>
         <td><img id="iconImg" src="${campeon.img}" alt=""></td>
         <td>${campeon.name}</td>
         <td>${campeon.tags}</td>
         <td>${campeon.info.difficulty}</td>
         </tr>
        `
    });
};

campeonLista(recoverValues);
/*document.getElementById("listChampions").addEventListener("click",()=> {
    //console.log("se escucha");
    document.getElementById("introduction").value="";// esto es para desaparecer
    // esto de abajo es lo que queremos mostrar
    document.getElementById("tableChamp").innerHTML=`<div class="filterWrap">
    <a id="filterItem">TODOS LOS CAMPEONES</a>
    <a id="linkFigther">LUCHADORES</a>
    <a id="linkMarskman">TIRADORES</a>
    <a id="linkTank">TANQUES</a>
    <a id="linkMage">MAGOS</a>
    <a id="linkSupport">SOPORTE</a>
    <a id="linkAssassin">ASESINOS</a>
    </div>   
    <div class="tableMain">
    <div class="row">
    <div class="cel">
  imagen
    </div>
    <div class="cel">
      campeón
    </div>
    <div class="cel">
      tipo
    </div>
    <div class="cel">
      dificultad
    </div>
  </div>
  <div class="row" id="counterInfo"></div>`  
//   <table border="1">display:table
//     <tr class="tabla" > display: table-row
//     <th> IMAGEN</th>dispay:table-header-group
//       <th >CAMPEÓN</th>
//       <th>TIPO</th>
//       <th>DIFICULTAD</th>
//     </tr>
//     <tr><tr id="counterInfo"></tr></tr>
// </table>
//td=contenio de recuadro  th=titulo
 const showMe= recoverValues.forEach(element => {
 document.getElementById("counterInfo").innerHTML+=`<div class="row"><div class="cel" ><img src="${element.img}"></div>
 <div class="cel">${element.id}</div><div class="cel">${element.tags}</div><div class="cel">${element.info.difficulty}</div>
 </div>`
//  document.getElementById("counterInfo").innerHTML += `<td>${element.id}</td>`
//  document.getElementById("counterInfo").innerHTML+=`<td>${element.tags}</td>`
//  document.getElementById("counterInfo").innerHTML+=`<td>${element.info.difficulty}</td>` 
 
     
    
        });
});
//-------------seccion 2 luchadores--------------------*/
