const form = document.getElementById("form-numeros");
let numum = document.getElementById("num1");
let numdois = document.getElementById("num2");
let formEValido = false;

form.addEventListener("submit", function(e){
    e.preventDefault();

    const mensagemSucesso = `O primeiro numero é maior que o segundo, parabens.`

    formEValido = numum.value > numdois.value
    if(formEValido) {
        const containerMensagemSucesso = document.querySelector('.success-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';

        numum.value = ' ';
        numdois.value = ' ';
    } else {
        alert("O primeiro numero tem que ser maior que o segundo.")
    }
})
