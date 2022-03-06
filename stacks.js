// @ts-check

// introdução a pilhas

/*
    uma pilha é uma coleção ordenada de itens que obedece ao princípio LIFO ( last in first out )
    ou o último a entrar é o primeiro a sair
*/

// criando uma classe stack baseada em array

class Stack_Array {

    constructor() {
        this.items = []
    }

    // método responsável pela adição de novos itens na pilha
    push(element) {
        this.items.push(element)
    }

    // método responsável pela remoção dos itens da pilha
    pop() {
        return this.items.pop()
    }

    // método que retorna o item que está no topo da pilha (último elemento adicionado)
    peek() {
        return this.items[this.items.length - 1]
    }

    // método que verifica se a pilha está vazia
    isEmpty() {
        return this.items.length == 0 // retorna true se a pilha estiver fazia e false se não
    }

    // método que contabiliza os items da pilha
    size() {
        return this.items.length
    }

    // método que limpa os elementos da pilha
    clear() {
        this.items = []
    }
}

// usando a classe stack

const stack = new Stack_Array() // instanciando a classe stack

console.log(stack.size()) // verificando quantidade de itens
console.log(stack.isEmpty()) // verificando se está vazia

// adicionado elementos
stack.push(5)
stack.push(8)

// verificando ultimo elemento adicionado na pilha
console.log(stack.peek()) // 8

stack.push(11)

console.log(stack.size()) // 2
console.log(stack.isEmpty()) // retorna false

stack.push(15)


/*
    Estado atual da pilha: 

           topo

            15
            11
            8
            5          

          base
*/

console.log(stack.size()) // 4

stack.pop()
stack.pop()

console.log(stack.size()) // 2

// stack.items = [1000] é possível manipular diretamente as propiedades da classe
// porque não está privada, e isso quebraria o código facilmente

// --------------------------------------------------------------------------- >>
// criando uma classe stack baseada em objto

class Stack_Objeto {
    constructor() {
        this.count = 0 // chave do objeto items
        this.items = {} // objeto vazio
    }

    // métodos
    push(element) {
        this.items[this.count] = element // valor
        this.count++

        // items[0] = (elemento)
        // items[1] = (elemento)
        // items[3] = (info etc)
    }

    // contabiliza o tamanho da pilha
    size() {
        return this.count
    }

    // verifica se a pilha está vazia
    isEmpty() {
        return this.count === 0
    }

    // removendo elementos da pilha
    // como não estamos usando um array para armazenar os elementos teremos que implementar
    // manualmente a lógica para remover. o metodo pop também devolve o elemento que foi removido
    pop() {
        if (this.isEmpty()) {
            return undefined // caso esteja vazia retorna undefined
        }

        this.count-- // para acessar o ultimo elemento adcionado devemos decrementar count pois:
        /*
            base

            0: x
            1: y
            2: z
        
            count = 3
            ultimo elemento inserido na pilha: 2        
        */
        const result = this.items[this.count] // armazena o elemento do topo da pilha
        delete this.items[this.count] // removendo o elemento
        return result // retornando o elemento do topo da pilha
    }

    // método que retorna o ultimo elemento da pilha
    peek() {
        if (this.isEmpty()) {
            return undefined
        }

        return this.items[this.count - 1] // mesma lógica do pop
    }

    // limpando a pilha (diretamente)
    clear() {
        this.items = {}
        this.count = 0
    }

    // também poderiamos limpar usando o método pop
    clear_p() {
        while (!this.isEmpty()) { // enquanto não estiver vazia
            this.pop() // remove um por um ( na ordem pilha )
        }
    }

    // criando o método toString (para exibir o conteúdo da pilha de modo semelhante a um array)
    toString() {
        if (this.isEmpty()) { // caso a pilha esteja vazia
            return '' // retorna uma string vazia
        }

        // se não   
        let objString = `${this.items[0]}` // inicializa a string com o primeiro elemento (que está na base)
        // objString = "elemento 0"
        for (let i = 1; i < this.count; i++) { // percorrendo os elementos da pilha até o topo
            objString = `${objString}, ${this.items[i]}`
            // objString = elemento 0, elemento 1
            // objString =  elemento 0, elemento 1, elemento 2
            // a cada volta do loop objString vai ser igual ele mesmo, virgula o item do laço
        }
        return objString
    }

}

const stack_o = new Stack_Objeto()

stack_o.push(5)
stack_o.push(10)
stack_o.push(20)

/*
    internamente, teremos os valores a seguir nas propiedades items e count: 

    items = [

        base

        0: 5,
        1: 10
        2: 20

        topo

    ]

    count = 2
*/

console.clear()

// verificando se a pilha está vazia
console.log(stack_o.size()) // 2
console.log(stack_o.isEmpty()) // false

console.log(stack_o.toString())

// protegendo os elementos internos da estrutura de dados

console.log(Object.getOwnPropertyNames(stack_o)) // expõe as propiedades da classe stack_objetos
console.log(Object.keys(stack_o)) // faz o mesmo que o código acima
console.log(stack_o.items) // acessa diretamente os ítens da pilha 

// ou seja, as propiedades e itens da classe estão expostos, podendo ser alterados facilmente

// ------------------------------------------------------------------------------- >>

// criando uma nova classe stack aplicando o conceito de Symbol
// Symbol é um tipo primitivo imutável e pode ser usado como propiedade de um objeto

const _items = Symbol('stackItems') // declarando a variável items como um Symbol 
class Stack_Symbom {
    constructor() {
        this[_items] = [] // inicializando como array
    }
}

