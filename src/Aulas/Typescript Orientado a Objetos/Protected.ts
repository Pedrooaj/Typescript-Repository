export class Empresa{
    public readonly nome: string;
    protected readonly colab: Colaborador[] = [];
    private readonly cnpj: string;

    constructor(nome: string, cnpj: string){
        this.nome = nome;  
        this.cnpj = cnpj;
    }   

    public addColab(colaborador : Colaborador): void{
        this.colab.push(colaborador);
    }

    public exibirColabs(): void{
        for(const colab of this.colab){
            console.log(colab);
        }
    }

    public getNome(): string{
        return this.nome;
    }
}


// Outra forma de inicializar um objeto com construtor
class Colaborador{
    constructor(
        public readonly nome: string,
        public readonly sobrenome: string,
    ){}
}

export class Udemy extends Empresa{
    constructor(){
        super("Udemy", "CNPJ")
    }

    popColab(): Colaborador | null{
        const colabRemoved = this.colab.pop();
        return colabRemoved ? colabRemoved : null;
    }
}


const empresa1 = new Udemy();

const e1 = new Empresa("Empresa-1", '12312-123/0');
const colab1 = new Colaborador("colab",'ada');

e1.addColab(colab1)
e1.addColab({
    nome: "nome",
    sobrenome: "sobrenome"})
e1.exibirColabs()

empresa1.addColab({
    nome: "asda",
    sobrenome: "dasda"
})


const colabRemoved = empresa1.popColab();

console.log(colabRemoved);
