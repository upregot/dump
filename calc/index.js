const numero1 = document.getElementById("n1")
const operador = document.getElementById("operador")
const numero2 = document.getElementById("n2")
const botonBorrar = document.getElementById("botonBorrar")
const botonCalcular = document.getElementById("botonCalcular")
const botonResultado = document.getElementById("resultado")

botonCalcular.addEventListener("click", calcular)
botonBorrar.addEventListener("click", borrar)
function calcular() {
    const n1 = parseFloat(numero1.value)
    const op = operador.value
    const n2 = parseFloat(numero2.value)
    let resultado;

    switch (op) {
        case "+":
            resultado = n1 + n2
            break    
        case "-":
            resultado = n1 - n2
            break
        case "*":
            resultado = n1 * n2
            break
        case "/":
            if (n2 !== 0) {
                resultado = n1 / n2
            } else {
                resultado = "no puedes dividir entre 0."
            }
            break
        default:
            resultado = "Operador indefinido."
            break
    }
    
    if (resultado !== undefined) {
        botonResultado.innerText = resultado
    } else {
        botonResultado.innerText = "Error: resultado no definido."
    }
}



function borrar() {
    numero1.value = ""
    operador.value = ""
    numero2.value = ""
    botonResultado.innerText = ""
}
