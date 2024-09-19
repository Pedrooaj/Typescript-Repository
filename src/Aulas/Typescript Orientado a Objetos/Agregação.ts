export class Carrinho{
    private readonly produtos: Produto[];

    constructor(){
        this.produtos = [];
    }

    public addProduto(...produtos: Produto[]): void{
        produtos.map((item) => {
            this.produtos.push(item);
        });
    }

    public getQntProdutos(): number{
        return this.produtos.length;
    }

    public valorTotal(): number{
        return this.produtos.reduce((soma: number, produto: Produto) => soma + produto.preco, 0)
    }

}

export class Produto {
    constructor(
        public nome: string,
        public preco: number
    ){}


}

const prod1 = new Produto("Camisa", 19.99);
const prod2 = new Produto("Short", 29.99);
const prod3 = new Produto("Caneta", 2.49);
const carrinho = new Carrinho();

carrinho.addProduto(prod1, prod2, prod3);


console.log("Quantidade de itens no carrinho " + carrinho.getQntProdutos());
console.log("Valor total: " + carrinho.valorTotal());


