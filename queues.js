//@ts-check
// introdução ás filas (queues)

/* as filas são estruturas de dados muito semelhantes ás pilhas
    mas em vez de LIFO elas usam um princípio diferente */

/*
    a estrutura de dados fila

    uma fila é uma coleção ordenada de itens baseada em FIFO (first in first out) isto é
    o primeiro que entra é o primeiro que sai, também conhecido como princípio first-come first-served ou
    o primeiro a chegar é o primeiro a ser servido. a adição de elementos na fila é feita na cauda (tail)
*/

// criando a classe Queue

class Queue {

    constructor() {
        this.count = 0 // controlar o tamanho da fila
        this.lowestCount = 0 // primeiro elemento da fila
        this.items = {} // usando objeto para armazenar os elementos (chave / valor)
    }

    // adicionar elementos na fila (no final da fila)
    enqueue(element) {
        this.items[this.count] = element // count é a chave do objeto items e element o valor
        // items{ count: element }
        // items{ 0: 'info' }
        // items{ 1: 'etc' }
        this.count++
    }

    // removendo elementos da fila (o primeiro item adcionado será o item a ser removido)
    dequeue() {
        if (this.isEmpty()) {
            return undefined
        }

        const result = this.items[this.lowestCount] // armazenando o valor da frente da fila
        // items[0]
        delete this.items[this.lowestCount] // removendo o elemento
        this.lowestCount++ // precisamos incrementar para remover o próximo elemento da fila
        // items[1]
        return result // retornando o elemento removido
    }

    // método que retorna true se a fila estiver vazia e false caso contrário
    isEmpty() {
        // return this.count - this.lowestCount === 0

        // count - lowestCount
        // 0 - 1 = -1 ( return false )
        // 1 - 2 = -1 ( return false )
        // 0 - 0 = 0  ( return true)

        // lowestCount sempre terá valor 1 a mais que count caso tenha algum elemento na fila
        // para calcular quantos elementos há na fila basta calcular a diferença entre as chaves
        // count e lowestCount

        return this.size() === 0 // reaproveitamento de código 
        // a função size() retorna o número de elementos da fila, se for 0 significa que está vazia
    }

    // verificando qual item está na frente da fila
    peek() {
        if (this.isEmpty()) {
            return undefined
        }
        return this.items[this.lowestCount] // retorna o item que está na frente na fila ( primeiro a entrar )

        // a variável lowestCount só tem seu valor incrementado ao excluir um item da fila
        // logo ao excluir um item da fila, lowestCount apontará para o próximo item
    }

    // verificando quantos items existem na fila
    size() {
        return this.count - this.lowestCount
    }

    // limpando a fila
    clear() {
        this.items = {}
        this.count = 0
        this.lowestCount = 0
    }

    // acrescentando o método toString para imprimir os elementos da fila em formato string
    toString() {
        if (this.isEmpty()) {
            return 'this queue is empty'
        }

        let objString = `${this.items[this.lowestCount]}`
        // string = items{lowestCount: 'element' } 
        for (let i = this.lowestCount + 1; i < this.count; i++) {
            objString = `${objString}, ${this.items[i]}`
            // semelhante a lógica da pilha
        }
        return objString
    }

}

const n = new Queue()

n.enqueue('Lucas')
n.enqueue('Laura')
n.enqueue('Janilton')
n.enqueue('Nélia')

console.log(n.toString()) // Lucas, Laura, Janilton, Nélia
console.log(n.size()) // 4
n.dequeue() // delete 'Lucas'
n.dequeue() // delete 'Laura'
console.log(n.toString()) // Janilton, Nélia
n.clear()
console.log(n.isEmpty()) // true

// ---------------------------------------------------------------------- >>

// a estrutura de dados deque

/**
    A estrutura de dados deque, também conhecida como fila de duas pontas 
    (double-ended-queue) é uma fila especial onde é possível inserir e remover 
    elementos do final ou da frente da fila    
*/

// criando a classe deque

class Deque extends Queue {

    constructor() {
        super()
        this.count = 0
        this.lowestCount = 0
        this.items = {}
    }

