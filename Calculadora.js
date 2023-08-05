import { Pantalla } from "./Pantalla.js";
import { Operaciones } from "./Operaciones.js";

let logica = new Pantalla();
let operaciones = new Operaciones();

let buttons = document.getElementsByTagName("button");
let divPantalla = document.getElementById("pantalla");
let divResultado = document.getElementById("resultado");

logica.divResultado = divResultado;

for(let i =0; i < buttons.length; i++){
    buttons[i].addEventListener("click", function(){
        limpiar(this.value);
    })
}

function limpiar(valor){
    switch (valor) {
        case "=":
            divResultado.innerHTML = logica.getAcumulador();
            logica.ejecutar(valor, operaciones);
            break;
        case "del":
            divPantalla.innerHTML = "";
            divResultado.innerHTML = "";
            logica.ejecutar(valor, operaciones);
            break;
        default:
            divPantalla.innerHTML += valor;
            logica.ejecutar(valor, operaciones);
            break;
    }
}
