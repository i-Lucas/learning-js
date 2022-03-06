var myVariable = 'global'
myOtherVariable = 'global'

function myFunction() {
    // essa variável só existe nesse escopo de função
    // e não é a mesma variavel declarada acima
    var myVariable = 'local'
    return myVariable
}

function myOtherFunction() {
    // valor alterado
    myOtherVariable = 'local'
    return myOtherVariable
}

console.log(myVariable) // escopo global
console.log(myFunction()) // escopo local

console.log(myOtherVariable)
console.log(myOtherFunction())

// -------------------------------------------------------------------- >>

// em JS existem dois tipos de escopos: Local e Global
// in JS there are two types of scopes: Local and Global

function cars() {
    var carName = "Ferrari"
    let carType = "Speed"
    console.log(carName, carType) // Aqui podemos usar - here can use
    // contexto local - local context
}

/* console.log(carName, carType) ReferenceError: carName and carType is not defined <- in this scope */

var global = "Mustang"
// a variável está declarada num contexto global fora de escopos
// the variable is declared in an out-of-scope global context

function car() {
    console.log(global)
    // pode usar aqui - can use here
}

car()
console.log(global)
// can use here

// é altamente recomendado não utilizar variáveis globais do tipo var por motivos de segurança
// it is highly recommended not to use global variables of type var for security reasons

// escopo de bloco e escopo de função

// variáveis declaradas com let não podem ser acessadas fora do escopo
// variables declared with let cannot be accessed out of scope context
for (let i = 0; i < 10; i++)
    console.log(i)

for (var n = 0; n < 10; n++)
    console.log(n)

// console.log(i) -> ReferenceError: 'i' is not defined
console.log(n) // Valor acessível mesmo fora do escopo - Affordable value even outside the scope