    /*
        pelo fato do deque permitir inserir e remover elementos das duas extremidades
        teremos também os métodos a seguir: 

        addFront - adciona um novo elemento na frente do deque
        addBack - adciona um novo elemento no fim do deque
        removeFront - remove o primeiro elemento do deque
        removeBack - remove o ultimo elemento do deque
        peekFront - exibe o primeiro elemento do deque
        peekBack - exibe o ultimo elemento do deque

    */

    // adcionando elementos na frente do deque
    addFront(element) {
        if (this.isEmpty()) { // se o deque estiver vazio
            this.addBack(element) // adciona o elemento no fim do deque (que também é a frente)

            // cenário abaixo: um elemento é removido da frente do deque
        } else if (this.lowestCount > 0) {
            this.lowestCount-- // obtendo a posição anterior ...
            this.items[this.lowestCount] = element // element agora está na frente
            // items {lowestCount: element}

        } else { // se lowestCount é igual a zero
            for (let i = this.count; i > 0; i--) {
                this.items[i] = this.items[i - 1]
                // movendo todos os elementos para a próxima posição para deixar o primeiro index livre
                // como não queremos perder nenhum valor existente, começamos a iterar pelos valores existentes
                // na propiedade items a partir do seu ultimo índice (indice - 1)
            }

            // depois que todos elementos foram movidos, a primeira posição está livre e podemos
            // sobrescrever qualquer valor existente com o elemento que queremos adcionar no deque
            this.count++
            this.lowestCount = 0
            this.items[0] = element
        }
    }

    // adciona um novo elemento no fim do deque (mesma implementação do método enqueue)
    addBack(element) {
        return this.enqueue(element)
    }

    /*
    addBack(element) {
        this.items[this.count] = element // count é a chave do objeto items e element o valor
        // items{ count: element }
        // items{ 0: 'info' }
        // items{ 1: 'etc' }
        this.count++
    }
    */

    // remove o primeiro elemento do deque (mesma implementação do dequeue)
    removeFront() {
        return this.dequeue()
    }
    /*
    removeFront() {
        if (this.isEmpty()) {
            return undefined
        }

        const result = this.items[this.lowestCount] // armazenando o valor da frente do deque
        // items[0]
        delete this.items[this.lowestCount] // removendo o elemento
        this.lowestCount++ // precisamos incrementar para remover o próximo elemento do deque
        // items[1]
        return result // retornando o elemento removido
    }
    */

    // remove o ultimo elemento do deque (mesma implementação do pop da pilha)
    // como não estamos usando um array para armazenar os elementos teremos que implementar
    // manualmente a lógica para remover. o metodo pop também devolve o elemento que foi removido

    removeBack() { // ( método roubado da classe pilha )
        if (this.isEmpty()) {
            return undefined // caso esteja vazia retorna undefined
        }

        this.count--
        const result = this.items[this.count] // armazena o elemento do topo da pilha
        delete this.items[this.count] // removendo o elemento
        return result // retornando o elemento do topo da pilha
    }

    // retorna o primeiro elemento do deque (mesma implementação do método peek da classe Queue)
    peekFront() {
        return this.peek()
    }
    /*
    peekFront() {
        if (this.isEmpty()) {
            return undefined
        }
        return this.items[this.lowestCount] // retorna o item que está na frente na fila ( primeiro a entrar )

        // a variável lowestCount só tem seu valor incrementado ao excluir um item da fila
        // logo ao excluir um item da fila, lowestCount apontará para o próximo item
    }
    */

    // esse método retorna o ultimo elemento do deque (mesma implementação do método peek da pilha)
    peekBack() {
        return this.items[this.items.length - 1]
    }
}

console.clear()

// testando pra ver se essa porra de deque funciona mesmo

const dq = new Deque()
console.log(dq.isEmpty()) // ok

dq.addBack('John')
dq.addBack('Jack')
console.log(dq.toString()) // ok (acessou o método da classe Queue)
console.log(dq.peekFront()) // ok (acessou o método da classe Queue)

dq.addBack('Camila') // ok
console.log(dq.toString())
console.log(dq.size()) // ok
console.log(dq.isEmpty()) // ok

