    /*CONSTANTES GLOBALES*/

const searcher = document.getElementById("buscarverbo");
const tablee = document.getElementById("table");
const bodytable = document.getElementsByTagName("tbody")[0];
const filas = tablee.getElementsByTagName("tr");



    /*ARRAYS GLOBALES*/

const arrayVerbosRegular = [
  
      ["Accept", "Accepted", "Accepted"],
  ["Arrive", "Arrived", "Arrived"],
  ["Bake", "Baked", "Baked"],
  ["Call", "Called", "Called"],
  ["Clean", "Cleaned", "Cleaned"],
  ["Close", "Closed", "Closed"],
  ["Cook", "Cooked", "Cooked"],
  ["Dance", "Danced", "Danced"],
  ["Decide", "Decided", "Decided"],
  ["Enjoy", "Enjoyed", "Enjoyed"],
  ["Help", "Helped", "Helped"],
  ["Hope", "Hoped", "Hoped"],
  ["Jump", "Jumped", "Jumped"],
  ["Laugh", "Laughed", "Laughed"],
  ["Like", "Liked", "Liked"],
  ["Listen", "Listened", "Listened"],
  ["Look", "Looked", "Looked"],
  ["Sleep", "Slept", "Slept"],
];

const arrayVerbosIrregular = [
    ["Run", "Ran", "Run"],
    ["Leave", "Left", "Left"],
    ["Eat", "Ate", "Eaten"]
    ]
const todosLosVerbos = arrayVerbosRegular.concat(arrayVerbosIrregular);

    /*ORDENA LOS VERBOS EN LA TABLA DE FORMA AUTOMATICA DE LA A-Z*/

todosLosVerbos.sort((a, b) => a[0].localeCompare(b[0]));
for(let filaValue of todosLosVerbos){
    const newfila = document.createElement("tr");
    for(let valorCelda of filaValue){
        const newceld = document.createElement("td");
        newceld.innerText = valorCelda;
        newfila.appendChild(newceld);
    };
   bodytable.appendChild(newfila);
}
    /*LIMPIA Y PINTA LA TABLA PARA EVITAR QUE EL CONTENIDO SE DUPLIQUE*/

const pintartabla = () => {
bodytable.innerHTML = "";
for(let filaValue of todosLosVerbos){
    const newfila = document.createElement("tr");
    for(let valorCelda of filaValue){
        const newceld = document.createElement("td");
        newceld.innerText = valorCelda;
        newfila.appendChild(newceld);
    };
   bodytable.appendChild(newfila);
}}

    /*FILTRA LA TABLA EN ORDEN DE LA A-Z*/

const filterAZ = document.getElementById("filtrarAZ");

const filtrartablaAZ = () => {
   todosLosVerbos.sort((a, b) => a[0].localeCompare(b[0]));
   pintartabla();
}
filterAZ.addEventListener("click", filtrartablaAZ);

    /*FILTRA LA TABLA EN ORDEN DE LA Z-A*/

const filterZA = document.getElementById("filtrarZA");

const filtrartablaZA = () => {
   todosLosVerbos.sort((a, b) => b[0].localeCompare(a[0]));
   pintartabla();
}
filterZA.addEventListener("click", filtrartablaZA);

    /*FILTRA LA TABLA Y MUESTRA SOLO VERBOS REGULARES*/

    const filterR = document.getElementById("filtrarRegulares");
    const filtrarxR = () => {
    for(let fila of filas){
        const celds = fila.getElementsByTagName("td");
        if(celds.length > 0){
            const verbo = celds[0].innerText.toLowerCase();
            const esregular = arrayVerbosRegular.some(regular => regular[0].toLowerCase() === verbo);
            fila.style.display = esregular ? "" : "none";
        }
    }
    };
  filterR.addEventListener("click", filtrarxR);

        /*FILTRA LA TABLA Y MUESTRA SOLO VERBOS REGULARES*/
        
const filtrarIrregularess = document.getElementById("filtrarIrregulares");
const filtradorirregulares = () => {
    for(let fila of filas){
        const celds = fila.getElementsByTagName("td");
        if(celds.length > 0){
            const verbo = celds[0].innerText.toLowerCase();
            const esIrregular = arrayVerbosIrregular.some(irregular => irregular[0].toLowerCase() === verbo);
            fila.style.display = esIrregular ? "" : "none";
        }}}
    filtrarIrregularess.addEventListener("click", filtradorirregulares);
   
  /*BUSCADOR DE VERBOS ESPECIFICOS*/

const filtrartabla = () => {
    const lupa = searcher.value.toLowerCase();
        for(let fila of filas){
 const celds = fila.getElementsByTagName("td");
        if(celds.length > 0){
            const verbo = celds[0].innerText.toLowerCase();
            fila.style.display = verbo.includes(lupa) ? "" : "none"
            }
        }
    }
    searcher.addEventListener("input", filtrartabla);
