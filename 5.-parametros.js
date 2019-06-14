
function imprimir(nombre, apellido) {
  console.log(`${nombre} ${apellido}`);

}



imprimir("Juan", "Padilla"); //esta es una variable anonima, que no esta explicita en ell codigo, que la estoy llamando en el momento que estoy creando la funcion 

var nombre2 = "Juan"; //esta es una variable explicita



//que pasa si no defines algun parametro
function imprimir2(nombre, apellido) {
  //aqui ya guardo en memoria el espacio para las variables "nombre " y "apellido" por el simple hecho de estar como argumentis, inclusive antes de asignarle un valor.
  //Desde un principio s esetea comoo undefined 
  console.log(`${nombre} ${apellido}`);

}
imprimir2("Juan"); //devuelve JUan undefined


//que pasa si no pasamos los argumentos a la funcion 
function imprimir3() {
  //nos salta un error ya que esas variables no existen en memomia, esto es muy diferente a imprimir undefined
  console.log(`${nombre} ${apellido}`);
}

// imprimir3("Juan", "padilla"); comento esta linea por me marca el error, que no me permite leer el código posterior



//podemos hacer validaciones para saber si un argumento trae un valor 
function imprimir4(nombre, apellido) {

  /* tambien se pudo hacer de esta fomra
  if (apellido === undefined) {
    apellido = "xxx"
  }
  */

  apellido = apellido || "xxx"; //si el apellido trae undefined imprime xxx, si no imprime el valor que se le haya asignado 
  console.log(`${nombre} ${apellido}`);


}

imprimir4("Juan");



//ahora mandemos los argumentos como un objeto 
function imprimir5(persona) { //persona es el objeto anonimo

  console.log(`${persona.nombre} ${persona.apellido}`);


}

imprimir5({
  nombre: "manolo",
  apellido: "Perex"
});


//ahora lo haremos como objeto explicito

function imprimir6(persona) {
  console.log(`${persona.nombre} ${persona.apellido}`);


}

var objPersona = {
  nombre: "francisco",
  apellido: "Díaz"
}
imprimir6(objPersona);



//ahora mandaremos una funcion anonima

function imprimir7(fn) {
  fn(); //asi ejecutamos la funcion anonima
}


imprimir7(function () { console.log("funcion anónima") });



// function imprimir8( function () { console.log("funcion anónima") }) { }   no podemos colocar la funcion anonima de esta manera nos marca error


//ahora con una funcion explicita

function imprimir9(fn) {
  fn();
}



var miFuncion2 = function () { //aqui no se esta invocando
  console.log("miFuncion2 ");
}

imprimir9(miFuncion2);