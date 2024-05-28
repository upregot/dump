//desafio en desarrollo de software
// Importa la biblioteca seedrandom
const seedrandom = require("seedrandom");

// Genera un número aleatorio utilizando el generador

const generarArray = (semilla) => {
  let arrayNumeros = new Array();
  const rng = seedrandom(semilla);
  for (i = 0; i <= 1000000; i++) {
    let numeroRandom = rng.int32();
    arrayNumeros.push(numeroRandom);
  }
  return arrayNumeros;
};

const contarPorSigno = (array) => {
  //aplico funcion filter para guardar en arreglos los numeros positivos y negativos, luego devuelvo la longitud de cada arreglo.
  let positivos = array.filter((e) => e > 0);
  let negativos = array.filter((e) => e < 0);
  return { positivos: positivos.length, negativos: negativos.length };
};
console.log(generarArray("1763519"));

const contarDivisibles = (array) => {
  let divisibles = 0;
  for (i = 0; i <= array.length; i++) {
    if (array[i] % 7 === 0 || array[i] % 7 === 3 || array[i] % 7 === 5 || array[i] % 7 === 6) {
      divisibles++;
  }
  
  }
  console.log(divisibles)
  return divisibles;
};

function contarSegunAnteultimoDigito(numeros) {
  //contar los numeros donde su penultimo digito coincide con el indice.
  let contadores = Array.from({ length: 10 }, () => 0);

  numeros.forEach((numero) => {
    let anteultimoDigito = Math.floor(numero / 10) % 10;
    contadores[anteultimoDigito]++;
  });

  return contadores;
}
const buscarMenor = (array) => {
  //busca el menor en un array y retorna su posicion
  let primer = true;
  let menor = array[0];
  let posicion = 1;

  for (let i = 0; i < array.length - 1; i++) {
    if (primer) {
      primer = false;
      menor = array[i];
      posicion = i + 1;
    } else {
      if (array[i] < menor) {
        menor = array[i];
        posicion = i + 1;
      }
    }
  }

  return {
    "el menor numero encontrado es:": menor,
    "y se encuentra en la posicion": posicion,
  };
};
const compararSigno = (n1, n2) => {
  return n1 * n2 > 0;
};

const contarSignoAnterior = (array) => {
  //cuentra la cantidad de numeros que tienen mismo signo que su numero anterior en el array
  let cantidadMismoSigno = 0;
  for (i = 1; i <= array.length; i++) {
    let actual = array[i];
    let anterior = array[i - 1];
    if (compararSigno(anterior, actual)) {
      cantidadMismoSigno++;
    }
  }
  return cantidadMismoSigno;
};
const tieneSeisDigitos = (numero) => {
  if (numero === 0) {
    return false;
  }
  let contador = 0;
  let num = numero;
  while (Math.abs(num) >= 1) {
    num /= 10;
    contador++;
  }
  return contador === 6;
};

const calcularPromedioSeisDigitos = (array) => {
  //filtra los numeros con 6 digitos y calcula el promedio
  const filtrados = array.filter((e) => tieneSeisDigitos(e));

  if (filtrados.length === 0) {
    return 0;
  }

  const suma = filtrados.reduce((acc, curr) => acc + curr, 0);
  const promedio = suma / filtrados.length;

  return Math.round(promedio);
};

module.exports = {
  generarArray,
  contarPorSigno,
  contarDivisibles,
  contarSegunAnteultimoDigito,
  buscarMenor,
  contarSignoAnterior,
  calcularPromedioSeisDigitos,
};
