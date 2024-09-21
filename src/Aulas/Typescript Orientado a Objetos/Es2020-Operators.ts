
// Encadeamento opicional e Operador de coalescência nula
type Documento = {
    titulo: string;
    texto: string;
    data?: Date;
}

const doc: Documento = {
    titulo: "Padada",
    texto: "asdasda",
    // data: new Date()
}

console.log(doc.data?.toDateString() ?? "Ops, Não existe data");
