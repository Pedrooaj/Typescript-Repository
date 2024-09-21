# TypeScript Orientado a Objetos

**TypeScript** suporta conceitos de **programação orientada a objetos (POO)**, permitindo que os desenvolvedores trabalhem com **classes**, **interfaces**, **herança**, **encapsulamento** e **polimorfismo**. A combinação de tipagem estática com os conceitos de POO faz de TypeScript uma poderosa ferramenta para criar sistemas complexos e bem estruturados.

## Conceitos Principais

### 1. **Classes**
As **classes** são blocos básicos da POO em TypeScript. Elas encapsulam dados (propriedades) e comportamento (métodos) em uma única entidade.

Exemplo de uma classe simples:

```bash
class Pessoa {
  nome: string;
  idade: number;

  constructor(nome: string, idade: number) {
    this.nome = nome;
    this.idade = idade;
  }

  cumprimentar(): string {
    return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`;
  }
}

const pessoa = new Pessoa("João", 25);
console.log(pessoa.cumprimentar()); // Saída: Olá, meu nome é João e tenho 25 anos.
```

### 2. Herança
TypeScript suporta herança, permitindo que uma classe derive de outra. Isso promove o reaproveitamento de código.

Exemplo de herança:

```bash
class Pessoa {
  nome: string;
  idade: number;

  constructor(nome: string, idade: number) {
    this.nome = nome;
    this.idade = idade;
  }

  cumprimentar(): string {
    return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`;
  }
}

const pessoa = new Pessoa("João", 25);
console.log(pessoa.cumprimentar()); // Saída: Olá, meu nome é João e tenho 25 anos.

```

### 3. Encapsulamento
O encapsulamento protege o acesso direto aos dados da classe, utilizando modificadores de acesso como public, private, e protected.

- public: Acessível de qualquer lugar.
- private: Acessível apenas dentro da classe.
- protected: Acessível dentro da classe e nas subclasses.

```bash
class ContaBancaria {
  private saldo: number;

  constructor(saldoInicial: number) {
    this.saldo = saldoInicial;
  }

  depositar(valor: number) {
    this.saldo += valor;
  }

  consultarSaldo(): number {
    return this.saldo;
  }
}

const conta = new ContaBancaria(1000);
conta.depositar(500);
console.log(conta.consultarSaldo()); // Saída: 1500


```


### 4. Polimorfismo
TypeScript permite que métodos em subclasses sobrescrevam métodos da classe base, possibilitando o polimorfismo.


```bash
class Animal {
  emitirSom(): void {
    console.log("O animal faz um som.");
  }
}

class Cachorro extends Animal {
  emitirSom(): void {
    console.log("O cachorro late.");
  }
}

const animal: Animal = new Cachorro();
animal.emitirSom(); // Saída: O cachorro late.

```


### 5. Interfaces
As interfaces são contratos que definem a estrutura de objetos, garantindo que eles implementem propriedades e métodos específicos.

```bash
interface Veiculo {
  marca: string;
  modelo: string;
  acelerar(): void;
}

class Carro implements Veiculo {
  marca: string;
  modelo: string;

  constructor(marca: string, modelo: string) {
    this.marca = marca;
    this.modelo = modelo;
  }

  acelerar(): void {
    console.log(`${this.marca} ${this.modelo} está acelerando!`);
  }
}

const carro = new Carro("Toyota", "Corolla");
carro.acelerar(); // Saída: Toyota Corolla está acelerando!

```

