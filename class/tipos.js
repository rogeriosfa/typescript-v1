var teste = false;
//-------------------------------------
var numero = 1;
var decimal = 5.4;
var hex = 0xf00d;
var binary = 10;
var octal = 484;
//-------------------------------------
var nome = "Rogério";
var carro = "Corolla";
var text = "<p> Nome: " + nome + " </p>\n            <p> Carro: " + carro + "</p>";
//-------------------------------------
var array1 = ["João", "Maria", "Pedro", "Ana"];
console.log(array1);
var array2 = ["João", "Maria", "Pedro", "Ana"];
console.log(array2);
//-------------------------------------
var Color;
(function (Color) {
    Color[Color["Verde"] = 1] = "Verde";
    Color[Color["Vermelho"] = 2] = "Vermelho";
    Color[Color["Branco"] = 3] = "Branco";
})(Color || (Color = {}));
;
console.log(Color.Branco);
console.log(Color[3]);
//-------------------------------------
var list = 23;
console.log(list);
list = "teste";
console.log(list);
//-------------------------------------
function getNome(nome) {
    alert(nome);
}
getNome("Rogério");
document.body.innerHTML = text;
