let operator1;
let operator2;
let operation;

function calculadora () {
    let resultados = document.getElementById("resultados");
    let reset = document.getElementById("reset");
    let suma = document.getElementById("suma");
    let resta = document.getElementById ("resta");
    let multiplicacion = document.getElementById("multiplicacion");
    let division = document.getElementById("division");
    let igual = document.getElementById("igual");
    let uno = document.getElementById("uno");
    let dos = document.getElementById("dos");
    let tres = document.getElementById("tres");
    let cuatro = document.getElementById("cuatro");
    let cinco = document.getElementById("cinco");
    let seis = document.getElementById("seis");
    let siete = document.getElementById("siete");
    let ocho = document.getElementById("ocho");
    let nueve = document.getElementById("nueve");
    let cero = document.getElementById("cero");
   

    uno.onclick = function(e){
        resultados.textContent = resultados.textContent + "1";
    } 
    dos.onclick = function(e){
        resultados.textContent = resultados.textContent + "2";
    } 
    tres.onclick = function(e){
        resultados.textContent = resultados.textContent + "3";
    } 
    cuatro.onclick = function(e){
        resultados.textContent = resultados.textContent + "4";
    } 
    cinco.onclick = function(e){
        resultados.textContent = resultados.textContent + "5";
    } 
    seis.onclick = function(e){
        resultados.textContent = resultados.textContent + "6";
    } 
    siete.onclick = function(e){
        resultados.textContent = resultados.textContent + "7";
    } 
    ocho.onclick = function(e){
        resultados.textContent = resultados.textContent + "8";
    } 
    nueve.onclick = function(e){
        resultados.textContent = resultados.textContent + "9";
    } 
    cero.onclick = function(e){
        resultados.textContent = resultados.textContent + "0";
    } 

    reset.onclick = function(e){
      resetButton();
      
    } 
    suma.onclick = function(e){
        operator1 = resultados.textContent;
        operation = "+";
      cleaner ();
      } 

    resta.onclick = function(e){
        operator1 = resultados.textContent;
        operation = "-";
        cleaner ();
      } 
    
    multiplicacion.onclick = function(e){
        operator1 = resultados.textContent;
        operation = "*";
        cleaner ();
      } 

    division.onclick = function(e){
        operator1 = resultados.textContent;
        operation = "/";
        cleaner ();
      } 
      
      igual.onclick = function(e){
        operator2 = resultados.textContent;
        solucion ();
      } 
}
const cleaner = () => {
resultados.textContent = "";
}

const resetButton =() => {
resultados.textContent = "";
operator1 = "";
operator2 = "";
operation = "";
}

const solucion = () => {
    let result=0;
    switch(operation) {
        case "+":
            result = parseFloat(operator1) + parseFloat(operator2);
        break;
        
        case "-":
            result = parseFloat(operator1) - parseFloat(operator2);
        break;

        case "*":
            result = parseFloat(operator1) * parseFloat(operator2);
        break;

        case "/":
            result = parseFloat(operator1) / parseFloat(operator2);
            break;
    }
    resetButton();
    resultados.textContent=result;
}

