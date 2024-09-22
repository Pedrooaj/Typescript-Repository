function random(min: number, max: number){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min ) + min);
}

function esperaAi(msg: string, tempo: number){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(msg);
        }, tempo);
    });
}

esperaAi('Frase 1', random(1, 3)).then(res => {
    console.log(res);
    return esperaAi('Frase 2', random(1, 3));
}).then(res => {
    console.log(res);
    return esperaAi('Frase 3', random(1, 3));
}).then(res => {
    console.log(res);
})
.catch(err => {
    console.log(err);
});

