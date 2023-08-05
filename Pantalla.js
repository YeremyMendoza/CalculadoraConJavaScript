export function Pantalla(){
    let acumulador = "";
    let operacion = null;
    let resultado = null;
    this.divResultado = null;

    this.getResultado =  function(){
        return thisresultado;
    }
    this.setAcumulador = function(x){
        acumulador += x.toString();
    }
    this.getAcumulador = function(){
        return acumulador;
    }
    this.ejecutar = function(valor, operaciones){
        switch (valor) {
            case "+":
                this.existeOperacion();
                operacion = operacion == null?
                            operaciones.suma(this.getAcumulador()):operacion;
                acumulador = "";
                break;
            case "-":
                this.existeOperacion();
                operacion = operacion == null?operaciones.resta(this.getAcumulador()):operacion;
                acumulador = "";
                break;
            case "x":
                this.existeOperacion();
                operacion = operacion == null?operaciones.multiplicacion(this.getAcumulador()):operacion;
                acumulador = "";
                break;
            case "/":
                this.existeOperacion();
                operacion = operacion == null?operaciones.division(this.getAcumulador()):operacion;
                acumulador = "";
                break;
            case "=":
                this.existeOperacion();
                break;
            case "del":
                acumulador = "";
                operacion = null;
                resultado = null;
                break;
            default:
                this.setAcumulador(valor);
                break;
        }
    }
    this.existeOperacion = function(){
        if(typeof operacion == "function"){
            resultado = operacion(this.getAcumulador());
            acumulador = "";
            operacion = null;
            this.setAcumulador(resultado);
            this.divResultado.innerHTML = this.getAcumulador();
            console.log(this.getAcumulador())
        }
    }
}