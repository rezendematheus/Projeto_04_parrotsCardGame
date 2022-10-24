const carta = `<div class="card-back"><img src="./img/back.png" alt=""></div>`
const lista = [ "./img/gifs/bobrossparrot.gif", 
                "./img/gifs/explodyparrot.gif", 
                "./img/gifs/fiestaparrot.gif", 
                "./img/gifs/metalparrot.gif", 
                "./img/gifs/revertitparrot.gif", 
                "./img/gifs/tripletsparrot.gif", 
                "./img/gifs/unicornparrot.gif"];
let randlista = [];
let selectedCard = 0;
let jogadas = 0;
let viradas;
let man0; let man1;
function DistribuiCartas(){
    let qtd = prompt("Com quantas cartas você quer jogar? Escolha um número par de 4 à 14.");
    while(qtd%2 !== 0 || qtd < 4 || qtd > 14){
       qtd = prompt("O número precisa ser par e estar entre 4 e 14.")
    } //Pergunta de novo se não cumpre os requisitos
    
    let mesa = document.querySelector(".card-container");

    for(i = 0; i < qtd/2; i++){
        randlista.push(lista[i]);
        randlista.push(lista[i]);
    }//Coloca um par da mesma carta até o número de cartas desejada

    randlista = randlista.sort(comparador) //Embaralha as imagens

    for(i=0; i < qtd; i++){
        mesa.innerHTML += `<div onclick="viraCarta(this)" class="card-back"><img class="parrot not-display" src=${randlista[i]}><img class="backimg" src="./img/back.png" alt=""></div>`;
    } //Coloca na mesa as cartas com as imagens embaralhadas

}
function toggle(elemento) {
    elemento.querySelector(".backimg").classList.toggle("not-display");
    setTimeout(elemento.querySelector(".parrot").classList.toggle("not-display"), 500);
}
function manipulaImagem(elemento){
    elemento.classList.toggle("virada");
    setTimeout(toggle, 500, elemento);
}   
function viraCarta(elemento){
    jogadas++
    if(elemento.classList.contains("virada") === true || elemento.classList.contains("acertou") === true){
        alert("Esta carta já está virada.")
    }
    else{
        manipulaImagem(elemento)
        if(selectedCard < 3){
            selectedCard++
            console.log(selectedCard)
        }
        if(selectedCard === 2){
            verificaCarta()
            selectedCard = 0
        }
    }
    
}
function manipula(){
    viradas = document.querySelectorAll('.virada')
    manipulaImagem(viradas[0]);
    manipulaImagem(viradas[1]);
}

function verificaCarta(){
    viradas = document.querySelectorAll('.virada');
    if(viradas[1].querySelector(".parrot").src === viradas[0].querySelector(".parrot").src){
        viradas[0].classList.remove("virada");
        viradas[1].classList.remove("virada");
        viradas[0].classList.add("acertou");
        viradas[1].classList.add("acertou");
    }
    else{  
        setTimeout(manipula, 1500);
        viradas = [];
    }
    setTimeout(fimJogo, 1500);
}
function fimJogo(){
    let container = document.querySelector(".card-container")
    if(container.querySelectorAll(".acertou").length === container.querySelectorAll(".card-back").length){
       alert(`Você ganhou em ${jogadas} jogadas!`) 
    }
}

DistribuiCartas()
function comparador() { 
	return Math.random() - 0.5; 
}