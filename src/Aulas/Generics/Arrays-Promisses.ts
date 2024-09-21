const array: Array<number> = [1,2,3,4,5];
console.log(array);

async function promisseAsync() {
    return 1;
}

function minhaPromisse(): Promise<number>{
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(1)
        },1000)
    })
}

promisseAsync().then(result => console.log("resultado: " + result));
minhaPromisse().then(result => console.log("resultado: " + result));