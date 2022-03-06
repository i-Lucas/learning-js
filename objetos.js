
// objetos

function Book(title, pages, isbn) {
    this.title = title
    this.pages = pages
    this.isbn = isbn
}

var book = new Book('title', 'pag', 'isbn')

console.log(book.title)
console.log(book.pages)
console.log(book.isbn)

// adcionando nova função ao objeto
Book.prototype.printTitle = function () {
    console.log(this.title)
}

book.printTitle()

// templates literais

const booke = { name: 'Learning javascript datastructures and algorithms' }

console.log(`you are leading ${booke.name}.
    and this is a new line
        and so is this`)



const circleArea = r => 3.14 * r * r
console.log(circleArea(2))

// valor default para funções


function sum(x = 1, y = 2, z = 3) {
    return x + y + z
}

console.log(sum(1,1)) // retorna 5, pois o parâmetro z defalt é 3

// ---------------------------------------------------------------- >> 

// métodos com objetos - object methods

// copiando um objeto - copying an object
const object = { a: 1 }
const copy = Object.assign({}, object) // copying
console.log(copy)

// mesclando objeto - merging object
const obj = { a: 1 }
const obj1 = { b: 2 }
const obj2 = { c: 3 }

const newobj = Object.assign({}, obj, obj1, obj2)
// mesclando os objetos sem modifica-los usando um objeto vazio
// merging objects without modifying them using an empty object
console.log(newobj)

// transformando um array em objeto
// turning an array into an object
const arrayDeEntrada = [
    ['abc', 2],
    ['def', 4]
]
const objx = Object.fromEntries(arrayDeEntrada)
console.log(objx)

// transformando um objeto em array
// turning an object into an array
const objectDeEntrada = { a: 1, b: 2 }
const newarray = Object.entries(objectDeEntrada)
console.log(newarray)

// transformando o objeto em um array de chaves
// transforming the object into an array of keys
const keysObject = { a: 1, b: 2 }
const keysarray = Object.keys(keysObject)
console.log(keysarray)

// transformando o objeto em um array de valores
// transforming the object into an array of values
const valuesobj = Object.values(keysObject)
console.log(valuesobj)

// ------------------------------------------ > JSON Javascript object notation

const json = '{"result": true, "count": 100}'
const jsonObj = JSON.parse(json)
// transforming the json into to object

console.log(jsonObj)
console.log(jsonObj['result'])

const jsonString = JSON.stringify(jsonObj)
// transformou o objeto em uma string 
// turned the object into a string
console.log(jsonString)

const superJ = JSON.stringify([new Number(1), new String('false'), new Boolean(false)])
console.log(superJ) // return [1,"false",false]

// -------------------------------------------------------------------------------- >> 

// declarando de forma literal
// literally declaring
const objeto = {

    // propiedades
    // properties
    nome: "Lucas",
    idade: 25,

    // métodos
    // methods
    somar: function (a, b) {
        return a + b
    },

    // arrow function
    multiplicar: (a, b) => a * b
}

// acessando métodos por dot notation
// accessing methods by dot notation
console.log(objeto.multiplicar(10, 2))
console.log(objeto.somar(10, 20))

// acessando propiedades
// accessing properties
console.log(objeto.nome, objeto.idade)

// acessando referência de função
// accessing function reference
console.log(objeto.somar, objeto.multiplicar)

// adicionando nova propiedade ao objeto
// adding new property to object
objeto.dotprop = "Nova propiedade"
console.log(objeto.dotprop)

// adicionando novo método ao objeto
// adding new method to object
objeto.divisao = divisao = (a, b) => a / b
console.log(objeto.divisao(10, 2))

// adicionando método anônimo
// adding anonymous method
objeto.subtrair = (a, b) => a - b
console.log(objeto.subtrair(25, 5))

// acessando propiedades e métodos por bracket notation
// accessing properties and methods by bracket notation
console.log(objeto['nome'], objeto['idade'])
console.log(objeto['somar'](50, 50))

// acessando referências por bracket notation
// accessing references by bracket notation
console.log(objeto['subtrair'], objeto['divisao'], objeto['somar'])

// adicionando métodos e propiedades por bracket notation
// adding methods and properties by bracket notation
objeto['bracket_prop'] = 64
objeto['bracket_meth'] = bracket_meth = (x) => x * 100

// acessando 
// accessing
console.log(objeto['bracket_meth'] (10), objeto['bracket_prop'])

// imprimindo objeto
// printing object
console.log(objeto)