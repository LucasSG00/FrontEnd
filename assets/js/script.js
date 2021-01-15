 
// Página do FeedBack
var nome = document.getElementById("nome");
var email = document.querySelector("#email");
var nomeFilme = document.querySelector("#nomeFilme");
var comentario = document.querySelector("#comentario")
var form = document.querySelector("form");
var nomeOk = false;
var emailOk = false;
var nomeFilmeOk = false;
var comentarioOk = false;

// Validação Nome
function validaNome(){
    if(nome.value.length > 2) {
        nome.style.backgroundColor = 'white';
        nomeOk = true;
    }
    else {
        nome.style.backgroundColor = ' rgb(219, 130, 130)'; 
        nomeOk = false;
        console.log(nomeOk);
    }
}

// Validação Email
function validaEmail(){
    if(email.value.indexOf('@') == -1) {
        email.style.backgroundColor = ' rgb(219, 130, 130)';
        emailOk = false;
    }
    else {
        email.style.backgroundColor = 'white';
        emailOk = true;
    }
}

// Validação Nome Filme
function validaNomeFilme(){
    if(nomeFilme.value.length > 2) {
        nomeFilme.style.backgroundColor = 'white';
        nomeFilmeOk = true
    }
    else {
        nomeFilme.style.backgroundColor = ' rgb(219, 130, 130)';
        nomeFilmeOk = false;
    }
}

// Validação Comentário
function validaComentario(){
    if(comentario.value.length > 100 || comentario.value.length == 0) {
        comentario.style.backgroundColor = ' rgb(219, 130, 130)';
        let comentValido = document.querySelector(".txtComentario");
        comentValido.style.color = 'red';
        comentarioOk = false;
    }
    else {
        comentario.style.backgroundColor = 'white';
        comentarioOk = true;
    }
}

function validacao() {
    const form = document.querySelector('form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
    })

    validaNome();
    validaEmail();
    validaNomeFilme();
    validaComentario();

    console.log(nomeOk, emailOk, nomeFilmeOk, comentarioOk);

    // Validação se der tudo Ook
    if(nomeOk == true && emailOk == true && nomeFilmeOk == true && comentarioOk == true) {
        alert('Enviado com Sucesso')


        nome.value = '';
        nome.style.backgroundColor = 'white';
        email.value = '';
        email.style.backgroundColor = 'white';
        nomeFilme.value = '';
        nomeFilme.style.backgroundColor = 'white';
        comentario.value = '';
        comentario.style.backgroundColor = 'white';
    }

}

form.addEventListener("click",function(event){
    if(event.target.style.backgroundColor != 'white') {
        event.target.style.backgroundColor = 'white';
    }
})