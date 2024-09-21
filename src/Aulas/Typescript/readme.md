# Resumo de TypeScript

**TypeScript** é uma linguagem de programação desenvolvida pela Microsoft que estende o JavaScript com **tipagem estática**. Ele permite aos desenvolvedores definir tipos explícitos para variáveis, funções e objetos, ajudando a evitar erros comuns de programação e melhorando a legibilidade e manutenção do código.

## Principais Características:
- **Superset de JavaScript**: Todo código JavaScript é válido em TypeScript, mas TypeScript adiciona recursos como tipagem estática e interfaces.
- **Tipagem Estática**: TypeScript permite definir tipos como `string`, `number`, `boolean`, entre outros, tornando o código mais seguro e previsível.
- **Inferência de Tipos**: Mesmo sem declarar explicitamente o tipo, TypeScript tenta inferir o tipo de uma variável com base em seu valor.
- **Suporte a ES6+**: TypeScript suporta todos os recursos modernos do JavaScript (ES6/ES2015 e superior), como classes, módulos e funções arrow.
- **Interfaces e Classes**: TypeScript introduz conceitos como **interfaces** e **classes**, que ajudam a estruturar e organizar o código.
- **Compilação para JavaScript**: TypeScript precisa ser compilado para JavaScript (usando o `tsc`), que é o que será executado no navegador ou servidor.

## Vantagens:
- **Detecção precoce de erros**: Erros de tipo são detectados durante o desenvolvimento, antes de serem executados.
- **Facilita a manutenção de projetos grandes**: A tipagem estática ajuda a documentar o código e facilita o entendimento em projetos maiores.
- **Integração com IDEs**: Ferramentas como o Visual Studio Code oferecem suporte avançado ao TypeScript, com autocomplete, refatoração, e verificação de tipos.

## Exemplo de Código TypeScript:
```typescript
function greet(name: string): string {
  return `Hello, ${name}!`;
}

const message = greet("World");
console.log(message);  // Saída: Hello, World!
