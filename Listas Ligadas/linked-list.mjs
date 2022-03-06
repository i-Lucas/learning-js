// importando as funções e classes base
import pacote from './core.mjs'

// importando as funções de teste
import test from './linked-lists-test.mjs'

const {
    Compare,
    lesserEquals, biggerEquals, defaultCompare,
    defaultEquals, defaultToString, swap,
    reverseCompare, defaultDiff
} = pacote

const { linkedListTest, DoublyLinkedListTest, CircularLinkedListTest, SortedLinkedListTest, printList } = test

// --------------------------------------------------------------------------------------------------- >>

// essa classe representa o nó a ser adcionado nas listas
class Node {
    constructor(element, next) {
        this.element = element // elemento a ser adcionado no nó
        this.next = next // 'ponteiro' que faz a ligação para o próximo nó da lista
    }
}

// --------------------------------------------------------------------------------------------------- >>

/* 
    listas ligadas (linked lists)
                      
    head  ----->       node                   node                   node             undefined
                  [value | next] -----> [value | next]  -----> [value | next]  -----> [       ]

*/

class LinkedList {

    // função defaultEquals retorna true ou false (core.mjs)
    constructor(equalsFn = defaultEquals) {

        this.equalsFn = equalsFn // função de comparação
        this.count = 0 // armazenar número de elementos
        this.head = undefined // referência ao primeiro elemento
    }

    // inserindo um nó no final da lista-ligada
    push(element) {

        const node = new Node(element) // instanciando o objeto da classe Node
        let current // variável que aponta para o item atual da lista

        if (this.head == null) { // caso não exista nenhum elemento no início da lista (head) signifca que a lista está vazia
            this.head = node; // caso esteja vazia o nó será o primeiro da lista
        } else {
            current = this.head // aponta para o primeiro item
            while (current.next != null) { // obtém o ultimo item
                current = current.next;
            }
            current.next = node // atribui o novo nó no final
        }
        this.count++; // incrementa o tamanho da lista
    }

    /*                      
        head  ----->    undefined                              node                  
                      [          ] -----> head -----> [ element | node.next]  -----> ...
    */

    // removendo elementos de uma posição específica da lista 
    removeAt(index) { // posição

        // verificar valores fora do intervalo
        if (index >= 0 && index < this.count) { // verificando se index é válido 

            let current = this.head // referência ao primeiro da lista

            // remove o primeiro item
            if (index === 0) {
                this.head = current.next // head agora aponta para o segundo elemento
            } else {

                // let previous // referência ao elemento que estiver antes de current
                const previous = this.getElementAt(index - 1) // usando função para obter o previous
                current = previous.next

                // a variável current armazena o nó que será removido. assim, para remover o nó current
                // ligamos previus.next a current.next. deste modo current ficará perdido na memória e 
                // estará disponível para limpeza pelo garbage collector
                previous.next = current.next
            }
            this.count--   // atualiza o tamanho da lista
            return current.element
        }
        return undefined // caso index não for válido retorna undefined (nenhum elemento é removido)
    }

    // percorrer a lista com laço até alcançar posição desejada
    getElementAt(index) {

        // verificando se o index é uma posição válida
        if (index >= 0 && index <= this.count) {

            let node = this.head // referência ao primeiro nó

            // percorrendo a lista até encontrar o index desejado
            for (let i = 0; i < index && node != null; i++) {
                node = node.next
            }
            return node // retorna o elemento na posição index
        }
        // se a posição for inválida retorna undefined pois não existe na lista
        return undefined
    }

    // inserindo um elemento em qualquer posição
    insert(element, index) {

        if (index >= 0 && index <= this.count) { // verificando se o index é válido (existe na lista)

            const node = new Node(element)

            // adiciona na primeira posição
            if (index === 0) {

                const current = this.head // current armazena o head (primeiro nó)
                node.next = current // o next de node aponta para o current (fazendo dele o segundo elemento)
                this.head = node // agora head é o node adcionado

            } else {

                const previous = this.getElementAt(index - 1) // obtendo o nó anterior
                const current = previous.next // current armazena o nó posterior ao current
                node.next = current // o next do node aponta para o current 
                previous.next = node //
            }
            this.count++ // atualiza o tamanho da lista
            return true
        }
        return false // caso o index seja inválido
    }

