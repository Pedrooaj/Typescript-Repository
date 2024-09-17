// Tipo Enum estrutura de dados não ordenada

enum Cores {
    VERMELHO = 10,
    AZUL = 100,
    VERDE = 1000,
}

enum Cores {
    ROXO = 'ROXO',
    ROSA = 201,
}

console.log(Cores);
console.log(Cores.VERMELHO);
console.log(Cores[10]);


function escolhaAcor(cor: Cores): void{
    console.log(Cores[cor]);
}

escolhaAcor(Cores.ROSA)


export default 1;