dq.removeFront() // ok
console.log(dq.toString())
dq.removeBack() // ok
console.log(dq.toString())

console.log(dq.size())


console.log(dq.lowestCount)
dq.addFront('Lucas')
console.log(dq.toString())
console.log(dq.size()) // ok

// --------------------------------------------------------------------------- >>
// resolvendo problemas usando filas e deques

// fila circular - batata quente (hot potato)

function hotPotato(elementsList, num) {

    const fila = new Queue()
    const elimitatedList = []

    // preenchendo a fila com a lista de nomes
    for (let i = 0; i < elementsList.length; i++) {
        fila.enqueue(elementsList[i])
        // adiciona elementos na fila (no final da fila)
        // ['John', 'Jack', 'Camila', 'Ingrid', 'Carl']
        //    0       1        2         3        4 
    }

    // enquanto a fila for maior que 1
    while (fila.size() > 1) {
        for (let i = 0; i < num; i++) { // esse laço vai rodar o número de vezes passada no parâmetro

            // a linha abaixo troca os elementos de posição (movimento cirular)
            fila.enqueue(fila.dequeue())

            // a função enqueue adciona o retorno da função dequeue ao fim da fila
            // enqueue = adiciona ao fim da fila
            // dequeue = remove da fila (o primeiro a entrar é o primeio a sair)

            // A B C D ->
            // B C D A ->
            // C D A B ->
            // D A B C ->

            // dentro do laço for os elementos da lista trocam de posição em movimento
            // circular (rotatório) trocando o primeiro elemento de lugar o número de vezes
            // que foi passado por parâmetro
        }

        // quando o laço para de ser executado o primeiro lugar é inserido 
        // na lista de eliminados

        // enquanto a fila for maior que 1 a lista de eliminados será acrescentada 
        // com o primeiro membro da lista
        elimitatedList.push(fila.dequeue())
        // inserindo elemento no fim do array (push)
    }
    return { // retorna um objeto com duas propiedades (uma lista e o retorno do ultimo que sobrou da lista)
        eliminated: elimitatedList,
        winner: fila.dequeue() // o vencedor é o ultimo que sobrou na lista
    }
}

console.clear()

const names = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl']
const result = hotPotato(names, 7)
result.eliminated.forEach(name => {
    console.log(`${name} was eliminated from the hot potato game`)
})
console.log(`the winner is: ${result.winner}`)

console.clear()

// ----------------------------------------------------------------------------- >>
// verificando se é palíndromo

/* 
    um palíndromo é uma palavra, frase, número ou sequência de caracteres que é lido igualmente
    de trás pra frente ou de frente pra trás
*/

/** @param {string} aString */
function palindromeChecker(aString) {

    // verificando se a string é válida
    if (aString === undefined || aString == null ||
        aString !== null && aString.length === 0) {
        return false
    }

    const dq = new Deque()
    const lowerString = aString.toLocaleLowerCase().split(' ').join('')

    // toLocaleLowerCase - transforma todos caracteres para minúsculo
    // split - transforma a string em um array
    // join - transforma o array em string

    // esse processo é nescessário para remover espaços da string caso exista

    let isEqual = true
    let firstChar, lastChar

    for (let i = 0; i < lowerString.length; i++) {
        dq.addBack(lowerString.charAt(i))
        // colocando cada caracter da string no deque (charAt)
        // addBack adciona no final do deque
    }

    while (dq.size() > 1 && isEqual) { // enquanto tiver elementos (caracteres) no deque
        firstChar = dq.removeFront() // obtém o que está na frente
        lastChar = dq.removeBack() // obtém o que está por ultimo

        if (firstChar !== lastChar) { // compara
            // arara 
            // [a][r][a][r][a]
            //  0  1  2  3  4

            // 0 == 4 true
            // 1 == 3 true
            // isEqual = true
            isEqual = false
        }
    }
    return isEqual
}

console.log(palindromeChecker('ara ra'))
console.log(palindromeChecker('level'))
console.log(palindromeChecker('kayak'))
// --------------------------------------------------------------------------------- >>

