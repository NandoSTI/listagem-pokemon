
const botaoAlterarTema = document.getElementById("botao-alterar-tema");
const body = document.querySelector("body");
const imagemBotaoTrocaTema = document.querySelector(".imagem-botao");


botaoAlterarTema.addEventListener("click", () => {

    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");

    body.classList.toggle("modo-escuro");

    if(modoEscuroEstaAtivo) {
        imagemBotaoTrocaTema.setAttribute("src", "./src/image/sun.png");
    } else {
        imagemBotaoTrocaTema.setAttribute("src", "./src/image/moon.png");
    }
    
});
