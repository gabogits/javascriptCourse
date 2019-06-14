

var a = 10; //valor primitivo númerico
var b = new Number(10); //es un objeto númerico




// si se imprime a en consola se obtiene
// 10
// si se imprime b en consola se obtiene
// Number { 10 }
// si se quiere coparar entre ambas variables a === b
// da false por que son elementos diferentes
//  si se compara de esta manera a == b
// obtenemos true


var c = 10.456;


/*to fixed*/


/*entre mayor sea el numero enviado como parametro, mayor es el numero decimales
sin embargo no hay logica cuando el numero de decimales empieza a crecer y regresar 
numeros al parecer aleatorios

c
10.456
c.toFixed(2)
"10.46"
c.toFixed(3)
"10.456"
c.toFixed(4)
"10.4560"
c.toFixed(5)
"10.45600"
c.toFixed(10)
"10.4560000000"
c.toFixed(15)
"10.456000000000000"
c.toFixed(20)
"10.45599999999999951683"
c.toFixed(21)
"10.455999999999999516831"

de igual manera aquí el valor numero al redondearlo lo regresa como cadena

*/

/* to string */

var d = 13232;

d = d.toString()

console.log(d); //regresa el valor textual de la variable o como cadena


/*to precision*/


var e = 1.365662;
console.log(e);
console.log(e.toPrecision(5));
//es el numero de cifras que tendrá el numero de izquierda a derecha, partiendo de los numeros enteros a los decimales
//redondeando esto ultimos


var f = 100.456789;
console.log(f);
console.log(f.toPrecision(2));
// 100.456789 al imprimir f
// 1.0e+2 al imprimir f con toPrecision(2) con notaciṕn exponencial



//el numero de digitos que puede tener un número es de 308, 

//despues de 308 es considerado infinity como valor de regreso, para mencionar que el numero es demasiado grande y ya no lo puede manejar javascript

//de igualmante -infinity vendria ser el numero negativo mas pequeño que puede manenjar javascript


//nan significa que no es un valor numero, significa que en algun punto de nuestra operacion, el valor dejo de ser numerico

//es decir por ejemplo el sumar un numero con una cadena

var g = new Number("20");

console.log(g); // Number {20}
console.log(g.valueOf()); //retorna el valor primitivo del objeto numerico 20, como extrayendolo del objeto