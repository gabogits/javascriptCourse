//"use strict";
// al colocarlo aqui en el top de este archivo.
//significa que todos los archivos js  posteriores a este, se regirán por este mismo modo strict



var nombre = 'Fernando';
//si no tuvieramos el "use strict";, podriamos no declarar una variable y usarla en el momento
//nombre = 'Fernando'; -sin el var-

console.log(nombre);

//podemos restringir este modo strict en capsulandolo en una funcion 
//--comentar la primera linea de este código para que funcione--



function getApellido() {
    "use strict";
    var apellido = "lopez";
    return apellido;
}
//console.log(getApellido());

//para que mi archivo sea ejecutado en modo estricto, pero solo este archivo es lo siguiente
//lo debemos encapsular en una funcion anónima
//comentar todos los consoles para que funcione
(function() {
    "use strict";

    function getEdad() {

        edad = 32;
        return edad;
    }

    var nacionalidad = 'mexicana';
    //al econtrar un error bloquea el sig codigo
    console.log(nacionalidad);
    //es decir no se ejecutan las sig lineas, ni se muestran los demas errores si es que existen
    console.log(getEdad());

})();