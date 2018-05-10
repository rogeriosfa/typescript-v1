var teste: boolean = false;

//-------------------------------------

var numero: number = 1;
var decimal: number = 5.4;
var hex: number = 0xf00d;
var binary: number = 0b1010;
var octal: number = 0o744;

//-------------------------------------

var nome: string = "Rogério";
var carro: string = "Corolla";
var text = `<p> Nome: ${nome} </p>
            <p> Carro: ${carro}</p>`;

//-------------------------------------
            
var array1: string[] = ["João", "Maria", "Pedro", "Ana"];
console.log(array1);
var array2: Array<string> = ["João", "Maria", "Pedro", "Ana"];
console.log(array2);

//-------------------------------------

enum Color { Verde = 1, Vermelho, Branco };
console.log(Color.Branco);
console.log(Color[3]);

//-------------------------------------
var list: any = 23;
console.log(list);
list = "teste";
console.log(list);

//-------------------------------------
function getNome(nome:string): void {
    alert(nome);
}

getNome("Rogério");

document.body.innerHTML = text;