
function Jugador(nombre) { //estas son llamadas funciones de primera clase
    this.nombre = nombre;
    this.pv = 100;
    this.sp = 100;

    this.curar = function (jugadorObjetivo) {
        // esto jugadorObjetivo.pv = jugadorObjetivo.pv + 20; es igual a lo de abajo
        if (this.sp >= 40) {
            this.sp -= 40;
            jugadorObjetivo.pv += 20;
        } else {
            console.info(this.nombre + "no tiene sp")
        }

        this.estado(jugadorObjetivo)
    }
    this.tirarFlecha = function (jugadorObjetivo) {
        if (jugadorObjetivo.pv > 40) {
            jugadorObjetivo.pv -= 40;
            this.estado(jugadorObjetivo)
        } else {
            jugadorObjetivo.pv = 0;
            console.log(jugadorObjetivo.nombre + ' esta acabado!!')
        }
    }
    this.estado = function (jugadorObjetivo) {
        console.log(this);
        console.log(jugadorObjetivo);
    }

}

var gandalf = new Jugador('Gandalf');

var legolas = new Jugador('Legolas');


gandalf.curar(legolas);


console.log(gandalf);
console.log(legolas);