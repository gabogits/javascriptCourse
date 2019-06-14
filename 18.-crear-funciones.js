
function crearFunciones() {
    var arr = [];
    var numero = 1;

    arr.push(
        function () {
            console.log(numero);
        }

    );

    numero = 2;
    //no importa que aquí número valga 2, de todos modos en el contexto de la funcion, solo se toma el último valor denifinido del numero
    // en orden ascentente o descentente

    // probablemente esto tenga que ver con que las funciones se ejecutan al final y antes el valor de la variable se va sobre escribiendo en este contexto


    arr.push(
        function () {
            console.log(numero);
        }

    );


    numero = 3;

    arr.push(
        function () {
            console.log(numero);
        }
    );

    return arr;

}

var funciones = crearFunciones();

//funciones[0]();
//funciones[1]();
//funciones[2]();

/* aquí  el valor de la variable si se imprime con diferente valor quiero entender por que son proceso más simple
function cambioVariable() {
    var a = 1;
    console.log(a);

    a = 2;
    console.log(a);

    a = 3;
    console.log(a);


}

cambioVariable();

*/


/*otra solución puede ser esto*/




function crearFunciones2() {
    var arr = [];
    var numero = 1;


    arr.push(

        (function (numero) { //esta es una funcion anonima
            //con esto crea un nuevo contexto
            return function () { //luego regresa esa funcion, pero con ese respectivo número
                console.log(numero);
            }

        })(numero) //con esta indicación se menciona que es ejecutada al momento de definirla
    );

    numero = 2;


    arr.push(
        function () {
            console.log(numero);
        }

    );


    numero = 3;

    arr.push(
        function () {
            console.log(numero);
        }
    );

    return arr;

}



var funciones2 = crearFunciones2();

/*
funciones2[0](); // aquí regresa el valor de numero uno, se logro en capsular ese valor en la numero en el momento en el que valia 1 
funciones2[1]();
funciones2[2]();


*/

/*esta es una forma más simplficada de hacerlo */



function crearFunciones3() { //esto simplemente una función que creea funciones que simplemente imprime el numero que estaba en su contexto
    var arr = [];
    var numero = 1;


    for (var numero = 1; numero <= 5; numero++) {
        arr.push(

            (function (numero) {

                return function () {
                    console.log(numero);
                }

            })(numero)
        );
    }

    return arr;

}


var funciones3 = crearFunciones3();
funciones3[0]();
funciones3[1]();
funciones3[2]();
funciones3[3]();
funciones3[4]();
