type ObeterChavefn = <O, K extends keyof O>(objeto: O, chave: K) => O[K]; 

const obterChave: ObeterChavefn = (objeto, chave) => objeto[chave];

const animal = {
    cor: 'Rosa',
    vacinas: ['Vacina1', 'Vacina2'],
};

const vacinas = obterChave(animal, 'vacinas');
const cor = obterChave(animal, 'cor');
console.log(vacinas, cor);

