    /*CONSTANTES GLOBALES*/

const searcher = document.getElementById("buscarverbo");
const tablee = document.getElementById("table");
const bodytable = document.getElementsByTagName("tbody")[0];
const filas = tablee.getElementsByTagName("tr");



    /*ARRAYS GLOBALES*/

const arrayVerbosRegular = [
  ["Accept", "Accepted", "Accepted"],
  ["Arrive", "Arrived", "Arrived"],
  ["Ask", "Asked", "Asked"],
  ["Bake", "Baked", "Baked"],
  ["Call", "Called", "Called"],
  ["Clean", "Cleaned", "Cleaned"],
  ["Close", "Closed", "Closed"],
  ["Cook", "Cooked", "Cooked"],
  ["Dance", "Danced", "Danced"],
  ["Decide", "Decided", "Decided"],
  ["Deliver", "Delivered", "Delivered"],
  ["Enjoy", "Enjoyed", "Enjoyed"],
  ["Help", "Helped", "Helped"],
  ["Invite", "Invited", "Invited"],
  ["Jump", "Jumped", "Jumped"],
  ["Learn", "Learned", "Learned"],
  ["Like", "Liked", "Liked"],
  ["Listen", "Listened", "Listened"],
  ["Live", "Lived", "Lived"],
  ["Love", "Loved", "Loved"],
  ["Open", "Opened", "Opened"],
  ["Paint", "Painted", "Painted"],
  ["Play", "Played", "Played"],
  ["Rain", "Rained", "Rained"],
  ["Remember", "Remembered", "Remembered"],
  ["Start", "Started", "Started"],
  ["Talk", "Talked", "Talked"],
  ["Travel", "Traveled", "Traveled"],
  ["Try", "Tried", "Tried"],
  ["Use", "Used", "Used"],
  ["Visit", "Visited", "Visited"],
  ["Wait", "Waited", "Waited"],
  ["Walk", "Walked", "Walked"],
  ["Want", "Wanted", "Wanted"],
  ["Watch", "Watched", "Watched"],
  ["Work", "Worked", "Worked"],
];


const arrayVerbosIrregular = [
  ["Be", "Was/Were", "Been"],
  ["Become", "Became", "Become"],
  ["Begin", "Began", "Begun"],
  ["Break", "Broke", "Broken"],
  ["Bring", "Brought", "Brought"],
  ["Build", "Built", "Built"],
  ["Buy", "Bought", "Bought"],
  ["Catch", "Caught", "Caught"],
  ["Choose", "Chose", "Chosen"],
  ["Come", "Came", "Come"],
  ["Do", "Did", "Done"],
  ["Drink", "Drank", "Drunk"],
  ["Drive", "Drove", "Driven"],
  ["Eat", "Ate", "Eaten"],
  ["Fall", "Fell", "Fallen"],
  ["Feel", "Felt", "Felt"],
  ["Find", "Found", "Found"],
  ["Fly", "Flew", "Flown"],
  ["Forget", "Forgot", "Forgotten"],
  ["Get", "Got", "Got/Gotten"],
  ["Give", "Gave", "Given"],
  ["Go", "Went", "Gone"],
  ["Grow", "Grew", "Grown"],
  ["Have", "Had", "Had"],
  ["Hear", "Heard", "Heard"],
  ["Keep", "Kept", "Kept"],
  ["Know", "Knew", "Known"],
  ["Leave", "Left", "Left"],
  ["Lose", "Lost", "Lost"],
  ["Make", "Made", "Made"],
  ["Meet", "Met", "Met"],
  ["Pay", "Paid", "Paid"],
  ["Read", "Read", "Read"],
  ["Run", "Ran", "Run"],
  ["Say", "Said", "Said"],
  ["See", "Saw", "Seen"],
  ["Sell", "Sold", "Sold"],
  ["Send", "Sent", "Sent"],
  ["Sing", "Sang", "Sung"],
  ["Sit", "Sat", "Sat"],
  ["Sleep", "Slept", "Slept"],
  ["Speak", "Spoke", "Spoken"],
  ["Spend", "Spent", "Spent"],
  ["Stand", "Stood", "Stood"],
  ["Swim", "Swam", "Swum"],
  ["Take", "Took", "Taken"],
  ["Teach", "Taught", "Taught"],
  ["Tell", "Told", "Told"],
  ["Think", "Thought", "Thought"],
  ["Understand", "Understood", "Understood"],
  ["Write", "Wrote", "Written"],
  ["Sleep", "Slept", "Slept"]
];


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
