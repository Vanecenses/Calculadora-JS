// function probando (){
// console.warn('esto es un error');

    // let num1 = parseInt(prompt('escribe un numero'))
    // let num2 = parseInt(prompt('escribe un numero'))
// document.getElementById('resultado').innerHTML= num1 + num2
// }  
 


function calculadora () {
    let calculoNumero = prompt('¿que opercacion desea realizar?')
    let num1 = parseInt(prompt('introduce el primer numero'))
    let num2 = parseInt(prompt('introduce el segundo numero'))
    
    
    if (calculoNumero === 'sumar' ||  calculoNumero === '+') {
        document.getElementById('resultado').innerHTML = num1 + num2
    }else if (calculoNumero === 'restar' || calculoNumero === '-' ) {
        document.getElementById('resultado').innerHTML = num1 - num2
    }else if ( calculoNumero === 'multiplicar' || calculoNumero === '*') {
        document.getElementById('resultado').innerHTML = num1 * num2
    }else if ( calculoNumero === 'dividir' || calculoNumero === '/'){
        document.getElementById('resultado').innerHTML = num1 / num2
    }else {
        alert ( 'escribe nuevamente la oparacion')
    }
}  




