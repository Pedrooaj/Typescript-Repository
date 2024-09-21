// cria um tipo com base em um objeto existente e atributos do objeto
type coresObj = typeof coresObj;

// keyof registra o valor do atributo a um tipo
type coresChaves = keyof coresObj;
const coresObj = {
    vermelho: 'red',
    azul: 'blue',
    verde: 'green',
    roxo: 'purple'
}


function traduzirCor(cor: coresChaves, cores: coresObj): string{
    return cores[cor];
}  

console.log(traduzirCor('vermelho', coresObj));
