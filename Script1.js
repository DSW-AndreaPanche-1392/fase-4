// JavaScript source code
function VerificarRespuestas(){
    let total = 5;   
    let puntos = 0;

    let myForm = document.forms["formulario"];
    let respuestas = ["b","a","b","a","b"];

    for(let i = 1; i <= total; i++){
        if(myForm["r" + i].value == null || myForm["r" + i].value == ""){
            alert("Debe responder todas las preguntas ");
            return false;

        }else{
           if (myForm["r" + i].value == respuestas[i - 1]){
               ++puntos;
           }
        }
   }
let resultado = document.getElementById("resultado");
resultado.innerHTML= "<h3>Obtuviste <span>" + puntos + " </span> de<span> " + total + " </span>puntos posibles</h3>";
return false;
} 