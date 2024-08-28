// Intersection Types & AND e Union Types | OR

type TemNome = {
    nome: string;
}

type TemSobrenome = { 
    sobrenome: string; 
}

type TemIdade = { 
    idade: number;
}

type AB = "A" | "B"
type AC = "A" | "C"
type AD = "A" | "D"


type Intersecao = AB & AC & AD;

type Pessoa = TemNome & TemIdade & TemSobrenome; // Funciona como AND


const pessoa: Pessoa = {
    nome: "Pedro",
    sobrenome: "lemos",
    idade: 18
}