export class Carro{
    private readonly motor = new Motor();

    public ligar(): void{
        this.motor.ligar();
    }

    public parar(): void{
        this.motor.parar();
    }

    public acelerar(): void{
        this.motor.acelerar();
    }

    public desligar(): void{
        this.motor.desligar();
    }
    
}

export class Motor{
    public ligar(): void{
        console.log("Motor Ligado...");
    }

    public parar(): void{
        console.log("Motor Desligado...");
    }

    public acelerar(): void{
        console.log("Motor Acelerando...");
    }

    public desligar(): void{
        console.log("Motor Desligado...");
        
    }
}

const carro = new Carro();  

carro.ligar();
carro.acelerar();
carro.parar();
carro.desligar();
