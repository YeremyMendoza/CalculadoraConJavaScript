export function Operaciones(){
    this.suma = function(x){
        return function(y){
            return parseInt(x) + parseInt(y);
        }
    }
    this.resta = function(x){
        return function(y){
            return parseInt(x) - parseInt(y);
        }
    }
    this.multiplicacion = function(x){
        return function(y){
            return parseInt(x) * parseInt(y);
        }
    }
    this.division = function(x){
        return function(y){
            return y == 0? 0:parseInt(x) / parseInt(y);
        }
    }
}