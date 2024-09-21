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

export class SubCalculadora extends Calculadora{
    public potencia(n: number): this{
        this.numero **= n;
        return this;
    }    
}


const calc = new Calculadora(10);

calc.add(5).mult(2).div(2).sub(5);
console.log(calc.numero);

// GoF - Builder

export class RequestBuilder {
    private method: 'post' | 'get' | null = null;
    private url: string | null = null;

    public setMethod(method: 'get' | 'post'): this{
        this.method = method;
        return this;
    }

    public setUrl(url: string): this{
        this.url = url;
        return this;
    }

    public send(): void{
        console.log(`Enviando dados via ${this.method} para ${this.url}`);       
    }
}


const Request = new RequestBuilder();

Request.setUrl("https://google.com").setMethod("post");
Request.send();
