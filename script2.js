const produtosDiv = document.querySelector("#produtos")
let itemId = localStorage.getItem("dadosProduto")
async function frankstein() {
    try{
        const resposta = await fetch(`https://fakestoreapi.com/products/${itemId}`)
        const element = await resposta.json()
        const card = document.createElement("div")
            card.className = "card"

            const id = element.id
            
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
            
            produtoA.append(tituloProduto, fotoFoda, preco)
            card.append(produtoA)
            produtosDiv.appendChild(card)
        
            
    }catch(error){
        document.write("Deu erro pae")
    }
}
frankstein()