var a = 10;
var b = 20;

var c = (a > b) ? a : b;

console.log(c);
//podemos hacer condiciones ternaria con funciones 

var d = (a > b) ? function () {
  console.log('A es mayor a B');
  return a;
}() : function () {
  console.log('B es mayor a A');
  return b;
}()

console.log(d);

var e = 10;
var f = undefined;

var g = e || f; //toma como variable la que tenga un valor definido, no importa cual sea
//si e y f tuviera un valor definido, como podria ser 20 y 30 respectivamente  tomaria 20, no por que sea mayor, si no por que  fue la primera variable que encontró con valor definido.

console.log(g);

function getNombre(nombre) {
  var nomb = nombre || '<sin nombre>';
  //esto funciona cuando invocamos funciones y el parametro recibido es undefined, 
  //asi es como a nomb se le asigna el valor de '<sin nombre>'
  console.log(nomb);
}

getNombre();
//en jerarquia este es el orden de importancia que tienen los valores de una variable
// null < undefined < 10 -o cualquier string- 
//asi es el undefined 'vale mas' que el null