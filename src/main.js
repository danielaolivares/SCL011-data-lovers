/* Manejo del DOM */
const all= window.LOL.data;//variable que engloba toda la data, campeones y popiedades.
//console.log(all);
const recoverData= Object.keys(all);//palabra adelante :
//console.log(recoverData);
const recoverValues= Object.values(all);
//console.log(recoverValues);


document.getElementById("listChampions").addEventListener("click",()=> {
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
//-------------seccion 2 luchadores--------------------
