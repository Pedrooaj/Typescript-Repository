export class Calculadora{
    constructor(public numero: number){}
    public add(n: number): this{
        this.numero += n;
        return this;
    }

    public sub(n: number): this{
        this.numero -= n;
        return this;
    }

    public div(n: number): this{
        this.numero /= n;
        return this;
    }

    public mult(n: number): this{
        this.numero *= n;
        return this;
    }
}