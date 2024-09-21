
## Generics em TypeScript

Generics em TypeScript são uma maneira de criar componentes reutilizáveis que funcionam com diferentes tipos de dados, mantendo a segurança de tipos. Eles permitem que funções, classes e interfaces trabalhem de forma agnóstica ao tipo de dado, enquanto ainda fornecem tipagem estática.
## Características principais

- **Flexibilidade** com segurança de tipos: Genéricos permitem que você escreva código que funcione com qualquer tipo de dado, mas que mantenha a consistência e a segurança da tipagem.

- **Sintaxe** Utilizam-se os sinais de menor e maior (<>) para definir genéricos. O tipo genérico é normalmente representado por uma letra, como T, U, etc.


## Exemplo
```bash
function identity<T>(value: T): T {
  return value;
}

const num = identity<number>(10);  // num é do tipo 'number'
const str = identity<string>("Hello");  // str é do tipo 'string'

```

## Vantagens
- Reutilização de código: Genéricos permitem que você crie funções e classes que podem trabalhar com diferentes tipos de dados sem precisar duplicar o código.

- Inferência de tipos: TypeScript pode inferir o tipo automaticamente em muitos casos, tornando o uso de genéricos mais simples.
    