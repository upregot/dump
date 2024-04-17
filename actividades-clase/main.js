console.log("hola mundo")

class Arreglo {
    constructor() {
        this.array = new Array()
    }

    cargarArray = () => {
        for (let i = 1; i <= 20; i++) {
            this.array.push(i)
            
        } console.log(this.array)
    }

    mapearArray = () => {
        return this.array.map(x => x * 0)

    }
}

const unArray = new Arreglo()
unArray.cargarArray()
console.log(unArray.mapearArray())
