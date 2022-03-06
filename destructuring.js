// desestruturação de arrays

let [x, y] = ['a', 'b']

// o código anterior equivale: 
/*
    let x = 'a'
    let y = 'b'
*/

// usando a desestruturação de arrays para trocar valores sem variáveis "temp"

// [x, y] = [y, x]

// o código anterior equivale:

/*
    var temp = x
    x = y
    y = temp
*/

// abreviação de propiedade

let [a, b] = ['1', '2']
const obj = { a, b }

console.log(obj) // { a: '1', b: '2' }

// o código anterior equivale: 

/*
    let a = 1
    let b = 2
    let obj = { a: a, b: b}
*/

class Book {
    constructor(title, pages, author) {
        this.title = title
        this.pages = pages
        this.author = author
    }

    printTitle(title) {
        console.log(this.title)
    }
}

let book = new Book('Título', 350, 'lucas')

book.printTitle()
console.log(book.author)

// -------------------------------------------------------------------- >>

// Aula destructuring 

// objeto opala
const Opala = {
    nome: "Opala",
    ano: 1992,
    cor: "Vinho",
    a_venda: false,
    modelo: "Diplomata",
    motor: "6 Cilindros"
}

// Forma habitual de acessar atributos do objeto:
const nome_ = Opala.nome
console.log(nome_)
const ano_ = Opala.ano;
console.log(ano_)
// ou
console.log(Opala.motor)

// usando o destructuring
const { nome, ano, cor, a_venda, modelo, motor } = Opala
console.log(ano)

// usando o destructuring e "renomeando" as variaveis dentro desta const
const { nome: novoNome, ano: novoAno, cor: novaCor, a_venda: novoAvenda, modelo: novoModelo, motor: novoMotor } = Opala
console.log(novoNome) // 'novoNome' acessa os valores de 'nome'
console.log(novaCor) // 'novaCor' acessa os valores de 'cor'

// Criando um objeto maior

const Brasil = {
    populacao: "212 Bilhões",
    renda_per_capta: "US$ 6.796,84",
    expectativa_vida: "75 Anos",
    pib: "US$ 1.445 Trilhões",
    pais: "Brasil",
    idioma: "Português",
    //capital: "Brasília",
    moeda: "Real",

    // um objeto dentro de outro objeto
    religiao: {
        catolica: "64.6 %",
        protestante: "22.2 %",
        espirita: "2.0 %",
        outras: "3.2 %",
        nenhuma: "8.0 %"
    }
}

// Usando o destructuring 
const { capital, religiao: { catolica } } = Brasil
// acessando capital e 'catolica' dentro do 'objeto' religião
console.log(capital, catolica)

// acessando o atributo do objeto religião e atribuindo á variável
const { religiao: { espirita } } = Brasil
console.log(espirita)

// Agora supondo que a captal (ou qualquer outro atributo) não faça parte do objeto:
// Normalmente faria-se:
let obterCapital = Brasil.capital
obterCapital = !obterCapital ? "Não Informado" : capital // checar se a capital existe no objeto
console.log(obterCapital) // retornou não informado, pois a capital 'Brasília' foi comentada no objeto

// Usando o destructuring:
const { moeda: obterMoeda = "Não Informado" } = Brasil
console.log(obterMoeda) // se o atributo existir retorna o valor dele, caso contrário retorna 'não informado'

// Outro exemplo usando destructuring
const { moeda, ...outras_informacoes } = Brasil
// obtendo o valor de 'moeda' e colocando o resto dos atributos na nova variavel outras_informacoes
console.log(outras_informacoes)

// Agora suponto que eu queira uma função que retorne um atributo do objeto
// Normalmente faria-se:
let expectativa_vida = (pais) => pais.expectativa_vida
console.log(expectativa_vida(Brasil))

// Usando o destructuring:
let Expectativa = ({ expectativa_vida }) => expectativa_vida
console.log(Expectativa(Brasil))
// ou
let exp = Expectativa(Brasil)
console.log(exp)

// Usando o destructuring em arrays
const favorite_languages = ["Javascript", "C#", "C++", "HTML", "CSS"]
// Antigamente para obter um valor faria-se:
const favorite = favorite_languages[0]
console.log(favorite)

// Usando o destructuring:
let [js, cs, cpp, html, css] = favorite_languages
console.log(cs)

// Usando o destructuring para tratar objetos ou funções nulas:
const objeto_nulo = () => null
const { x = "valor padrão" } = objeto_nulo() || {}
// usando || {} no final da chamada da função para que a mesma retorne como um objeto
console.log(x)