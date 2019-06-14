//funciones anónimas
//para mantener nuestro codigo encapsulado, para evitar que sea manipulado por otras secciones de nuestro programa
//sobre todo cuando tenemos mucho código


var a = 10;
//como a es una variable global a puede ser manipulado por cualquier parte del progerama
//console.log(a);

function cambiarA() {
    a = 20;
}

cambiarA();
//console.log(a);

//una funcion anónima es como cualquier funcion pero no tiene un nombre


(function () { //esta sintaxis es de una funcion anónima


    var b = 10;
    //como a es una variable global a puede ser manipulado por cualquier parte del progerama
    console.log(b);

    function cambiarB() {
        b = 20;
    }

    cambiarB();
    console.log(b);
})(); //con los dos parentesis estamos invocando la función (autoejecutable)

//}()) ;//puede ser inclusive con los dos parentesís adentro

//estando encapsulada en la funcion anónima, la variable b, ya no aparece en el objeto window, como es el caso de la variable a B ya no es una variable global, esta escondida para el objeto global
//b solo existe dentro del contexto de la funcion anónima

//entonces no tenemos que sacar la variable b de la funcion anonima, si es que no queremeos que globalmente sea modificada

//aunque tengamos otra variable a dentro de otra funcion u otro archivo, esta variable no sera afectada, solo dentro de su contexto



//otro tipo de funciones anónimas es el sig

function ejecutarFuncion(fn) {

    fn()
};

ejecutarFuncion(function () { //estas funciones las creamos en el mismo momento de ejecutarlas
    console.log("Funcion anónima ejecutada");
});


//podemos retornar algo


function ejecutarFuncion2(fn) {

    if (fn() === 1) {
        return true;
    } else {
        return false;
    }

};

console.log( //console.log es una funcion, entonces estamos ejecutando una funcion, que 
    ejecutarFuncion2(function () {// esta ejecutando una funcion que
        console.log("Funcion anónima ejecutada"); //lleva adentro una funcion anonima que se ejecuta en el momento que se crea
        return 0; //de esta manera lee el return
    })
);