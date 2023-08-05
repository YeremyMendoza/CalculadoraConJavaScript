import { Calculadora } from "./Calculadora.js";

let buttons = document.getElementsByTagName("button");
let pantalla = document.getElementById("pantalla");
let resultado = document.getElementById("resultado");
let prueba = "";

for(let i =0; i < buttons.length; i++){
    buttons[i].addEventListener("click", function(){
        console.log(this.value)
    })
}

