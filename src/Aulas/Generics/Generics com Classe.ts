export class Pessoa<T,U> {
    constructor(public nome: T, public idade: U) {

    }
}

const pessoa1 = new Pessoa('Luiz', 30);

export class Pilha<T> {
    private contador: number = 0;
    private elementos: {[k: number]: T} = {};

    public push(elemento: T): void{
        this.elementos[this.contador] = elemento;
        this.contador++;
    }

    public isEmpty(): boolean{
        return this.contador === 0;
    }

    public pop(): T | void{
        if(this.isEmpty()){
            return undefined;
        }
        this.contador--;
        const elemento = this.elementos[this.contador];
        delete this.elementos[this.contador];
        return elemento;
    }

    public length(): number{
        return this.contador;
    }

    public show(): void{
        for(let i = 0; i < this.contador; i++){
            console.log(this.elementos[i]);   
        }
    }
}

const pilha = new Pilha<number>();

pilha.push(1);
pilha.push(2); 
pilha.push(3);
pilha.push(4);


while(!pilha.isEmpty()){
    console.log(pilha.pop());
    
}