const seedrandom = require("seedrandom");

// Función para generar un array de números aleatorios
function generarArray(semilla) {
  const rng = seedrandom(semilla);
  const array = Array.from({ length: 1000000 }, () => rng.int32());
  return array;
}

// Función para contar la cantidad de números positivos y negativos
function contarPorSigno(array) {
  let positivos = 0;
  let negativos = 0;
  array.forEach((num) => {
    if (num > 0) positivos++;
    else if (num < 0) negativos++;
  });
  return { positivos, negativos };
}

// Función para contar la cantidad de números cuyo resto al dividirlos en 7 sea 0, 3, 5 o 6
function contarDivisibles(array) {
  let divisibles = array.filter((num) => num % 7 === 0 || num % 7 === 3 || num % 7 === 5 || num % 7 === 6);
  return divisibles.length;
}

// Función para contar la cantidad de números según su penúltimo dígito coincida con el índice
function contarSegunAnteultimoDigito(array) {
  let contadores = Array.from({ length: 10 }, () => 0);
  array.forEach((num) => {
    let anteultimoDigito = Math.floor(Math.abs(num) / 10) % 10;
    contadores[anteultimoDigito]++;
  });
  return contadores;
}

// Función para encontrar el menor número y su posición
function buscarMenor(array) {
  let menor = array[0];
  let posicion = 1;
  for (let i = 1; i < array.length; i++) {
    if (array[i] < menor) {
      menor = array[i];
      posicion = i + 1;
    }
  }
  return { menor, posicion };
}

// Función para contar la cantidad de números cuyo signo sea igual al del anterior
function contarSignoAnterior(array) {
  let cantidad = 0;
  for (let i = 1; i < array.length; i++) {
    if (Math.sign(array[i]) === Math.sign(array[i - 1])) cantidad++;
  }
  return cantidad;
}

// Función para calcular el promedio de todos los números que contengan exactamente 6 dígitos
function calcularPromedioSeisDigitos(array) {
  let numerosSeisDigitos = array.filter((num) => {
    let numAbs = Math.abs(num);
    return numAbs >= 100000 && numAbs < 1000000;
  });
  if (numerosSeisDigitos.length === 0) return 0;
  let suma = numerosSeisDigitos.reduce((total, num) => total + num, 0);
  return Math.round(suma / numerosSeisDigitos.length);
}

// Generar el array de números aleatorios
const array = generarArray("1763519");

// Obtener resultados de cada requerimiento
const { positivos, negativos } = contarPorSigno(array);
const cantidadDivisibles = contarDivisibles(array);
const contadoresSegunDigito = contarSegunAnteultimoDigito(array);
const { menor, posicion } = buscarMenor(array);
const cantidadSignoAnterior = contarSignoAnterior(array);
const promedioSeisDigitos = calcularPromedioSeisDigitos(array);

// Imprimir los resultados
console.log("Cantidad de números positivos:", positivos);
console.log("Cantidad de números negativos:", negativos);
console.log("Cantidad de números cuyo resto al dividirlos en 7 sea 0, 3, 5 o 6:", cantidadDivisibles);
console.log("Contadores según penúltimo dígito coincida con el índice:", contadoresSegunDigito);
console.log("Menor número encontrado:", menor, "en la posición:", posicion);
console.log("Cantidad de números cuyo signo sea igual al del anterior:", cantidadSignoAnterior);
console.log("Promedio de números con exactamente 6 dígitos:", promedioSeisDigitos);
