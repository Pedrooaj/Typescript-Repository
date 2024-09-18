// abstract pode ser usado como this em atributos ou metodos referenciando a classe filha!
export abstract class Personagem{
    // Atributos abstract obrigam a classes filhas terem atribuir o valor!!
    protected abstract emoji: string;

    constructor(
        protected nome: string,
        protected ataque: number,
        protected vida: number
    ){}
    
    public atacar(personagem: Personagem): void{
        this.bordao();
        console.log(this.emoji + " - " + this.nome + " Esta atacando...");        
        personagem.perderVida(this.ataque);
    }

    public perderVida(forcaAtaque: number): void{
        this.vida -= forcaAtaque;
        console.log(this.emoji + " - " + this.nome + " agora tem " + this.vida + " de vida" );
    }

    // Metodo abstract obriga a classe filha ter a mesma função definida como tal
    public abstract bordao(): void
}

export class Guerreira extends Personagem {
    // aqui esta o atributo abstract da classe Personagem extends para classe Guerreira
    protected emoji = '\u{1F9DD}';

    // aqui esta o metodo abstract da classe Personagem extends para classe Guerreira
    public bordao(): void{
        console.log(this.emoji + " - " + " Guerreira ao ataque!!");
    }
}
export class Monstro extends Personagem {
    protected emoji = '\u{1F9DF}';
    public bordao(): void {
        console.log(this.emoji + " - " + " Morra maldito!!!");
    }
}

const g1 = new Guerreira('Guerreira', 100, 1000);
const m1 = new Monstro('Monstro', 87, 1000);

g1.atacar(m1);

