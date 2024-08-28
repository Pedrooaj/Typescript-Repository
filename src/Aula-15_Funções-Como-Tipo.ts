//Funções como tipos


//o exemplo abaixo e o exemplo de uma função tipada que retorna uma string...
type MapStringsCallback = (item: string) => string;

function MapStrings(array: string[], callbackfn: MapStringsCallback): string[] {
    const newArray: string[] = [];
    for(let i = 0; i < array.length; i++){
        const item = array[i];
        newArray.push(callbackfn(item));
    }
    return newArray;
}

const abc = ["a", "b","c"];

const MappedStrings = MapStrings(abc, (item) => item.toUpperCase())

console.log(MappedStrings);


