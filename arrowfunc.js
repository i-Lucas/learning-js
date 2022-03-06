const minhaFuncao = function () { // expressão de função
    console.log("Expressão de funcão")
}
minhaFuncao()

function minhaFuncao2() { // declaração de função
    console.log("Declaração de função")
}
minhaFuncao2()

const funcao = () => "Uma expressão de função"
console.log(funcao()) // \o/ wtf isso funciona

const obj = {
    l: () => "teste"
}

console.log(obj.l()) // imprimindo o retorno da função do obj