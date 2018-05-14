var carro = "Camaro";
console.log(carro);
carro = testeA("Ferrari");
function testeA(text) {
    return text;
}
console.log(carro);
function loop(b) {
    if (b) {
        for (var index = 0; index < 10; index++) {
            console.log(index);
        }
    }
    console.log("Fim!!");
}
loop(true);
function fun_1() {
    return fun_2();
    function fun_2() {
        return "teste 2";
    }
}
console.log(fun_1());
/////////
function testeVarLet(i) {
    var a = 1;
    if (i) {
        var a_1 = 2;
    }
    return a;
}
console.log(testeVarLet(true));
