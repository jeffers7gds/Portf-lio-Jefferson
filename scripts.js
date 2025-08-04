/*
    JavaScript NÃO É Java
    Variáveis - São um pedacinho da memória do computador
    que vc separa para guardar o que quiser.

    console.log() - Ferramenta do JS que tudo que colocar
    ele mostra na tela.

    função - pedaço de cod. que executa quando é chamado.

    document = HTML
    queryselector("") = seleciona o que eu quiser no HTML.
*/

let imagem = document.querySelector(".copao-verde")
let fundo = document.querySelector(".circulo")

function trocaImagem(endereco){
    imagem.src = endereco
}

function trocaFundo(cor){
    fundo.style.background = cor
}

