class Book {
    constructor(title, pages, author) {
        this.title = title
        this.pages = pages
        this.author = author
    }
    printTitle() {
        return this.title
    }
}

class ITBook extends Book {
    constructor(title, pages, author, technology) {
        super(title, pages, author)
        this.technology = technology
    }
    printTechnology() {
        return this.technology
    }
}

const jsBook = new ITBook('Estrutura de dados e algorítimos', 200, 'Loiane', 'Javascript')

console.log(jsBook.printTitle())
console.log(jsBook.printTechnology())

// getters e setters

class Person {
    constructor(name) {
        this._name = name
    }

    get name() {
        return this._name
    }

    set name(value) {
        this._name = value
    }
}

let char = new Person('Lucas')
console.log(char.name)
char.name = 'Laura'
console.log(char.name)


// operador de exponencial

const area = 3.14 * r * r

// usando a função Math.pow para esscrever o código acima

const area_ = 3.14 * Math.pow(r, 2)

// usando o operador de exponencial 

const _area = 3.14 * (r ** 2)

// ------------------------------------------------------------------------------------------------ >>

// herança

class Mamifero {
    constructor(especie, nome, idade) {
        this.especie = especie
        this.nome = nome
        this.idade = idade
        this.GlandulaMamaria = true
    }

    IncrementarIdade() {
        this.idade++
    }
}

class Leao extends Mamifero {

    constructor(especie, nome, idade, comeHomem) { // recebendo os parâmetros

        super(especie, nome, idade) // usando 'super' para passar os parâmetros para o construtor da classe Pai 'Mamifero'
        this.comeHomem = comeHomem // atributo exclusivo da classe Leao

        if (comeHomem) {
            console.log(nome + " come seres humanos")
        }
    }

    ComerSomenteZebra(animais) { // recebe um array de objetos
        return animais.filter(animais => animais.especie != 'zebra') // retorna um array com os objetos que não são uma zebra
    }

    verificar(retorno) { // recebe um array 
        let string = `os animais que o ${this.nome} não comeu forão: `
        for (let i = 0; i < retorno.length; i++) {
            string += retorno[i]['nome'] + " | "
        }
        return string
    }

}

// const aslan = new Leao('leão', 'aslan', 5, true) // criando um leão que come homem
const mufasa = new Leao('leão', 'mufasa', 5, false)
mufasa.IncrementarIdade() // acessando o método da classe Pai
// console.log(mufasa.idade) // 6

const zeca = new Mamifero("zebra", "zeca", 4)
const pompeu = new Mamifero('gnu', 'pompeu', 5)
const angus = new Mamifero('cavalo', 'angus', 3)
const carlos = new Mamifero("tartaruga", "carlos", 4)
const rafinha = new Mamifero('peixe', 'rafinha', 5)
const ricardo = new Mamifero('zebra', 'ricardo', 3)

const animals = [zeca, pompeu, angus, carlos, rafinha, ricardo] // array com os objetos 

//console.log(mufasa.ComerSomenteZebra(animals)) // retorna um array com objetos de todos que não são uma zebra 

const leaoNaoCome = mufasa.ComerSomenteZebra(animals)
console.log(mufasa.verificar(leaoNaoCome))
