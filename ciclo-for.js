//podemos hacer incrementos de 3 en tres

for (var i = 0; i < 10; i += 3) {
  console.log(i);
  /* tambien funciona aquí el break y el continue
    if (i === 5) {
      break; 
    }
    if (i === 5) { 
      continue;
    }
    */
}

//for in

//se ocupa cuando tenemos objetos y queremos barrer cada una de las propiedades de esos objetos

var Persona = function () { //funcion de primera clase
  this.nombre = 'Juan';
  this.apellido = 'Pineda';
  this.edad = 18;
}

var Juan = new Persona(); //creamos un objeto de tipo persona
Persona.prototype.direccion = 'San jose'; //en ciclo for in entra la direccion aunque originalmente no estaba en el objeto

//a esto se le conoce como reflejp
for (prop in Juan) { //por cada propiedad dentro de juan, va entrar dentro del ciclo for y va a imprimir la propiedad
  //console.log(Juan.hasOwnProperty(prop))
  //aqui solo imprime true o false dependiendo si la propiedad ya existia en el objeto o fue adherido al prototipo del objeto
  //por ejemplo imprimio false en la propiedad direccion 
  /*false
   direccion: San jose
  */
  //console.log(prop, ':', Juan[prop]); //con esto Juan[prop], obtenemos el valor de la propiedad

  //si queremos imprimir las propiedades originales dentro del objeto y no las del prototipo, podriamos hacer esto
  if (!Juan.hasOwnProperty(prop))
    continue;
  console.log(prop, ':', Juan[prop]); //comentar los dos console anteriores

  //aunque tambien podriamos imprimir las propiedades del prototipo -es decir direccion-
}

for (num in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) {
  console.log(num)
  //parece que imprime los numeros dentro del arreglo pero no, 
  //solo imprime el indice en que se encuentra cada elemento del  arreglo
  /*por eso imprime esto
  
  0 //por eso empieza en cero, por que toma de indice desde la posicion 0 del arreglo
   1
   2
   3
   4
   5
   6
   7
   8
   9*/
}

//si quisieramos obtener el valor de cada uno de los emenetos del arreglo, seria con el forEach


[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].forEach(function (val) {
  console.log(val);
});

//Rotulacion de los ciclos

for_principal:
for (var i = 1; i <= 5; i++) {
  console.log('i', i);
  for_secundario:
  for (var j = 1; j <= 5; j++) {
    console.log('j', j);
    //continue  for_principal; 
    //con esto podemos brincar al for principal, si lo rotulamos al principio for_principal:
    //podemos hacer cualquier cantidad de rotulaciones
    for (var x = 1; x <= 5; x++) {
      console.log('x', x);
      // break for_principal; asi sale del break principal
      break for_secundario; //aqui saldria del tercer ciclo, imprimiendo solo una vez el valor de x
    }

  }
} 