function sum(x = 1, y = 2, z = 3) {
    return x + y + z
}


let params = [3, 4, 5] // array
console.log(sum(...params)) // transformando o array em parâmetros com o spread operator (...)

console.log(sum.apply(undefined, params)) // código igual ao acima

function restParameterFunction(x, y, ...a) { // substitui os parâmetros pelo operador de espalhamento (...)
    return (x + y) * a.length // o tamanho de a vale 3 ( 3 parâmetros passados )
}

console.log(restParameterFunction(1, 2, 'hello', true, 7))