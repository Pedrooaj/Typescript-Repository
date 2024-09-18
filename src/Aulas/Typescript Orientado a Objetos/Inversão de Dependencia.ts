export class Escritor{
    private ferramenta: Ferramenta | null = null;
    constructor(
        private nome: string,
    ){}

    public getNome(): string{
        return this.nome;
    }

    public setFerramenta(ferramenta: Ferramenta): void{
        this.ferramenta = ferramenta;
    }

    public escrever(): void{
        this.ferramenta != null ? this.ferramenta.escrever() : console.log("Não posso escrever sem ferramenta");
    }
}


export abstract class Ferramenta{
    constructor(
        private nome: string
    ){}

    abstract escrever():void;

    public getNome(): string{
        return this.nome;
    }
}

export class Caneta extends Ferramenta{
    escrever(): void {
        console.log(`${this.getNome()} esta escrevendo...`);
    }
}

export class MaquinaDeEscrever extends Ferramenta{
    escrever(): void {
        console.log(`${this.getNome()} esta digitando... `);
    }
}


const escritor = new Escritor("Pedro");
const caneta = new Caneta("Bic");
const Maquina = new MaquinaDeEscrever("Maquina");


escritor.escrever();

escritor.setFerramenta(caneta);
escritor.escrever();

escritor.setFerramenta(Maquina);
escritor.escrever();


