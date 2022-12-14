class Display {
    constructor(displayValorAnterior, displayValorActual) {
        this.displayValorActual = displayValorActual;
        this.displayValorAnterior = displayValorAnterior;
        this.calculador = new Calculadora();
        // guarda tipo de operacion que esta usando el usuario 
        this.tipoOperacion = undefined;
        this.valorActual = '';
        this.valorAnterior = '';
        this.signos = {
            sumar: '+',
            dividir: '/',
            multiplicar: 'x',
            restar: '-', 
        }
    }
    
    // metodo que borra el ultimo numero 
    borrar() {
        this.valorActual = this.valorActual.toString().slice(0,-1);
        this.imprimirValores();
    }


    //C
    borrarTodo() {
        this.valorActual = '';
        this.valorAnterior = '';
        this.tipoOperacion = undefined;
        // actualizar display
        this.imprimirValores();
    }

    computar(tipo) {
        this.tipoOperacion !== 'igual' && this.calcular();
        this.tipoOperacion = tipo;
        this.valorAnterior = this.valorActual || this.valorAnterior;
        this.valorActual = '';
        this.imprimirValores();
    }

    agregarNumero(numero) {
        // si es un punto y ya contenia uno, no hace nada
        if(numero === '.' && this.valorActual.includes('.')) return
        //sino
        if (numero === 'π'){
            if (this.valorActual.toString() === ''){
                this.valorActual = this.valorActual.toString() + Math.PI.toString();
            }else{
                this.valorActual = this.valorActual.toString() * Math.PI.toString();
            }
        }
        else if (numero === 'e'){
                if (this.valorActual.toString() === ''){
                    this.valorActual = this.valorActual.toString() + Math.E.toString();
                }else{
                    this.valorActual = this.valorActual.toString() * Math.E.toString();
                }
        }else if (this.valorActual.toString() === 'tg'){
            this.valorActual = Math.tan(numero).toString()
        }else if (this.valorActual.toString() === 'sin'){
            this.valorActual = Math.sin(numero).toString()
        }else if (this.valorActual.toString() === 'cos'){
            this.valorActual = Math.tan(numero).toString()
        }else if (this.valorActual.toString() === '∛'){
            this.valorActual = Math.pow(numero,1/3).toString()
        }else if (this.valorActual.toString() === '√'){
            this.valorActual = Math.pow(numero,1/2).toString()
        // }else if (this.valorActual.toString() === 'ln'){
        //     this.valorActual = Math.LN10(numero).toString()    
        }else{
            this.valorActual = this.valorActual.toString() + numero.toString();
        }
        this.imprimirValores();
    }

    agregarFuncion(funcion) {
        // si es un punto y ya contenia uno, no hace nada
        if(funcion === '.' && this.valorActual.includes('.')) return
        //sino
        else if (!isNaN(this.valorActual) && funcion == '^2'){
            this.valorActual = Math.pow(this.valorActual.toString(),2).toString()
        }else if (!isNaN(this.valorActual) && funcion == '^3'){
            this.valorActual = Math.pow(this.valorActual.toString(),3).toString()
        }else{
            this.valorActual = this.valorActual.toString() + funcion.toString();
        }
        this.imprimirValores();
    }

    imprimirValores() {
        this.displayValorActual.textContent = this.valorActual;
        this.displayValorAnterior.textContent = `${this.valorAnterior} ${this.signos[this.tipoOperacion] || ''}`;
    }

    calcular() {
        const valorAnterior = parseFloat(this.valorAnterior);
        const valorActual = parseFloat(this.valorActual);

        // si alguno de los 2 valores no son valores, no retorna nada
        if( isNaN(valorActual)  || isNaN(valorAnterior) ) return
        // si tienen valores 
        // se utiliza la calculadora para hacer los calculos
        this.valorActual = this.calculador[this.tipoOperacion](valorAnterior, valorActual);
    }
}