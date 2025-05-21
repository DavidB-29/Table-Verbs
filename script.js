const searcher = document.getElementById("buscarverbo");
const tablee = document.getElementById("tablee");

searcher.addEventListener("input", filtrartabla);

function filtrartabla(){
    const lupa = searcher.value.toLowerCase();
    const filas = tablee.getElementsByTagName("tr");
    for(let fila of filas){
        const celds = fila.getElementsByTagName("tr");
        if(celds.length > 0){
            const verbo = celds[0].innerText.toLowerCase();
            if(verbo.includes(lupa)){
                fila.style.display = "";
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
  ["Sleep", "Slept", "Slept"],
  ["Eat", "Ate", "Eaten"],
  ["Leave", "Left", "Left"]
];

arrayVerbos.sort (function(a, b){
return a[0].localcompare(b[0]);
 })

 const bodytable = document.getElementsByTagName("tbody")[0];

 for(let valorFila of arrayVerbos){
    const newfila = document.createElement("tr");
    for(let valorCelda of valorFila){
        const newcelds = document.createElement("td");
        newcelds.innerText = valorCelda;
        (newfila).appendChild(newcelds)
    }
    (bodytable).appendChild(newfila);
 }