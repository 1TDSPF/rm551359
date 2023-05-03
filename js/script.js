// recuperar um elemento bun que está no inde html
const btn = document.getElementById("meu-btn");

//atrelando um evento de click ao button que foi recuperado.

btn.addEventListener("click", function(){
    
    //função matemática - math
    //random = gera números aleatórios entre 0 e 1. ex: 0.234242;
    //floor = arredonda o numero para baixo
    //cell = arredonda o numero para cima
    //round = arredonda o numero aleatoriamente
    let r,g,b;

    r = Math.round(Math.random() * 255);
    g = Math.round(Math.random() * 255);
    b = Math.round(Math.random() * 255);

});
    
    // adicionando um atributo ao elemento button

    this.setAttribute("style",`background-color:rgb(${r},${g},${b});`);

    //DESAFIO
    //recupere o elemento tit-sec e atrele a ele um evento de mouse a sua escolha.
    //altere a cor de fundo e a cor de texto quando o evento ocorrer.

    const tittsec = document.getElementById("titt-sec");

    tittsec.addEventListener("click", function(){
        let r,g,b;

    r = Math.round(Math.random() * 255);
    g = Math.round(Math.random() * 255);
    b = Math.round(Math.random() * 255);

    this.setAttribute("style",`background-color:rgb(${r},${g},${b});`);


});
    


