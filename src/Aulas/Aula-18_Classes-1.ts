export class Empresa{
    public readonly nome: string;
    private readonly colab: Colaborador[] = [];
    protected readonly cpnj: string;


    

    constructor(nome: string, cpnj: string){
        this.nome = nome;  
        this.cpnj = cpnj;
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

class Colaborador{
    public readonly nome: string; 
    public readonly sobrenome: string;
    
    constructor(nome: string, sobrenome: string){
        this.nome = nome;
        this.sobrenome = nome;
    }
}
// Outra forma de inicializar um objeto com construtor
// class Colaborador{
//     constructor(
//         public readonly nome: string,
//         public readonly sobreneme: string,
//     ){}
// }





const e1 = new Empresa("Empresa-1", '12312-123/0');
const colab1 = new Colaborador("colab",'ada');

e1.addColab(colab1)
e1.addColab({
    nome: "nome",
    sobrenome: "sobrenome"})
e1.exibirColabs()

