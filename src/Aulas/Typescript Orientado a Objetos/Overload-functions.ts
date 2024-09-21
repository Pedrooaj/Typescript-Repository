type Adder = {
    (x: number): number;
    (x: number, y: number): number;
    (...arg: number[]): number;
}


// função se comporta de formas diferentes dependendo da quantidade de parametros existentes
const adder: Adder = (x: number, y?: number, ...args: number[]) => {
    if(args.length > 0) return args.reduce((s, a) => s + a,0) + x + (y || 0);
    return x + (y || 0);
}

console.log(adder(1));
console.log(adder(1,2));
console.log(adder(1,2,3));


