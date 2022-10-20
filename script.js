const carta = `<div class="card-back"><img src="./img/back.png" alt=""></div>`
const lista = [`./img/gifs/bobrossparrot.gif`, `./img/gifs/expldyparrot.gif`, `./img/gifs/fiestaparrot.gif`, `./img/gifs/metalparrot.gif`, `./img/gifs/reveritparrot.gif`, `./img/gifs/tripletsparrot.gif`, `./img/gifs/unicornparrot.gif`];
let randlista = [];

function DistribuiCartas(){
    let qtd = prompt("Com quantas cartas você quer jogar? Escolha um número par de 4 à 14.");
    while(qtd%2 !== 0 || qtd < 4 || qtd > 14){
       qtd = prompt("O número precisa ser par e estar entre 4 e 14.")
    } //Pergunta de novo se não cumpre os requisitos
    
    let mesa = document.querySelector(".card-container")

    for(i=0; i < qtd; i++){
        mesa.innerHTML += carta;
    }

    for(i = 0; i < qtd/2; i++){
        randlista.push(lista[i]);
        randlista.push(lista[i]);
    }//Coloca um par da mesma carta até o número de cartas desejada

    randlista.sort(comparador())

    console.log("Passou")
}
DistribuiCartas()
function comparador() { 
	return Math.random() - 0.5; 
}