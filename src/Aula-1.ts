// Tipos Básicos TypeScript
// TypeAnnotation
let nome: string = "Pedro Antônio"; // apenas String do tipo "",'' e ``
let idade: number = 18; // 10, 1.5, -5 e etc
let adulto: boolean = true; // Apenas true ou false
let simbolo: symbol = Symbol("qualquer symbol"); //symbol

// apenas pra ES2020+
//let big:bigint = 10n; // Bigint


// Arrays

let arrayNumber: Array<number> = [1, 2, 3, 4, 5, 6];
let arrayString: Array<string> = ["Pedro", "Antônio", "Mendes", "Lemos"];
let ArrayNumber2: number[] = [1, 2, 3, 4, 5, 6];
let arrayString2: string[] = ["Pedro", "Antônio", "Mendes", "Lemos"];

//Obejetos

let Pessoa: { nome: string, idade: number, adulto?: boolean } = {
    nome: "Pedro Antônio",
    idade: 18
};

// Funções

function soma(x: number, y:number):number{
    return x + y;
}


const soma2: (x: number, y: number) => number = (x, y) => {
    return x + y;
}

