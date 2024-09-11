// Tipo Array Array<Tipo> - Tipo[]

function multiplicaArgs(...args: Array<number>): number{
  return args.reduce((a, value) => a * value);
}

function concatenacao(...args: string[]): string {
  return args.reduce((acc,value) => acc + value);
}

function toUpperCase(...args: string[]): string[] {
  return args.map((value) => value.toUpperCase());
}

const result = multiplicaArgs(1,2,3);
const upper = toUpperCase("a","b","c");
const concat = concatenacao("a", "b", "c");

console.log(result);
console.log(concat);
console.log(upper);



//Array imutavel

const ArrayImutavel: readonly string[] = ["a", "b"];
const ArrayImutavelT: ReadonlyArray<string> = ["a", "b"];

