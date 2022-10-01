let tentativas = 6;
let listaDinamica = [];
let palavraSecretaCategoria;
let palavraSecretaSorteada;
const palavras = [
    palavra01 = {
    nome: "UNIVERSO",
    categoria: "GERAL"
    },
    palavra02 = {
    nome: "BURACOS-NEGROS",
    categoria: "GERAL"
    },
    palavra03 = {
    nome: "LUNETA",
    categoria: "INSTRUMENTO"
    },
    palavra04 = {
    nome: "RADIOTELÉSCOPIO",
    categoria: "INSTRUMENTO"
    },
    palavra05 = {
    nome: "EXTRAGALÁTICA",
    categoria: "ESTUDO"
    },
    palavra06 = {
    nome: "RADIOFÍSICA",
    categoria: "ESTUDO"
    },
    palavra07 = {
    nome: "JOHANNES-KEPLER",
    categoria: "ASTRÔNOMO"
    },
    palavra08 = {
    nome: "WILLIAM-HYDE",
    categoria: "ASTRÔNOMO"
    },
    palavra09 = {
    nome: "LUA",
    categoria: "CORPO"
    },
    palavra10 = {
    nome: "CORPOS-CELESTES",
    categoria: "GERAL"
    },    
]

criarPalavraSecreta();
function criarPalavraSecreta(){
    const indexPalavra = parseInt(Math.random() * palavras.length)
    
    palavraSecretaSorteada = palavras[indexPalavra].nome;
    palavraSecretaCategoria = palavras[indexPalavra].categoria;
}

montarPalavraNaTela();
function montarPalavraNaTela(){
    const categoria = document.getElementById("categoria");
    categoria.innerHTML = palavraSecretaCategoria;

    const palavraTela = document.getElementById("palavra-secreta");
    palavraTela.innerHTML = "";
    
    for(i = 0; i < palavraSecretaSorteada.length; i++){  
        if(listaDinamica[i] == undefined){
            if (palavraSecretaSorteada[i] == " ") {
                listaDinamica[i] = " ";
                palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letrasEspaco'>" + listaDinamica[i] + "</div>"
            }
            else{
                listaDinamica[i] = "&nbsp;"
                palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"
            }     
        }
        else{
            if (palavraSecretaSorteada[i] == " ") {
                listaDinamica[i] = " ";
                palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letrasEspaco'>" + listaDinamica[i] + "</div>"
            }
            else{
                palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"
            }    
        }
    }   
}

function verificaLetraEscolhida(letra){
    document.getElementById("tecla-" + letra).disabled = true;
    if(tentativas > 0)
    {
        mudarStyleLetra("tecla-" + letra, false);
        comparalistas(letra);
        montarPalavraNaTela();
    }    
}

function mudarStyleLetra(tecla, condicao){
    if(condicao == false)
    {
        document.getElementById(tecla).style.background = "#C71585";
        document.getElementById(tecla).style.color = "#ffffff";
    }
    else{
        document.getElementById(tecla).style.background = "#008000";
        document.getElementById(tecla).style.color = "#ffffff";
    }

    
}

function comparalistas(letra){
    const pos = palavraSecretaSorteada.indexOf(letra)
    if(pos < 0){
        tentativas--
        carregaImagemForca();

        if(tentativas == 0){
            abreModal("OPS!", "Não foi dessa vez ... A palavra secreta era <br>" + palavraSecretaSorteada);
        }
    }
    else{
        mudarStyleLetra("tecla-" + letra, true);
        for(i = 0; i < palavraSecretaSorteada.length; i++){
            if(palavraSecretaSorteada[i] == letra){
                listaDinamica[i] = letra;
            }
        }
    }
    
    let vitoria = true;
    for(i = 0; i < palavraSecretaSorteada.length; i++){
        if(palavraSecretaSorteada[i] != listaDinamica[i]){
            vitoria = false;
        }
    }

    if(vitoria == true)
    {
        abreModal("PARABÉNS!", "Você venceu...");
        tentativas = 0;
    }
}

function carregaImagemForca(){
    switch(tentativas){
        case 5:
            document.getElementById("imagem").style.background  = "url('./img/f2.png')";
            break;
        case 4:
            document.getElementById("imagem").style.background  = "url('./img/f3.png')";
            break;
        case 3:
            document.getElementById("imagem").style.background  = "url('./img/f4.png')";
            break;
        case 2:
            document.getElementById("imagem").style.background  = "url('./img/f5.png')";
            break;
        case 1:
            document.getElementById("imagem").style.background  = "url('./img/f6.png')";
            break;
        case 0:
            document.getElementById("imagem").style.background  = "url('./img/f7.png')";
            break;
        default:
            document.getElementById("imagem").style.background  = "url('./img/f1.png')";
            break;
    }
}

function abreModal(titulo, mensagem){
    let modalTitulo = document.getElementById("exampleModalLabel");
    modalTitulo.innerText = titulo;

    let modalBody = document.getElementById("modalBody");
    modalBody.innerHTML = mensagem;

    $("#myModal").modal({
        show: true
    });
}

let bntReiniciar = document.querySelector("#btnReiniciar")
bntReiniciar.addEventListener("click", function(){
    location.reload();
});




