// Tipo Null
let x;
if(typeof x === 'undefined') x = 20;

console.log(x * 2);

function createPerson(firstName: string, lastName?: string):{
  firstName: string,
  lastName?: string,

}{
  return {
    firstName,
    lastName,

  }
}

function squareOff(x: any){
  if(typeof x === 'number') return x * x;
  return null;
}

const squareOffTwoNumber = squareOff(2);
const squareOffTwoString = squareOff('2');

if(squareOffTwoNumber === null){
  console.log('conta invalida');
}else{
  console.log(squareOffTwoNumber * 100);
}

