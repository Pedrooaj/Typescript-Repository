// Type Alias

type Idade = number;
type Pessoa = { 
  nome: string;
  idade: Idade;
  salario: number;
  corPreferida?: string;
};


type CorRGB = 'Vemelho' | "Verde" | "Azul";
type CorCMYK = "Ciano" | "Magenta" | "Amarelo" | "Preto";

type corPreferida = CorRGB | CorCMYK;

const pessoa: Pessoa = {
    nome: "Pedro",
    idade: 18,
    salario: 1200
};




export function setCorPreferida(pessoa: Pessoa, cor: corPreferida): Pessoa{
  return {
    ...pessoa, corPreferida: cor
  }
}

console.log(pessoa);

console.log(setCorPreferida(pessoa, "Amarelo"));
