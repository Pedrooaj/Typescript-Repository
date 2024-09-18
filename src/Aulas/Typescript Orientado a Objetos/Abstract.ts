export class Personagem{
    constructor(
        protected nome: string,
        protected ataque: number,
        protected vida: number
    ){}
    
    public atacar(personagem: Personagem): void{
        console.log(this.nome + "Esta atacando...");
        
        personagem.perderVida(this.ataque);
    }

    public perderVida(forcaAtaque: number): void{
        console.log(this.nome + " agora tem " + this.vida + " de vida" );
        this.vida -= forcaAtaque;
    }
}

export class Guerreira extends Personagem {}
export class Monstro extends Personagem {}

const g1 = new Guerreira('Guerreira', 100, 1000);
const m1 = new Monstro('Monstro', 87, 1000);

g1.atacar(m1);
