type Veiculo = {
    marca: string,
    ano: number;
};

type Car = {
    brand: Veiculo['marca'];
    year: Veiculo['ano'];
    name: string;   
}

const carro: Car = {
    brand: 'ford',
    year: 2024,
    name: 'Carro'
}


console.log(carro);
