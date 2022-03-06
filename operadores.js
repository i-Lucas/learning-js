let a = 25, b = 10

console.log(a + b) // adição
console.log(a - b) // subtração 
console.log(a * b) // multiplicação
console.log(a / b) // divisão

console.log(a % b) // módulo ou resto da divisão
a++ // incremento
console.log(a)
a-- // decremento
console.log(a)

a = b // atribuição
console.log(a)
a += b // atribuição de soma
console.log(a)
a -= b // atribuição de subtração
console.log(a)
a *= b // atribuição de multiplicação
console.log(a)
a /= b // atribuição de divisão
console.log(a)
a %= b // atribuição de resto
console.log(a)

// operadores lógicos
let c = 20, d = 10

// operador ternário
console.log(d == c ? true : false) // falso
console.log(d > c ? true : false) // falso 
console.log(d < c ? true : false) // verdadeiro
console.log(c >= d ? true : false) // verdadeiro
console.log(c <= d ? tru : false) // falso 

let k = 10, j = 11
console.log(k && j == 10 ? 'sim' : 'não')
console.log(k || j == 10 ? 'sim' : 'não ')
console.log(k != 10 ? 'sim' : 'não ')

let x = 10, y = '10'
// comparando valor e tipo
console.log(x === y ? 'iguais' : 'diferentes') // falso (x int - y string)

// operadores bit a bit (bitwise)

console.log('5 & 1:', (5 & 1))
console.log('5 | 1:', (5 | 1))
console.log('~ 5:', (~5))
console.log('5 ^ 1:', (5 ^ 1))
console.log('5 << 1:', (5 << 1))
console.log('5 >> 1:', (5 >> 1))

// operador typeof ( retorna o tipo da variável ou expressão )

console.log('typeof num: ', typeof x)
console.log('typeof string: ', typeof 'lucas')
console.log('typeof boolean: ', typeof true)
console.log('typeof array:', typeof [1, 2, 3])
console.log('typeof object:', typeof { name: 'lucas' })

// tipos de dados em JS

// primitivos: null, undefined, string, number, boolean, symbol
// derivados: objetos, funções, arrays e expressões regulares

// operador delete

const myObject = {
    name: 'lucas',
    age: 25
}

delete myObject.age
console.log(myObject)

// verdadeiro ou falso em JS

/* 

    Tipo         -       Resultado

    undefined           false
    null                false
    boolean             verdadeiro: true - falso: false
    number              o resultado é false para +0, -0 ou NaN. caso contrário é true
    string              o resultado é false se a string for vazia,  caso contrário é true (>=1)
    object              sempre true

*/

function testTrueFalse(item) {
    return item ? console.log('verdadeiro') : console.log('falso')
}

testTrueFalse(true) // retorna verdadeiro
testTrueFalse(false) // retorna falso
testTrueFalse(null) // retorna falso
testTrueFalse(new Boolean(false)) // retorna verdadeiro (objeto é sempre true)
testTrueFalse('') // retorna falso ( string vazia )
testTrueFalse('string') // retorna verdadeiro
testTrueFalse(new String('string')) // retorna verdadeiro (objeto é sempre true)    
testTrueFalse(1) // retorna verdeiro
testTrueFalse(-1) // retorna verdadeiro
testTrueFalse(NaN) // retorna falso
testTrueFalse({}) // retorna verdadeiro (objeto)
const obj = { x: 10 }
testTrueFalse(obj.x) // retorna verdadeiro
testTrueFalse(obj.y) // retorna falso ( atributo não existe )

// operadores de igualdade

// operador igual == 

/* 

    Tipo      -         Tipo        -      Resultado

    null                undefined           true
    number              string              x == toNumber(y)
    string              number              toNumber(x) == y
    boolean             any                 toNumber(x) == y
    any                 boolean             x == toNumber(y)
    string ou number    object              x == toPrimitive(y)
    object              string ou number   toPrimitive(x) == y

*/


// método toNumber

/* 

    valor do tipo        -       resultado

    undefined                    NaN
    null                         +0
    boolean                      se for true, o resultado será 1. se falso, será +0
    number                       é o valor do número

*/


// método toPrimitive

/* 

    tipo do valor     -     resultado

    object                  se valueOf devolver um valor primitivo, esse valor primitivo será devolvido;
                            caso contrário, se toString devolver um valor primitivo, esse valor será devolvido;
                            se não, um erro será devolvido.    

*/




console.log('string' ? true : false) // retorna true (string > 1)

console.log('string' == true)
/* retorna false, porquê inicialmente o valor booleano é convertido com toNumber, portanto 
temos string == 1. em seguida, o valor de string é convertido com toNumber. como a string é 
constituída por caracteres alfabéticos, NaN será devolvido, portanto temos NaN == 1, que é falso */

console.log('string' == false)
/* também retorna false, porquê inicialmente o booleano é convertido com toNumber, portanto temos 
string == 0. em seguida, o valor string é convertido com toNumber. como a string é constituída por 
caracteres alfabéticos, NaN será devolvido, portanto temos NaN == 0, que é falso */

// operador === 

/* 

    type(x)        -        valores             -               resultado

    number                  x = y ( mas não é NaN )             true
    string                  x e y tem caracteres idênticos      true
    boolean                 x = y                               true
    object                  x e y referenciam o mesmo objeto    true

    x e y                   x != y                              false
*/

console.log('string' === 'string') // true


const obj1 = { name: 'lucas' }, obj2 = { name: 'lucas' }

console.log(obj1 === obj2) // false, objetos diferentes
console.log(obj1.name === obj2.name) // true
