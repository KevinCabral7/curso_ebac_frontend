function Carro(marca, modelo){
    this.marca = marca;
    this.modelo = modelo;
    this.ligado = false;
}

function CarroEsportivo(marca, modelo, velocidadeMaxima) {
    this.velocidadeMaxima = velocidadeMaxima;
    this.velocidadeAtual = 0;
    Carro.call(this, marca, modelo)
}


function CarroSedan (marca, modelo, numPortas) {
    this.numPortas = numPortas;
    Carro.call(this, marca, modelo)
}

const ferrari = new CarroEsportivo('Ferrari', '488 GTB', 340);

console.log(ferrari)
const audi = new CarroSedan('Audi', 'A4', 4);

console.log(audi)
const bmw = new CarroSedan('BMW', 'Series 3', 4);

console.log(bmw);