    // retornando a posição índex de um elemento
    indexOf(element) {

        let current = this.head // armazena o head

        // iterando pelos elementos começando por head (índice 0) até o tamanho da lista (count)
        // verificando se current é null ou undefined para evitar erros em tempo de execução
        for (let i = 0; i < this.count && current !== null; i++) {

            // verifica se o elemento que estamos procurando é o elemento no nó current
            if (this.equalsFn(element, current.element)) {
                return i // se for igual retorna o índice
            }
            current = current.next // armazena o próximo elemento
        }
        return -1 // caso o elemento não exista na lista retorna -1
    }

    // removendo um elemento da lista
    remove(element) {
        const index = this.indexOf(element) // obtém o índex do elemento
        return this.removeAt(index) // remove o elemento que está no índex armazenado
    }

    size = () => this.count  // obtém o tamanho da lista
    isEmpty = () => this.size() === 0 ? true : false // verifica se está vazia
    getHead = () => this.head  // retorna o primeiro nó
    clear = () => { this.head = undefined, this.count = 0 } // limpa a lista

    // imprime os elementos da lista em forma de string
    toString() {
        // verifica se existe algo na lista
        if (this.head == null) {
            return ''
        }

        let str = `${this.head.element}` // string interpolada com o elemento head
        let current = this.head.next; // obtem o próximo elemento

        // for começa de 1 pois já temos o índice 0 -> head
        for (let i = 1; i < this.size() && current != null; i++) {

            str = `${str} - ${current.element}`; // concatenando a string com o elemento atual
            current = current.next; // obtem o próximo elemento
        }
        return str // retorna a string com os elementos da lista
    }

}

// --------------------------------------------------------------------------------------------------- >>

/* 
    listas duplamente ligadas (doubly connected lists)
                      
    head  ----->       node                      node                       node    tail          undefined
               [prev][value][next] -----> [prev][value][next]  -----> [prev][value][next]  -----> [   x   ]
    [ x ] <-----                <-----------               <----------- 
*/

class DoublyNode extends Node { // herdando propiedades e métodos da classe Node

    constructor(element, next, prev) {

        super(element, next) // inicializa o construtor da classe Node 
        this.prev = prev // referência ao elemento anterior da lista
    }
}

class DoublyLinkedList extends LinkedList { // herdando propiedades e métodos da classe LinkedList

    constructor(equalsFn = defaultEquals) { // função defaultEquals retorna true ou false

        super(equalsFn) // chama o construtor de LinkedList e inicializará as propiedades equalsFn, count e head
        this.tail = undefined // referência ao ultimo elemento da lista
    }

    // inserindo elemento em qualquer posição
    insert(element, index) {

        if (index >= 0 && index <= this.count) { // verificando se o índice é válido

            const node = new DoublyNode(element) // instanciando o objeto DoublyNode
            let current = this.head // referência ao primeiro elemento da lista

            // se o índice for 0
            if (index === 0) {
                if (this.head == null) { // se a lista estiver vazia

                    this.head = node // head e tail aponta para o novo nó
                    this.tail = node

                } else { // se não ( a lista não está vazia )

                    node.next = this.head // move o head para o próximo item
                    current.prev = node // aponta para o novo elemento ( node )
                    //this.head.prev = node
                    this.head = node // head apontará para node ( será o primeiro elemento da lista )
                }
            }
            else if (index === this.count) { // se índex for o último item

                current = this.tail // current apontará para o ultimo elemento
                current.next = node // node agora é o ultimo elemento
                node.prv = current // o que era o ultimo passa ser o antepenúltimo
                this.tail = node // o tail da lista agora é o node

            } else { // se não (o índice passado não é o último) -> adcionar o nó no meio da lista

                const previous = this.getElementAt(index - 1) // iterando pela lista até alcançar a posição desejada
                current = previous.next
                node.next = current
                previous.next = node
                current.prev = node
                node.prev = previous
            }

            this.count++ // atualiza o tamanho da lista
            return true
        }
        return false
    }

    // removendo elementos de qualquer posição
    removeAt(index) {

        if (index >= 0 && index < this.count) { // verificando se o index é válido

            let current = this.head // definindo a variável current como primeiro elemento da lista

            // se o index é zero (primeiro elemento)
            if (index === 0) {
                this.head = current.next // head aponta pro próximo elemento

                // se tiver apenas um item na lista
                if (this.count === 1) {
                    this.tail = undefined

                } else {
                    this.head.prev = undefined
                }
            } else if (index === this.count - 1) { // ultimo item

                current = this.tail
                this.tail = current.prev
                this.tail.next = undefined
            } else {
                current = this.getElementAt(index)
                const previous = current.prev

                // faz a ligação de previous com o next de current - pula esse elemento para removê-lo
                previous.next = current.next
                current.next.prev = previous
            }
            this.count-- // atualiza o tamanho da lista
            return current.element
        }
        return undefined
    }

}

