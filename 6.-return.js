function obtenerAleatorio() {
    return Math.random(); //regresar un numero aleatorio entre 0 y 1, es decir con decimales
}

console.log(obtenerAleatorio() + 10);

function obtenerNombre() {
    return "Juan";
}
console.log(obtenerNombre() + " Padilla");

//esto lo podemos guardar en una variable

var nombre = obtenerNombre();

console.log(nombre);

//regresar booleano

function esMayor05() {
    if (obtenerAleatorio() > 0.5) {
        return true;
    } else {
        return false;
    }
}
console.log(esMayor05());


if (esMayor05()) {
    console.log("Es mayor a 0.5");
} else {
    console.log("Es menor a 0.5");
}

//regresar objetos

function crearPersona(nombre, apellido) {
    return {
        nombre: nombre,
        apellido: apellido
    };
}

var persona = crearPersona("Maria", "Paz");

console.log(persona);
console.log(persona.nombre);
console.log(persona.apellido);


//funciones que regresan funciones

function creaFuncion() {

    return function (nombre) {
        console.log("Me creo " + nombre);

        return function () {
            console.log("Segunda funcion "); //puede regresar nultipes funciones


        }
    }
}

var nuevaFuncion = creaFuncion();

//nuevaFuncion(persona.nombre); //al ejecutar esto solo regresa lo del primer return

var segundaFuncion = nuevaFuncion(persona.nombre);
segundaFuncion(); //al ejecutar esto,  regresa lo del primero y el segundo return anidado

//no me quedó claro lo de los argumentos que se pasan a la funcion padre y lo de ldos dos returns anidados
