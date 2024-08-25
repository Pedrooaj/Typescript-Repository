// Tipo void onde você pode atribuir uma função que nao retorna nada
function semRetorno(...args: string[]): void {
  console.log(args.join(' '));
}

const pessoa = {
  nome: "Luiz",
  sobrenome: "Otavio",
  exibirNome(): void {
    console.log(this.nome + ' ' + this.sobrenome);
  }
};

pessoa.exibirNome()
semRetorno("Pedro", "Antonio")
