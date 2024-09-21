type FilterCallback<T> = (
    value: T,
    index?: number,
    array?: T[],
) => boolean;

function meuFilter<T>(array: T[], callBackfn: FilterCallback<T>): T[] {
    const novoArray = [];

    for (let i = 0; i < array.length; i++) {
        if (callBackfn(array[i])) {
            novoArray.push(array[i]);
        }

    }

    return novoArray;
}



const array: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const arrayFilterOriginal = array.filter((value) => value < 5);

const Myfilter = meuFilter(array, (value) => value < 5);

console.log(arrayFilterOriginal);
console.log(Myfilter);



export default 0;