// essa abordagem oferece uma propiedade private falsa para a classe, pois o método Object.getOwnPropertySymbols 
// pode ser usado para obter os símbolos de propiedades declaradas na classe

console.clear()

const stack_s = new Stack_Symbom()

let objectSymbols = Object.getOwnPropertySymbols(stack_s)

// ainda podemos acessar indiretamente
console.log(objectSymbols) // [ Symbol(stackItems) ] 
console.log(objectSymbols[0]) // Symbol(stackItems)
console.log(objectSymbols.length) // 1

// ou seja, os dados ainda estão desprotegidos

// ------------------------------------------------------------------- >>
// classes com WeakMap

// há um tipo de dado que podemos usar para garantir que a propiedade seja private em uma classe
// se chama WeakMap. WeakMap é capaz de armazenar um par chave/valor, no qual a chave é um objeto e o valor um dado

const items = new WeakMap() // declarando a variável items como um WeakMap
class Stack_Weak {
    constructor() {
        items.set(this, [])
        // definindo o valor de items, especificando this (referência a classe )
        // como a chave do WeakMap e o array que representa a pilha como o valor
    }

    push(element) {
        const s = items.get(this)
        // obtendo o valor de items acessando o valor do WeakMap
        // isto é, passando this como a chave
        s.push(element)
    }

    pop() {
        const s = items.get(this)
        const r = s.pop()
        return r
    }
}

// agora a propiedade items é realmente private na classe. porém o código não fica fácil de ler
// e não será possível herdar as propiedades que são private se estendermos essa classe

class AtributosPrivados {
    #count = 0
    #items = 0
}

// a classe AtributosPrivados possui dois atributos: count e items. Ambos são privados e inacessíveis
// fora da classe, por conta do identificador # 

const test = new AtributosPrivados()

//console.log(test.items) undefined
//console.log(test.#items) erro: a propiedade é inacessível fora da classe porque tem o identificador privado

// manipulando os atributos privados da classe

class Manipulando {

    #propiedade = 0
    #count = 0

    get_prop() {
        return this.#propiedade
    }

    get_count() {
        return this.#count
    }

    set_prop(value) {
        this.#propiedade = value
    }

    set_count(value) {
        this.#count = value
    }

    print() {
        return `${this.get_count()}, ${this.get_prop()}`
    }
}

console.clear()
const m = new Manipulando()

m.set_count(50)
m.set_prop(100)
console.log(m.print())

// ------------------------------------------------------------------- >>
// resolvendo problemas usando pilhas

// convertendo números decimais para binários 
// para converter um número decimal em uma representação binária, podemos dividir o número por 2 
// até que o resultado da divisão seja zero

/*
                número decimal: 10

                10 / 2 == 5 resto   0
                5  / 2 == 2 resto   1
                2  / 2 == 1 resto   0
                1  / 2 == 0 resto   1

                resultado binário: 1010
*/

// algorítimo de conversão de base

console.clear()


/** @param {number} decNumber */ // definindo o parâmetro decNumber obrigatoriamente como numero
function decimalToBinary(decNumber) {

    const remStack = new Stack_Array() // inicializando a pilha

    // variáveis
    let number = decNumber
    let resto
    let binaryString = ''

    // enquanto o númeor decimal for maior que zero
    while (number > 0) { // volta pro loop
        resto = Math.floor(number % 2) // o resto da divisão é armazenado em 'resto'
        // usamos math.floor para obter somente o valor inteiro das operações
        remStack.push(resto) // o resto da divisão é armazenado na pilha
        number = Math.floor(number / 2) // o número é dividido por 2
    }

    /*
        stack:

         topo        

        resto[2]
        resto[1]
        resto[0]

         base
    */

    while (!remStack.isEmpty()) { // enquanto a pilha não estiver vazia
        binaryString += remStack.pop().toString() // a string armazena o conteúdo da pilha ( na ordem LIFO )
        // LIFO ( last in first out ) -> o último a entrar é o primeiro a sair
    }
    return binaryString // retorna a string com o número binário
}

console.log(decimalToBinary(10)) // 1010 ok
console.log(decimalToBinary(43)) // 101011 ok
console.log(decimalToBinary(233)) // 11101001 ok
console.log(decimalToBinary(1000)) // 1111101000 ok
console.clear()

// ------------------------------------------------------------------- >>
// algorítimo conversor de base usando pilha

function baseConverter(decNumber, base) {

    const remStack = new Stack_Objeto()
    const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    // do 0 ao 9 existem 10 números. logo o A representa 11 e assim por diante
    let number = decNumber
    let resto
    let baseString = ''

    if (!(base >= 2 && base <= 36)) { // se a base não for mair ou igual a 2 e menor ou igual a 36
        return undefined // erro ..
    }

    // enquanto o número for maior que zero
    while (number > 0) { 
        resto = Math.floor(number % base) // o resto da divisão do número pela base é armazenada
        remStack.push(resto) // o resto é adicionado na pilha
        number = Math.floor(number / base) // o número é atualizdo
    }

    while(!remStack.isEmpty()) { // enquanto a pilha estiver cheia
        // a string será concatenada com o valor puxado da pilha ( método pop )
        baseString += digits[remStack.pop()]
        // começando na base 11, cada letra do alfabeto representará a sua base
        // A representa a base 11, B a base 12 e assim sucessivamente
    }

    return baseString
}

console.log(baseConverter(100345, 2)) // 11000011111111001 ok
console.log(baseConverter(100345, 8)) // 303771 ok
console.log(baseConverter(100345, 16)) // 187F9 ok
console.log(baseConverter(100345, 35)) // 2BW0 ok
console.log(baseConverter(10, 37)) // undefined ok (error haha)

