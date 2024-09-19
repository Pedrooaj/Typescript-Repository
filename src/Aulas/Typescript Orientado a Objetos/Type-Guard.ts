export function add(a: unknown, b: unknown): string | number {
    return typeof a === "number" && typeof b === "number" ? a + b : `${a}${b}`;
}

console.log(add(1, 1));
console.log(add("Pedro", "Lemos"));

type Pessoa = {
    tipo: 'pessoa', nome: string;
}

type Animal = {
    tipo: 'animal', cor: string;
}

// interface PessoaOrAnimal implements Pessoa,Animal {}
type PessoaOrAnimal = Pessoa | Animal;

class Aluno implements Pessoa {
    tipo: "pessoa" = "pessoa";
    constructor(
        public nome: string,

    ) { }
}

function mostraNome(obj: PessoaOrAnimal): void {
    // verificando o tipo como objeto!!
    // 'nome' in obj ?console.log(obj.nome) : null;
    // verificando o tipo!!
    // obj instanceof Aluno ? console.log(obj.nome) : null;
    switch (obj.tipo) {
        case "pessoa":
            console.log(obj.nome);
            return
        case "animal":
            console.log("Isso e um animal " + obj.cor);
            return
    }

}

mostraNome(new Aluno("João"))
mostraNome({ tipo: 'animal', cor: 'rosa' })