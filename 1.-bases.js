var a = 1;
var b = "Fernando"
//todo el contenido de nuestro javascript se aloja dentro del objeto global window (o el global object)
//para el caso de node no aplica por que node se ejecuta del lado del servidor y este javascript es del lado del cliente

//al estar dentrro del objeto global 
//convive con demas variables y funciones
//por ejemplo si no encapsularamos nuestras variables
//podriamos crear variables con un nombre identico a variables ya existentes en objeto global
//por ejemplo Attr, es un propiedad que ya existe en el objeto global window, al llamar y asignar valor de esta manera
//var Attr = "1"; estariamos sobrescribiendo una variable queya existe en el objeto global, para el lenguaje exista

//Entendiendo la consola (de chrome)
//escribiendo solo el nombre de la variable en consola, te da el valor, ademas podemos reasignar el valor de una variable
//a = 10 (para fines de prueba en la consola)


//no solo existe console.log, sino tambien console.warn(a), console.error(a) y console.info(a)


// Undefined
// cuando se despliega un archivo de js, se hace un barrido general

//en que cuando encuentra variables primitivas les hace un hoisting, almacena una espacio en memoria para estas,  las iniciliza y 
//les asigna un valor undefined por default

//por ello  este codigo, aunque imprime el valor como undefined, no marca un error como otros lenguajes de programación 

//console.log(a)
//var a = "Fernando";

//pero no confundir undefined con null, son dos cosas diferentes

// undefined === null (false) (los tres igual son para comparar tanto valor como objeto)
// undefined == null (true), por ambos son una falta de valor, pero son objetos diferentes por eso con === marca false


function imprimir() {
    for (var i = 0; i < 8000; i++) {
        console.log("imprimió");
    }
}

//javasvript no es asincrono, hace todo secuenciualmente, si ejecuto presionoClick cuando imprimir esta en proceso aún, esta no se detiene y hasta que termine no ejecutará la sig
function presionoClick() {
    console.log("click en el boton");
}

imprimir();


var nombre = "Gabriel";