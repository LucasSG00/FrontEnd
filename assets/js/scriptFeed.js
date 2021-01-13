
 // Página do FeedBack
let nome = document.getElementById("nome");
let email = document.querySelector("#email");
let nomeFilme = document.querySelector("#nomeFilme");
let comentario = document.querySelector("#comentario")
let form = document.querySelector("form");
let nomeOk = false;
let emailOk = false;
let nomeFilmeOk = false;
let comentarioOk = false;

nome.style.width = '100%';
email.style.width = '100%';

function validacao() {

    let form = document.querySelector('form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
    })

    // Validação Nome
    if(nome.value.length > 3) {
        nome.style.backgroundColor = 'white';
        nomeOk = true
    }
    else {
        nome.style.backgroundColor = ' rgb(219, 130, 130)';
    }

    // Validação Email
    if(email.value.indexOf('@') == -1) {
        email.style.backgroundColor = ' rgb(219, 130, 130)';
    }
    else {
        email.style.backgroundColor = 'white';
        emailOk = true;
    }

    // Validação Nome Filme
    if(nomeFilme.value.length > 0) {
        nomeFilme.style.backgroundColor = 'white';
        nomeFilmeOk = true
    }
    else {
        nomeFilme.style.backgroundColor = ' rgb(219, 130, 130)';
    }

    // Validação Comentário
    if(comentario.value.length > 100) {
        comentario.style.backgroundColor = ' rgb(219, 130, 130)';
        let comentValido = document.querySelector(".txtComentario");
        comentValido.style.color = 'red';
    }
    else {
        comentario.style.backgroundColor = 'white';
        comentarioOk = true
    }

    // Validação se der tudo Ook
    if(nomeOk == true && emailOk == true && nomeFilmeOk == true && comentarioOk == true) {
        alert('Enviado com Sucesso')

        nome.textContent = '';
        nome.style.backgroundColor = 'white';
        email.textContent = '';
        email.style.backgroundColor = 'white';
        nomeFilme.textContent = '';
        nomeFilme.style.backgroundColor = 'white';
        comentario.textContent = '';
        comentario.style.backgroundColor = 'white';
    }

}

form.addEventListener("click",function(event){
    if(event.target.style.backgroundColor != 'white') {
        event.target.style.backgroundColor = 'white';
    }
})