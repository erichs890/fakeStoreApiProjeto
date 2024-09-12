const produtosDiv = document.querySelector("#produtos");
let itemId = localStorage.getItem("dadosProduto");

async function frankstein() {
    try {
        const resposta = await fetch(`https://fakestoreapi.com/products/${itemId}`);
        const element = await resposta.json();
        const card = document.createElement("div");
        card.className = "card";

        const produtoA = document.createElement("a");
        produtoA.className = "produtoA";
        produtoA.href = "produto.html";

        const tituloProduto = document.createElement("h4");
        tituloProduto.className = "tituloProduto";
        tituloProduto.textContent = element.title;

        const fotoFoda = document.createElement("img");
        fotoFoda.className = "fotoFoda";
        fotoFoda.src = element.image;

        const preco = document.createElement("p");
        preco.className = "preco";
        preco.textContent = `R$ ${element.price}`;

        const botaoComprar = document.createElement("button");
        botaoComprar.className = "botaoComprar";
        botaoComprar.textContent = "Voltar";

        botaoComprar.addEventListener("click", ()=>{
            window.location.href = "index.html";
        })

        const descricao = document.createElement("p")
        descricao.className = "descricao"
        descricao.textContent = element.description

        // Adiciona o título, a imagem e o preço ao link
        produtoA.append(tituloProduto, fotoFoda, preco, descricao);
        // Adiciona o link e o botão ao card
        card.append(produtoA, botaoComprar);
        // Adiciona o card ao container de produtos
        produtosDiv.appendChild(card);
    } catch (error) {
        console.error("Deu erro:", error);
    }
}

frankstein();
