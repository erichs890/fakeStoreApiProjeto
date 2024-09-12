const produtosDiv = document.querySelector("#produtos")
let quantidadeCompras = 0

async function gerarProdutos() {
    try {
        const resposta = await fetch('https://fakestoreapi.com/products')
        const dados = await resposta.json()

        dados.forEach((element) => {
            const card = document.createElement("div")
            card.className = "card"

            const produtoA = document.createElement("a")
            produtoA.className = "produtoA"
            produtoA.href = "produto.html"

            const tituloProduto = document.createElement("h4")
            tituloProduto.className = "tituloProduto"
            tituloProduto.textContent = element.title

            const fotoFoda = document.createElement("img")
            fotoFoda.className = "fotoFoda"
            fotoFoda.src = element.image

            const preco = document.createElement("p")
            preco.className = "preco"
            preco.textContent = `R$ ${element.price}`

            const botaoComprar = document.createElement("button")
            botaoComprar.className = "botaoComprar"
            botaoComprar.textContent = "Comprar"

            // Atualiza o contador do carrinho ao clicar no botão
            botaoComprar.addEventListener("click", () => {
                botaoSinistro()
            })

            produtoA.addEventListener("click", () => {
                localStorage.setItem("dadosProduto", element.id)
            })

            produtoA.append(tituloProduto, fotoFoda, preco)
            card.append(produtoA, botaoComprar)
            produtosDiv.appendChild(card)
        })
    } catch (error) {
        console.error("Deu erro oh pae", error)
    }
}

function botaoSinistro() {
    quantidadeCompras++
    document.querySelector("#contadorCarrinho").textContent = quantidadeCompras
}

function carrinho() {
    const carrinho = document.querySelector("#carrinho")
    const carrinhoImg = document.createElement("img")
    carrinhoImg.src = "shopping_cart.png"

    carrinho.append(carrinhoImg)
}

gerarProdutos()
carrinho()
