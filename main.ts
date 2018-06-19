var carro: string = "Camaro";

console.log(carro);

carro = testeA("Ferrari");

function testeA(text: string) {
  return text;
}

console.log(carro);

function loop(b: boolean) {
  if (b) {
    for (let index = 0; index < 10; index++) {
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

function testeVarLet(i: boolean) {
  let a: number = 1;
  if (i) {
    let a = 2;
  }
  return a;
}

console.log(testeVarLet(true));