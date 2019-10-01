// crear una constante para englobar la data
const allChampions = window.LOL.data;
let recoverValues= Object.values(allChampions);
// object value recupera los valores de la data
let recoverKeys= Object.keys(allChampions);
//mostrar toda la data
document.getElementById("showData").innerHTML= `<div class="col">IMAGEN</div>
<div class="col"><label>CAMPEÓN</label><select name="selector" id="orderChampion"> <option value="AZ">A-Z</option>
<option value="ZA">Z-A</option></selector></div>
<div class="col">TIPO</div>
<div class="col">DIFICULTAD</div>
</div>`
recoverValues.forEach(element => {
    document.getElementById("showData").innerHTML+= `<div class="fila">
    <div class="col"><img src="${element.img}" alt=""></div>
    <div class="col">${element.name}</div>
    <div class="col">${element.tags}</div>
    <div class="col">${element.info.difficulty}</div>
    </div>`    
});
// ordenar todos los campeones
/*document.getElementById("orderChampion").addEventListener('change', () => {
   //console.log("ok")
     //let sortOrder = orderChampion.options[orderChampion.selectedIndex].value;
     let sortOrder = recoverValues.forEach(element =>{
        element.tags;
       // console.log(sortOrder);
      });
     let orderResult = window.sort.order(recoverValues,sortOrder);
     console.log(orderResult);
   
   document.getElementById("showData").innerHTML="";
   const finalOrder = orderResult.map((showOrder)=>{
   
     document.getElementById("showData").innerHTML += 
       `<div class="fila">
       <div class="col"><img src="${showOrder.img}" alt=""></div>
       <div class="col">${showOrder.name}</div>
       <div class="col">${showOrder.tags}</div>
          </div>`
   });
   return finalOrder;
   });*/
   document.getElementById("orderChampion").addEventListener('change', () => {
    //console.log("ok")
     let sortOrder = recoverValues.forEach(element =>{
       element.name
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
   


//Funcion filtrar
document.getElementById("filterTypeChampion").addEventListener('change',()=>{
    let condition=document.getElementById("filterTypeChampion").options[document.getElementById("filterTypeChampion").selectedIndex].value;
    let resultFilterChamp= window.filter.tags(recoverValues,condition);
    document.getElementById("showData").innerHTML="";
    resultFilterChamp.forEach((element) => {
        //console.log(element.id)
    document.getElementById("showData").innerHTML += `<div class="fila"><img src="${element.img}" alt="">
    <div class="col">${element.name}</div>
    <div class="col">${element.tags}</div>
    <div class="col">${element.info.difficulty}</div>
    </div>`
        
    });
});

// funcion ordenar lo filtrado

/*document.getElementById("orderChampion").addEventListener('change',()=>{
    let sortOrder= document.getElementById("showData").value;
   // console.log(sortOrder);
    let orderResult= window.sorte.order(recoverValues,sortOrder);
    document.getElementById("showData").innerHTML="";
    const finalOrder=orderResult.map(showOrder=>{
        document.getElementById("showData").innerHTML+= `<div class="fila">
        <div class="col"><img src="${showOrder.img}" alt=""></div>
        <div class="col">${showOrder.id}</div>
        <div class="col">${showOrder.tags}</div>
        <div class="col">${showOrder.info.difficulty}</div>    
        </div>`
    });
})*/