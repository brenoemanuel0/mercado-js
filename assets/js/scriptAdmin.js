// Create
const formCadastro = document.getElementById("formCadastro")
var isEditando = null

// 0 - Colocar tudo isso em um escutador de evento / função
formCadastro.onsubmit = (event) => {
    event.preventDefault()
    // 1 - Pegar os valores digitados na tela e colocar em variaveis
    const nomeProdutoDigitado = document.getElementById("nome").value
    const precoProdutoDigitado = Number(document.getElementById("preco").value)
    const categoriaProdutoDigitado = document.getElementById("categoria").value

    // 2 - Criar um objeto com esses valores
    const produto = {
        nome: nomeProdutoDigitado,
        preco: precoProdutoDigitado,
        categoria: categoriaProdutoDigitado
    }

    // 3 - Pegar os valores que estão no local storage (transformando eles em json)
    let produtosLocalStorage = JSON.parse(localStorage.getItem("Produtos"))
    
    if(!produtosLocalStorage) {
        produtosLocalStorage = []
    }

    // 4 - usar o .push para colocar os valores nesse json
    // Eu pego a variavel que eu criei no passo 3 e 
    // dou push usando a variavel do passo 2
    if (isEditando != null) {
        produtosLocalStorage[isEditando] = produto
    } else {
        produtosLocalStorage.push(produto)
    }

    // 5 - Salvar o novo json no local storage
    localStorage.setItem("Produtos", JSON.stringify(produtosLocalStorage))
    location.reload()
}

const produtosLocalStorage = JSON.parse(localStorage.getItem("Produtos"))
const listaProdutos = document.getElementById("itens")
// Usar o .map() para escrever no html os produtos
// '' apóstrofo ou aspas simples
// "" aspas duplas
// `` crase ${variavel}
listaProdutos.innerHTML = `
    <thead>
        <tr>
            <th>Produto</th>
            <th>Categoria</th>
            <th>Preço</th>
            <th>Excluir</th>
            <th>Editar</th>
        </tr>
    </thead>
    <tbody>
        ${produtosLocalStorage.map((produto, index) => `
            <tr>
                <td>${index} - ${produto.nome}</td>
                <td>${produto.categoria}</td>
                <td>R$ ${Number(produto.preco).toFixed(2).replace(".", ",")}</td>
                <td><button onclick="excluirProduto(${index})" >x</button></td>
                <td> <button onclick="editarProduto(${index})">Editar</button></td>
            </tr>

        `).join("")}
    </tbody>
`;


function excluirProduto(index) {
    console.log(`Vamos excluir o produto ${index}`)
    produtosLocalStorage.splice(index, 1)
    localStorage.setItem("Produtos", JSON.stringify(produtosLocalStorage))
    location.reload()
}

function editarProduto(index) {
    console.log(produtosLocalStorage[index])
    const produto = produtosLocalStorage[index]

    document.getElementById("nome").value = produto.nome
    document.getElementById("preco").value = produto.preco
    document.getElementById("categoria").value = produto.categoria
    isEditando = index
}