// --------------------------------------------------------------------------------------------------- >>

/* 
    Listas ligadas circulares (circular linked lists)

    head ---->       node                    node                 node
                [value | next]  -----> [value | next]  -----> [value | next]
                      <------------------------------------------------
*/

class CircularLinkedList extends LinkedList {

    constructor(equalsFn = defaultEquals) { // função defaultEquals returna true ou false
        super(equalsFn)
    }

    // inserindo um novo elemento em qualquer posição
    insert(element, index) {

        if (index >= 0 && index <= this.count) { // verificando se o index é válido

            const node = new Node(element) // instanciando um novo nó
            let current = this.head // current aponta para o primeiro elemento

            // se o index passado for zero
            if (index === 0) {

                // e se não existir nenhum elemento no head
                if (this.head == null) {
                    this.head = node        // node agora está em primeiro
                    node.next = this.head   // node.next aponta para o começo (pois é circular)

                } else { // (se não) -> se existir algum elemento no head

                    node.next = current // o next do node apontará para quem estiver em primeiro
                    current = this.getElementAt(this.size()) // current armazenará o elemento que estiver no ultimo nó

                    // atualiza o ultimo elemento
                    this.head = node // node agora é o head
                    current.next = this.head // current.next aponta para o começo (circulo)
                }

            } else { // se o index não for zero

                const previous = this.getElementAt(index - 1) // armazena quem estiver antes do index passado
                node.next = previous.next // o próximo elemento de node aponta pra quem estiver antes do index passado
                previous.next = node // aponta pro head
            }
            this.count++ // atualiza o tamanho da lista
            return true // caso a operação tenha sido realizada retorna true
        }
        return false // retorna falso se o índex for inválido
    }

    // removendo elementos de qualquer posição
    removeAt(index) {

        if (index >= 0 && index < this.count) { // verificando se o index é válido

            let current = this.head //  current aponta para o primeiro elemento

            if (index === 0) { // se o índex passado for zero

                if (this.size() === 1) { // se só existir um elemento dentro da lista
                    this.head = undefined // remove ele

                } else { // se não (existem mais elementos dentro da lista)

                    const removed = this.head // armazena o primeiro elemento
                    current = this.getElementAt(this.size()) // armazena o último elemento

                    this.head = this.head.next // o head agora é o elemento que vem após ele
                    current.next = this.head // o último elemento agora aponta pro primeiro elemento (circulo)
                    current = removed // o últomo elemento recebe o primeiro elemento
                }

            } else { // se não (se o índex passado não for zero)

                // não há necessidade de atualizar o último elemento da lista circular
                const previous = this.getElementAt(index - 1) //
                current = previous.next
                previous.next = current.next
            }
            this.count--   // atualiza o tamanho da lista
            return current.element
        }
        return undefined
    }
}

// --------------------------------------------------------------------------------------------------- >>

/* 
    Listas ligadas ordenadas (ordered linked lists)

    head  ---->       node         node         node         node
                    [index 0] -> [index 1] -> [index 2] -> [index 3]

*/

class SortedLinkedList extends LinkedList {

    constructor(equalsFn = defaultEquals, compareFn = defaultCompare) {

        super(equalsFn)
        this.compareFn = compareFn // compareFn usa a função defaultCompare como padrão
    }

    // inserindo elementos na ordem
    insert(element, index = 0) {

        if (this.isEmpty()) { // caso a lista esteja vazia

            // chama o método insert de LinkedList e insere o elemento no índice zero
            return super.insert(element, index)
        }

        // se não (se a lista não estiver vazia)
        const pos = this.getIndexNextSortedElement(element) // obter index correto para inserir element
        return super.insert(element, pos)
    }

    getIndexNextSortedElement(element) {

        let current = this.head // obtém o primeiro elemento

        for (let i = 0; i < this.size() && current; i++) {

            // compara o elemento passado por parâmetro com os elementos da lista 
            const comp = this.compareFn(element, current.element)

            // se a comparação retornar -1
            if (comp === Compare.LESS_THAN) {
                return i // a função getIndexNextSortedElement retorna i
            }
            // itera pelos elementos
            current = current.next
        }
        return i
    }
}

// ------------------------------------- >> testes << -------------------------------------

const linked_list = new LinkedList();
linkedListTest(linked_list)

const double = new DoublyLinkedList()
DoublyLinkedListTest(double)

const circular = new CircularLinkedList()
CircularLinkedListTest(circular)

const sorted = new SortedLinkedList()
SortedLinkedListTest(sorted)

