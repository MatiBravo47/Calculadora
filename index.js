const displayValorAnterior = document.getElementById('valor-anterior');
const displayValorActual = document.getElementById('valor-actual');
const botonesNumeros = document.querySelectorAll('.numero');
const botonesNumerosEspeciales = document.querySelectorAll('.numeroEspecial');
const botonesOperadores = document.querySelectorAll('.operador');
const botonesFunciones = document.querySelectorAll('.funcion');
const botonesParentesis = document.querySelectorAll('.parentesis');
const botonesOtrasFunciones = document.querySelectorAll('.otrasFunciones');
const botonesPotencia = document.querySelectorAll('.potencia');

const display = new Display(displayValorAnterior, displayValorActual);


//muestra por pantalla lo ingresado
botonesNumeros.forEach(boton => {
    boton.addEventListener('click', () => display.agregarNumero(boton.innerHTML));
});

botonesNumerosEspeciales.forEach(boton => {
    boton.addEventListener('click', () => display.agregarNumero(boton.innerHTML));
});

botonesFunciones.forEach(boton => {
    boton.addEventListener('click', () => display.agregarFuncion(boton.innerHTML));
});

botonesParentesis.forEach(boton => {
    boton.addEventListener('click', () => display.agregarNumero(boton.innerHTML));
});

botonesOtrasFunciones.forEach(boton => {
    boton.addEventListener('click', () => display.agregarFuncion(boton.value));
});

botonesOperadores.forEach(boton => {
    boton.addEventListener('click', () => display.computar(boton.value))
});