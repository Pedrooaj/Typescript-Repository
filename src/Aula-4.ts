// Tipo Objeto


const objeto: {
  nome:string,
  sobrenome?:string
 } = {
  nome: "Pedro"
}


const obejetoA: {
  readonly chaveA:string;
  chaveB:string;
  chaveC?:string;
  [key: string]: unknown; // index signature serve para adicionar n elementos a um objeto
} = {
  chaveA: "Valor A",
  chaveB: "Valor B"
}
obejetoA.chaveC = "Novo Objeto";
obejetoA.chaveD = "Novo Objeto";

console.log(obejetoA);

