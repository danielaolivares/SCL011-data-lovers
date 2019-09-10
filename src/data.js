/* Manejo de data 

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

const example = () => {
  return 'example';
};

window.example = example;*/
/* Manejo de data */

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

const champList = window.LOL.data;
window.champList=champList;
//let stopRecover = true;




//  EVENTOS DE FILTROS

//FILTRO TODOS LOS CAMPEONES

document.getElementById("filterAll").addEventListener("click", function (){
    document.getElementById("table").innerHTML = "";
    campeonLista(recoverValues);
});

//FILTRO LUCHADOR
document.getElementById("filterFighter").addEventListener("click", function () {
    const fighter = recoverValues.filter(marks => (marks.tags.includes("Fighter")));
    document.getElementById("table").innerHTML = "";
    campeonLista(fighter);
});

//FILTRO MARKSMAN
document.getElementById("filterMarksman").addEventListener("click", function () {
    const marksman = recoverValues.filter(marks => (marks.tags.includes("Marksman")));
    document.getElementById("table").innerHTML = "";
    campeonLista(marksman);
});

//FILTRO TANQUES
document.getElementById("filterTank").addEventListener("click", function () {
    const tank = recoverValues.filter(marks => (marks.tags.includes("Tank")));
    document.getElementById("table").innerHTML = "";
    campeonLista(tank);
});

//FILTRO MAGOS
document.getElementById("filterMage").addEventListener("click", function () {
    const mage = recoverValues.filter(marks => (marks.tags.includes("Mage")));
    document.getElementById("table").innerHTML = "";
    campeonLista(mage);
});

//FILTRO Soporte
document.getElementById("filterSupport").addEventListener("click", function () {
    const support = recoverValues.filter(marks => (marks.tags.includes("Support")));
    document.getElementById("table").innerHTML = "";
    campeonLista(support);
});

//FILTRO Soporte
document.getElementById("filterAssasin").addEventListener("click", function () {
    const assasins = recoverValues.filter(marks => (marks.tags.includes("Assassin")));
    document.getElementById("table").innerHTML = "";
    campeonLista(assasins);
});

//CALCULOS
/*
var data = {
    size: 230,
    sectors: [
        {
            percentage: 0.45,
            label: 'Thing 1'
        },
        {
            percentage: 0.21,
            label: "Thing Two"
        },
        {
            percentage: 0.11,
            label: "Another Thing"
        },
        {
            percentage: 0.23,
            label: "Pineapple"
        }
    ]
}

function calculateSectors( data ) {
    var sectors = [];
    var colors = [
        "#61C0BF", "#DA507A", "#BB3D49", "#DB4547"
    ];

    var l = data.size / 2
    var a = 0 // Angle
    var aRad = 0 // Angle in Rad
    var z = 0 // Size z
    var x = 0 // Side x
    var y = 0 // Side y
    var X = 0 // SVG X coordinate
    var Y = 0 // SVG Y coordinate
    var R = 0 // Rotation

    data.sectors.map( function(item, key ) {
        a = 360 * item.percentage;
        aCalc = ( a > 180 ) ? 360 - a : a;
        aRad = aCalc * Math.PI / 180;
        z = Math.sqrt( 2*l*l - ( 2*l*l*Math.cos(aRad) ) );
        if( aCalc <= 90 ) {
            x = l*Math.sin(aRad);
        }
        else {
            x = l*Math.sin((180 - aCalc) * Math.PI/180 );
        }
        
        y = Math.sqrt( z*z - x*x );
        Y = y;

        if( a <= 180 ) {
            X = l + x;
            arcSweep = 0;
        }
        else {
            X = l - x;
            arcSweep = 1;
        }

        sectors.push({
            percentage: item.percentage,
            label: item.label,
            color: colors[key],
            arcSweep: arcSweep,
            L: l,
            X: X,
            Y: Y,
            R: R
        });

        R = R + a;
    })


    return sectors
}

sectors = calculateSectors(data);
var newSVG = document.createElementNS( "http://www.w3.org/2000/svg","svg" );
newSVG.setAttributeNS(null, 'style', "width: "+data.size+"px; height: " + data.size+ "px");
document.getElementsByTagName("body")[0].appendChild(newSVG)


sectors.map( function(sector) {

    var newSector = document.createElementNS( "http://www.w3.org/2000/svg","path" );
    newSector.setAttributeNS(null, 'fill', sector.color);
    newSector.setAttributeNS(null, 'd', 'M' + sector.L + ',' + sector.L + ' L' + sector.L + ',0 A' + sector.L + ',' + sector.L + ' 1 0,1 ' + sector.X + ', ' + sector.Y + ' z');
    newSector.setAttributeNS(null, 'transform', 'rotate(' + sector.R + ', '+ sector.L+', '+ sector.L+')');

    newSVG.appendChild(newSector);
})

var midCircle = document.createElementNS( "http://www.w3.org/2000/svg","circle" );
midCircle.setAttributeNS(null, 'cx', data.size * 0.5 );
midCircle.setAttributeNS(null, 'cy', data.size * 0.5);
midCircle.setAttributeNS(null, 'r', data.size * 0.28 );
midCircle.setAttributeNS(null, 'fill', '#42495B' );

newSVG.appendChild(midCircle); */




// CALCULO 2 




/*const svgEl = document.querySelector('svg');
const slices = [
  { percent: 0.1, color: '#ffffff' },
  { percent: 0.65, color: 'red' },
  { percent: 0.2, color: 'gold' },
];
let cumulativePercent = 0;

function getCoordinatesForPercent(percent) {
  const x = Math.cos(2 * Math.PI * percent);
  const y = Math.sin(2 * Math.PI * percent);
  return [x, y];
}

slices.forEach(slice => {
  // destructuring assignment sets the two variables at once
  const [startX, startY] = getCoordinatesForPercent(cumulativePercent);
  
  // each slice starts where the last slice ended, so keep a cumulative percent
  cumulativePercent += slice.percent;
  
  const [endX, endY] = getCoordinatesForPercent(cumulativePercent);

  // if the slice is more than 50%, take the large arc (the long way around)
  const largeArcFlag = slice.percent > .5 ? 1 : 0;

	// create an array and join it just for code readability
  const pathData = [
    `M ${startX} ${startY}`, // Move
    `A 1 1 0 ${largeArcFlag} 1 ${endX} ${endY}`, // Arc
    `L 0 0`, // Line
  ].join(' ');

  // create a <path> and append it to the <svg> element
  const pathEl = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  pathEl.setAttribute('d', pathData);
  pathEl.setAttribute('fill', slice.color);
  svgEl.appendChild(pathEl);
});*/
window.LOL = LOL;

