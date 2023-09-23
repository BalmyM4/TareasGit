var arregloOperaciones = [];
var primerIgual = 0;

function escribir(value) {
    document.getElementById('entrada').value += value;
}

function calcular() {
    let operacion = document.getElementById('entrada').value;
    let resultado = eval(operacion);
    document.getElementById('entrada').value = resultado;

    arregloOperaciones.push(" "+operacion + "=" + resultado+" ");
    console.log(arregloOperaciones);
    if(primerIgual == 0){
        document.getElementById('arreglo').textContent = " ⇧ Aprieta el botón para ver el arreglo.";
        primerIgual = 1;
    }
} 

function borrar() {
    let operacion = document.getElementById('entrada').value;
    if(operacion.length == 1){
        document.getElementById('entrada').value = "";
    }
    else{
        let arreglo = operacion.split("");
        arreglo.pop();
        let cadenaNueva = "";
        for(let i=0; i<arreglo.length; i++){
            cadenaNueva += arreglo[i];
        }
        document.getElementById('entrada').value = cadenaNueva;
    }
}

function borrarTodo() {
    document.getElementById('entrada').value = "";
}

function imprimirArreglo () {
    document.getElementById('arreglo').textContent = "[ "+ arregloOperaciones+" ]";
}