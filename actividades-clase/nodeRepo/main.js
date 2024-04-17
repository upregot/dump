const readline = require('readline');
const {
    generarArray,
    contarPorSigno,
    contarDivisibles,
    contarSegunAnteultimoDigito,
    buscarMenor,
    contarSignoAnterior,
    calcularPromedioSeisDigitos
} = require('./desafio.js'); // Asegúrate de cambiar './archivo.js' por la ruta correcta del archivo que contiene tus métodos

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let array = null;

function cargarArray() {
    array = generarArray(1763519);
    console.log("Array generado correctamente.");
    mostrarMenu();
}

function mostrarMenu() {
    console.log("Menú:");
    console.log("1. Contar la cantidad de números positivos y negativos");
    console.log("2. Contar la cantidad de números cuyo resto al dividirlos en 7 sea exactamente 0, 3, 5 o 6");
    console.log("3. Contar las cantidad de números según su penúltimo dígito coincida con el índice");
    console.log("4. Encontrar el menor número y su posición");
    console.log("5. Contar la cantidad de números cuyo signo sea igual al del anterior");
    console.log("6. Calcular el promedio de todos los números que contengan exactamente 6 dígitos");
    console.log("7. Salir");
}

function ejecutarOpcion(opcion) {
    switch (opcion) {
        case '1':
            if (!array) {
                console.log("Debe cargar el array primero.");
                break;
            }
            const { positivos: positivos1, negativos: negativos1 } = contarPorSigno(array);
            console.log(`Cantidad de números positivos: ${positivos1}`);
            console.log(`Cantidad de números negativos: ${negativos1}`);
            break;
        case '2':
            if (!array) {
                console.log("Debe cargar el array primero.");
                break;
            }
            const { 'cantidad de numeros cuyo resto al dividirlos en 7 sea exactamente 0,3,5,6 ': cantidadDivisibles } = contarDivisibles(array);
            console.log(cantidadDivisibles);
            break;
        case '3':
            if (!array) {
                console.log("Debe cargar el array primero.");
                break;
            }
            const contadores = contarSegunAnteultimoDigito(array);
            console.log("Cantidad de números según su penúltimo dígito coincida con el índice:");
            contadores.forEach((contador, indice) => {
                console.log(`Índice ${indice}: ${contador}`);
            });
            break;
        case '4':
            if (!array) {
                console.log("Debe cargar el array primero.");
                break;
            }
            const { 'el menor numero encontrado es:': menor, 'y se encuentra en la posicion': posicion } = buscarMenor(array);
            console.log(`El menor número encontrado es: ${menor} y se encuentra en la posición ${posicion}`);
            break;
        case '5':
            if (!array) {
                console.log("Debe cargar el array primero.");
                break;
            }
            const cantidadMismoSigno = contarSignoAnterior(array);
            console.log(`Cantidad de números cuyo signo sea igual al del anterior: ${cantidadMismoSigno}`);
            break;
        case '6':
            if (!array) {
                console.log("Debe cargar el array primero.");
                break;
            }
            const promedio = calcularPromedioSeisDigitos(array);
            console.log(`Promedio de todos los números que contengan exactamente 6 dígitos: ${promedio}`);
            break;
        case '7':
            console.log("Saliendo del programa.");
            rl.close();
            break;
        default:
            console.log("Opción inválida.");
    }
    if (opcion !== '7') {
        console.log('\n');
        mostrarMenu();
    }
}

cargarArray();
rl.on('line', (respuesta) => {
    ejecutarOpcion(respuesta);
});
