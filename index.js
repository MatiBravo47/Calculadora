const displayValorAnterior = document.getElementById('valor-anterior');
const displayValorActual = document.getElementById('valor-actual');
const botonesNumeros = document.querySelectorAll('.numero');
const botonesNumerosEspeciales = document.querySelectorAll('.numeroEspecial');
const botonesOperadores = document.querySelectorAll('.operador');

const display = new Display(displayValorAnterior, displayValorActual);

botonesNumeros.forEach(boton => {
    boton.addEventListener('click', () => display.agregarNumero(boton.innerHTML));
});

// nueva
botonesNumerosEspeciales.forEach(boton => {
    boton.addEventListener('click', () => display.agregarNumero(boton.value));
});


botonesOperadores.forEach(boton => {
    boton.addEventListener('click', () => display.computar(boton.value))
});