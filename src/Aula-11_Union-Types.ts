// Union Types

function addOrConcat(a: number | string, b: number | string): number | string{
    if(typeof a === 'number' && typeof b === 'number') return a + b;
    return `${a}${b}`
}

console.log(addOrConcat(2,5));
console.log(addOrConcat("10","30"));
console.log(addOrConcat(10, "2"));


