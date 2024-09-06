const produtosDiv = document.querySelector("#produtos")
let quantidadeCompras = 0
async function gerarProdutos() {
    try{
        const resposta = await fetch('https://fakestoreapi.com/products')
        const dados = await resposta.json()

        dados.forEach((element)=>{
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
            card.append(produtoA, botaoComprar)
            produtosDiv.appendChild(card)
            produtoA.addEventListener("click",()=>{
                localStorage.setItem("dadosProduto",element.id)
            })

        })
        
        
        
    }catch(error){
        document.write("Deu erro oh pae")
    }
}
function botaoSinistro(){
    produtosDiv.innerHTML = ""
    quantidadeCompras++

}
gerarProdutos()