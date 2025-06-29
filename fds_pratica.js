const botao = document.querySelector("#botao");
let mensagem = document.querySelector("#mensagem");

botao.addEventListener("click",ola)

function ola(){

    mensagem.innerHTML = "Bem Vindo!";
    botao.style.background="white";
}


botao.addEventListener("mouseover", e =>{

    botao.style.background="grey";
})
    


botao.addEventListener("mouseout", e =>{

    botao.style.background="bisque";
})



const link = document.querySelector("#link");

link.addEventListener("mouseover", e =>{

    link.style.color="red";
})

link.addEventListener("mouseout", e =>{

    link.style.color="black";
})
