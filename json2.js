var objetoJS = {
  nombre: 'Fernando',
  edad: 30,
  imprimir: function () { //tambien le podemos meter funciones
    console.log(this.nombre, this.edad);
  }
}

console.log('Objeto literal', objetoJS);

//si necesitamos pasar esto a un formato json, necesitamos

var jsonString = JSON.stringify(objetoJS); //aqui lo parseamos lo convertimos a un objeto JSON

console.log(jsonString);
//al imprimir nos resulta esto
// { nombre: "Fernando", edad: 30 } objeto tal cual
// { "nombre": "Fernando", "edad": 30 } //transformado a JSON
//solo se evalua lo que se puede convertir a string, lo demás lo ignora y no incluye a la función en el JSON

//para evaluar que el fomrato de ll JSON sea valido, se puede ocupar esta página http://json.parser.online.fr/,
// puede ser que le falte algunas comillas o algo por el estilo

//ahora para tranformar de objeto JSON a objeto js

var objetoDesdeJson = JSON.parse(jsonString);
console.log(objetoDesdeJson); //asi es como recibiendo un objeto de json lo transformamos a js

//ya lo podemos ocupar desde nuestro archivo

console.log(objetoDesdeJson.nombre);
console.log(objetoDesdeJson.edad);