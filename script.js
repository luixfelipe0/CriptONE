var input = document.getElementById('input');
var botaoCriptografar = document.getElementById('botaoCriptografar');
var botaoDescriptografar = document.getElementById('botaoDescriptografar');

function criptografar() {
    var inputDoUsuario = input.value;
    var inputCriptografado = inputDoUsuario
    .replace("a", "ai")
    .replace("e", "enter")
    .replace("i", "imes")
    .replace("o", "ober")
    .replace("u", "ufat");
    console.log(inputCriptografado)
}

function descriptografar() {
    var inputDoUsuario = input.value;
    var inputDescriptografado = inputDoUsuario
    .replace("ai", "a")
    .replace("enter", "e")
    .replace("imes", "i")
    .replace("ober", "o")
    .replace("ufat", "u");
    console.log(inputDescriptografado);
}

botaoCriptografar.addEventListener('click', criptografar);
botaoDescriptografar.addEventListener('click', descriptografar);