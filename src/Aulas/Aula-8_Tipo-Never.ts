//tipo never serve normalmente para lançar erros

function criaError():never {
    throw new Error('Erro Qualquer')
}

criaError()