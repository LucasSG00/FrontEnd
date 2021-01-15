
// Validação Formulário
let nome = document.querySelector("#txtNome")
let sobrenome = document.querySelector("#txtSobrenome")
let email = document.querySelector("#txtEmail")
let assunto = document.querySelector("#txtAssunto")
let nomeOk = false; let sobrenomeOk = false;
let emailOk = false; let assuntoOk = false;

function validaNome(){
    if(nome.value.length > 2) {
        nome.style.backgroundColor = 'black';
        aviso = document.querySelector(".avisoNome").style.display = 'none';
        nomeOk = true;
    }
    else {
        nome.style.backgroundColor = 'white';
        aviso = document.querySelector(".avisoNome").style.display = 'block';
        nomeOk = false;
    }
}

function validaSobrenome(){
    if(sobrenome.value.length > 2) {
        sobrenome.style.backgroundColor = 'black';
        aviso = document.querySelector(".avisoSobrenome").style.display = 'none';
        sobrenomeOk = true;
    }
    else {
        sobrenome.style.backgroundColor = 'white';
        aviso = document.querySelector(".avisoSobrenome").style.display = 'block';
        sobrenomeOk = false;
    }
}

function validaEmail(){
    if(email.value.length > 2) {
        email.style.backgroundColor = 'black';
        aviso = document.querySelector(".avisoEmail").style.display = 'none';
        emailOk = true;
    }
    else {
        email.style.backgroundColor = 'white';
        aviso = document.querySelector(".avisoEmail").style.display = 'block';

        emailOk = false;
    }
}

function validaAssunto(){
    if(assunto.value.length > 100 || assunto.value.length != 0) {
        assunto.style.backgroundColor = 'black';
        aviso = document.querySelector(".avisoAssunto").style.display = 'none';
        assuntoOk = true;
    }
    else {
        assunto.style.backgroundColor = 'white';
        aviso = document.querySelector(".avisoAssunto").style.display = 'block';
        assuntoOk = false;
    }
}

function validacao(){
    validaNome(); validaSobrenome();
    validaEmail(); validaAssunto();

    if(nomeOk == true && emailOk == true && sobrenomeOk == true && assuntoOk == true) {
        alert("Enviado com sucesso!")

        nome.value = '';
        nome.style.backgroundColor = 'black';

        email.value = '';
        email.style.backgroundColor = 'black';

        sobrenome.value = '';
        sobrenome.style.backgroundColor = 'black';

        assunto.value = '';
        assunto.style.backgroundColor = 'black';

    }
}

let menu = document.querySelector(".menu-container")

function ocultarMenu(){
    menu.style.display = 'none';
}

function mostrarMenu(){
    menu.style.display = 'flex';
}