$(function () {
    $('[data-toggle="popover"]').popover();
  })


function validaNome(){
    let input = document.getElementById('inputName');
    let valid = document.getElementById('valid-nome');
    let valor = input.value;
    let padrao = /[^a-zà-ú]$/gi;
    let tamanho = valor.length;
    if(valor.match(padrao) || tamanho < 5 ){
        input.className = "form-control is-invalid";
        valid.className = "invalid-feedback";
        valid.innerHTML = "Por favor, digite um nome válido."
    } else {
        input.className = "form-control is-valid";
        valid.className = "valid-feedback";
        valid.innerHTML = "Tudo Certo!"
    }
}
function validaEmail(){
    let input = document.getElementById('inputEmail');
    let valid = document.getElementById('valid-email');
    let valor = input.value;
    let padrao = /\S+@\S+\.\S+/;
    if(valor.match(padrao)){
        input.className = "form-control is-valid";
        valid.className = "valid-feedback";
        valid.innerHTML = "Tudo Certo!"
    } else {
        input.className = "form-control is-invalid";
        valid.className = "invalid-feedback";
        valid.innerHTML = "Por favor, digite um e-mail válido."
    }
}
function validaSenha(){
    let input = document.getElementById('inputPassword1');
    let valid = document.getElementById('valid-senha1');
    let valor = input.value;
    let padrao = /^(?=.*\d)(?=.*[a-zA-Z]).{8,30}$/gi;
    let tamanho = valor.length;
    if(valor.match(padrao)){
        input.className = "form-control is-valid";
        valid.className = "valid-feedback";
        valid.innerHTML = "Tudo Certo!"
    } else {
        input.className = "form-control is-invalid";
        valid.className = "invalid-feedback";
        if(tamanho < 8 && tamanho > 0) {
            valid.innerHTML = "Por favor, digite mais de 8 dígitos."
        } else {
            valid.innerHTML = "Por favor, digite uma senha válida."
        }
    }
}
function confirmaSenha(){
    let senha = document.getElementById('inputPassword1').value;
    let input = document.getElementById('inputPassword2');
    let valid = document.getElementById('valid-senha2');
    let valor = input.value;
    if(valor.match(senha) && valor != 0){
        input.className = "form-control is-valid";
        valid.className = "valid-feedback";
        valid.innerHTML = "Tudo Certo!"
    } else {
        input.className = "form-control is-invalid";
        valid.className = "invalid-feedback";
        if(senha == 0) {
            valid.innerHTML = "Por favor, digite uma senha válida."
        } else {
            valid.innerHTML = "As senhas não são iguais."
        }
    }
}
function validaCadastro(){
    validaEmail();validaNome();validaSenha();confirmaSenha();
    let input = document.getElementById('gridCheck');
    let valid = document.getElementById('valid-checkbox');
    if(input.checked ){
        input.className = "form-check-input is-valid";
        valid.className = "valid-feedback";
        valid.innerHTML = "Tudo Certo!"
    } else {
        input.className = "form-check-input is-invalid";
        valid.className = "invalid-feedback";
        valid.innerHTML = "Você deve concordar, antes de continuar."
    }
    
}