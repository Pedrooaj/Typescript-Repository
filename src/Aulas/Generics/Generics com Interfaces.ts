interface PessoaProtocolo<T = string, U = number> {
    nome: T;
    sobrenome: T;
    idade: U;    
}

interface Professor<T,U> {
    nome: T;
    sobrenome: T;
    idade: U;
}


// De forma declarada ao usar interface
const professor: Professor<string, number> = {
    nome: 'Pedro',
    sobrenome: "Lemos",
    idade: 18
}


// interface ja declarou os tipos
const Aluno: PessoaProtocolo = {
    nome: 'Pedro',
    sobrenome: "Lemos",
    idade: 18
}