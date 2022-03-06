
// ------------------------------------------------------------------------------------------------------------- >> function this
// usando o this no contexto de função
// using this in function context

// quando não estiver no modo estrito, o this aponta para um objeto global
// when not in strict mode, this points to a global object
function ThisNotStrict() {
    console.log(this) // return global context
}

// em modo estrito, this permanece seja qual for o definido no contexto de execução, e por padrão é undefined
// in strict mode, this remains whatever is defined in the execution context, and by default is undefined
function ThisStrict() {
    'use strict'
    console.log(this) // return undefined
}

// como método de um objeto
// as method of an object
const obj = {
    prop: "property function",
    func: function () {
        return this.prop // this aponta para a propiedade
        // this points to the property
    }
}
console.log(obj.func())

// ------------------------------------------------------------------------------------------------------------- >> arrow this
// arrow functions 
// em arrow functions, this é definido pelo contexto de execução que está inserido. em codigo global this assume o objeto global
// in arrow functions, this is defined by the execution context that is inserted. in global code this takes the global object

// contexto de criação global - global creation context:
const ArrowFunctionThis = () => { console.log(this) }
// ArrowFunctionThis está inserido no escopo global, logo o this apontará para o objeto global (ex: windown)
// ArrowFunctionThis is inserted in the global scope, so this will point to the global object (ex: windown)

// contexto de criação: objeto (incorreto) - creation context: object (incorrect) :
const ArrowFunctionThisIncorrect = {
    prop: 10,
    arrowF: () => { console.log(this) }
}
// no código acima o this continua referenciando um objeto de escopo global, pois é propiedade de um objeto de contexto global
// in the code above, this continues to refer to a global scope object, as it is owned by a global context object.

// contexto de criação: objeto (correto) - creation context: object (correct) :
const object = {
    prop: 20,
    showThis: function () {
        const f = (() => this)() // IIFE (Immediately Invoked Function Expression)
        console.log(f())
    }
}
// esta é a forma correta de ligar o this de uma arrow function á um objeto
// neste caso o this está referenciando o objeto, pois está dentro de uma função que está dentro de um objeto
// this is the correct way to bind the this of an arrow function to an object
// in this case this is referencing the object, as it is inside a function that is inside an object

// ------------------------------------------------------------------------------------------------------------- >> bind
// usando a função 'bind' - using the 'bind' function

// criando um novo objeto - creating a new object
const newObject = {
    prop: "property bind"
}

// criando uma nova função - creating a new function
function ThisBindExample() {
    'use strict'
    // usando 'use strict' o this apontará para undefined
    // using 'use strict' this will point to undefined
    console.log(this)
}
// sem o 'use strict' o this aponta para o objeto global 
// without the 'use strict' this points to the global object

ThisBindExample = ThisBindExample.bind(newObject)
// usando o bind para atribuir a função ao objeto. agora o this da função apontará o objeto
// using bind to assign the role to the object. now the this of the function will point to the object

ThisBindExample() // retorna o objeto newObject - returns the object 'newObject'
// chamando a função - calling the function

// ------------------------------------------------------------------------------------------------------------- >> call
// usando a função call - using the call function

// criando um novo objeto - creating a new object
const new_ObJ = {
    prop: "property call",
    showThis: function ThisCallExample() {
        console.log(this) // retorna o objeto - returns the object
    }
}

// chamando a função - calling the function
//new_ObJ.showThis()

// criando outro objeto - creating another object
const ObJTwo = {
    prop: "property bind two"
}

new_ObJ.showThis.call(ObJTwo)
// usando o call , agora o this da função ThisCallExample aponta para o objeto ObJtwo
// using call , now the this of the ThisCallExample function points to the ObJtwo object

// usando call é possível passar uma lista de parâmetros para função
// using call it is possible to pass a parameter list to function

// Example:

// adicionando nova função com três parâmetros ao objeto new_ObJ
// adding new function with three parameters to object new_ObJ
new_ObJ.newFunction = function (a, b) {
    console.log(this)
    // imprime o objeto que esta função estará dentro
    // prints the object this function will be inside
    return a - b
}

const getReturn = new_ObJ.newFunction.call(ObJTwo, 10, 5)
console.log(getReturn)
// imprime o objeto 'ObJTwo' e retorna o resultado da função adicionada
// prints the object 'ObJTwo' and returns the result of the added function

// ------------------------------------------------------------------------------------------------------------- >> apply
// usando a função apply - using the apply function

// basicamente o uso é o mesmo do call , mas podemos passar um array como parâmetros nas funções
// basically the usage is the same as the call , but we can pass an array as parameters in the functions

// Example:

// creating a new object
const ApplyObject = {
    prop: "property apply",

    // criando uma função que imprime o this do objeto e retorna um array
    // creating a function that prints the object's this and returns an array
    showThisAndArray: function (array) {
        console.log(this)
        return array
    }
}

// criando outro objeto - creating another object
const ApplyObJTwo = {
    prop: "property apply two"
}

const Arr = [1, 2, 3, 4, 5]
const getArray = ApplyObject.showThisAndArray.apply(ApplyObJTwo, [Arr]) // passando o array por parâmetro - passing the array by parameter
// esta variável está armazenando o retorno da função ShwThisAndArray 
// this variable is holding the return of the ShwThisAndArray function
console.log(getArray)

/* 
    ou seja, basicamente a função 'apply' e a função 'call' são semelhantes. ambas permitem que um objeto possa acessar o método
    de outro objeto, e permitir que o this desta função aponte para o objeto que está acessando a função. a diferença está nos 
    parâmetros passados para a função acessada (caso necessite). call manda lista de parâmetros, e apply um array

    that is, basically the 'apply' function and the 'call' function are similar. both allow an object to access the method
    from another object, and allow the this of this function to point to the object accessing the function. the difference is in the
    parameters passed to the accessed function (if necessary). call sends list of parameters, and apply an array
    
*/
