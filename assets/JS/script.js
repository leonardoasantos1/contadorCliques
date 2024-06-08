const cliques = document.getElementById("botao");
const contagem = document.getElementById("counter");

    let counter = 0

    botao.addEventListener("click", function(){
        counter++;
        contagem.innerHTML = `<strong id='counter'>${counter.toString()}</strong>`;
    });

    reset.addEventListener("click", function(){
        contagem.innerHTML = `<strong id='counter'>${counter = 0}</strong>`;
    })