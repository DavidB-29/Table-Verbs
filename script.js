const searcher = document.getElementById("buscarverbo");
const tablee = document.getElementById("table");

searcher.addEventListener("input", filtrartabla);

function filtrartabla(){
    const lupa = searcher.value.toLowerCase();
    const filas = tablee.getElementsByTagName("tr");
    for(let fila of filas){
        const celds = fila.getElementsByTagName("td");
        if(celds.length > 0){
            const verb = celds[0].innerText.toLowerCase();
            if(verb.includes(lupa)){
                fila.style.display = ""
            }else{
                fila.style.display = "none"
            }
        }
    }
}

const arrayVerbos = [
    ["Run", "Ran", "Run"],
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
  ["sleep", "slept", "slept"]
];

arrayVerbos.sort(function (a, b){
    return a[0].localeCompare(b[0]);
})

const bodyTable = document.getElementsByTagName("tbody")[0];
for(let valueFile of arrayVerbos){
    const newFile = document.createElement("tr");
    for(let valueCelda of valueFile){
        const newcelda = document.createElement("td");
        newcelda.innerText = valueCelda;
        (newFile).appendChild(newcelda);
    }
    (bodyTable).appendChild(newFile);
}



