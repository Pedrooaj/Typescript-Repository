type Produto = {
    nome: string;
    valor: number;
    id: number;
    tipo: string;
}

type Pedido = {
    produtos: Produto[];
    id: number;  
    valor: number 
}

const db = {
    pedidos: [] as Pedido[]
};

const realizarPedido = (carrinho: Produto[]) => {
    try {
        const pedido: Pedido = {
            produtos: [],
            id: Math.random(),
            valor: 0
        };
        carrinho.map(produto => {
            pedido.valor += produto.valor;
            pedido.produtos.push(produto)
        })
        db.pedidos.push(pedido);
        
        return "Sucesso ao realizar pedido"
    } catch (error) {
        return "Erro ao realizar Pedido"
    }
}

console.log(realizarPedido([{ id: 1, nome: "Sla",tipo: 'sla', valor: 123 }]));
console.log("Banco de dados: ");
console.log(db);








