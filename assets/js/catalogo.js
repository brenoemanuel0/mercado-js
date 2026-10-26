
// Objeto ou Lista para quem veio do pyton
// chave / index : valor / resultado

const produto = {
    nome: "Arroz 5kg",
    preco: 25.90,
    categoria: "Mercearia"
}

// array de objeto

const produtos = [{
        nome: "Arroz 5kg",
        preco: 25.90,
        categoria: "Mercearia"
    },
    {
        nome: "Nuget",
        preco: 24,
        categoria: "Frios"
    },
    {
        nome: "Leite 1L",
        preco: 8,
        categoria: "Laticinio"
    }
]




// Lista todos os nomes
const nomes = produtos.map(produto => produto.nome)


produtos.push({
    nome: "miojo",
    preco: 2.99,
    categoria: "Mercearia"
})



// SetItem serve para Adicionar itens no localStorage
const nome = "MErcearia Proz"
localStorage.setItem("Minha Loja", nome)

// getItem serve para pegar um item do localStorage
const minhaLoja = localStorage.getItem("Minha Loja")

const produtosString = JSON.stringify(produtos)
localStorage.setItem("Produtos", produtosString)

// 1 - Adicionar 3 produtos no final do arry usando .push()

console.log("exercicio 1")

produtos.push({
        nome: "tang guarana",
        preco: 0.50,
        categoria: "merceria"
    },

    {
        nome: "guarana lata",
        preco: 4.00,
        categoria: "bebidas"
    })

    console.log(produtos)

localStorage.setItem("Produtos", JSON.stringify(produtos))
    
// 2 - Usar o .filter() para achar o produto mais barato

console.log("exercicio 2")
let precoprodutos = produtos.map((produto) => produto.preco)
let menorprodutoreduce = precoprodutos.reduce((produt, prox) => (produt < prox ? produt : prox))
let menorprecofilter = produtos.filter((produto) => (produto.preco === menorprodutoreduce))

console.log(menorprecofilter)

// 3 - Usar o .find() para achar algum produto pelo nome
console.log("exercicio 3")

let acharmiojo = produtos.find((miojo) => miojo.nome == "miojo")
console.log(acharmiojo)
// 4 - Usar o .reduce() para fazer a soma dos preços
console.log("exercicio 4")
let totalpreco = produtos.reduce((produto, prox) => produto + prox.preco, 0)
console.log(totalpreco)
// 5 - Salvar um dado no localStorage e ler o mesmo

produtos.push({
        nome: "morango 1kg",
        preco: 50.00,
        categoria: "ortifrut"
    },)

localStorage.setItem("Produtos", JSON.stringify(produtos))


const valor = localStorage.getItem("Produtos");
console.log(valor);

