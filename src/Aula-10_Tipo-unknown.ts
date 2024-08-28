// Tipo unknown - tipo seguro porem universal onde aceita todos os tipos

let sla: unknown;
sla = 1000;
sla = "slasdasda";
sla = 12;
let ok = 12;

if(typeof sla === 'number'){
    console.log(sla + ok);
}


