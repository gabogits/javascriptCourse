function primeraFuncion() { //primero se lee, lo mete en el objeto global, pero no ejecuta la función
  var a = 20;
  console.log(a)
}

primeraFuncion(); //cuando es invocada la funcion, entra a la funcion, lee y ejecuta la funcion


var b = 30;

function segundaFuncion() { //aqui se genera un contexto, un scope, al imprimir la funcion no le importa el valor de b, que se encuentra globalmente  
  var b = 20;
  console.log(b)
}

segundaFuncion();


var c = 30; cuartaFuncion

function terceraFuncion() {

  console.log(c)
  //al no encontrar el valor asignado el contexto de la funciion, javascript busca en el objeto global, como en el objeto global c existe y esta definido su valor, impirme 30
}

terceraFuncion();




function cuartaFuncion() {

  console.log(d)
}

cuartaFuncion();


var d = 40; //al arrancar el programa se hace hoisting de las variables, reservando un valor para ellas en memoria (por eso en cualquier lugar del codigo la variable existe)

//sin embargo tendria que estar antes de la funcion cuartaFuncion para lea cual es el valor que se le ha asignado, ya que si existe, pero por estar definido su valor despues de invocacion de la funcion
//el valor que retorna es undefined



var e = 40;

quintaFuncion(); //se puede invocar la funcion, inclusive que su definicion en el codigo este después, es como las variables, primero hace hoisting y despues lee el valor en la invocación

function quintaFuncion() {

  console.log(e)
}




function sextaFuncion() {

  //las funciones siempre regresan algo, por ejemplo una funcion vacia al ejecutarla devuelve un undefined
}

var a = sextaFuncion();
console.log(a);




function septimaFuncion() {
  console.log("invocada")
}

var miFuncion = septimaFuncion;
//al imprimir esto en consola me regresa la definicion de la funcion 
