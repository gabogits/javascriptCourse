var carro = {
  color: 'Blanco',
  marca: 'Mazda',
  imprimir: function () {
    var salida = this.marca + '-' + this.color;
    return salida;
  }

}

console.log(carro.imprimir());

var logCarro = function (arg1, arg2) {
  //si imprimieramos esto sin el bind, nos marcaria un error
  //en este punto bind esta haceindo referencia al objeto global y en el objeto global no existe esa funcion
  console.log("carro", this.imprimir());
  console.log('argumentos', arg1, arg2);
  console.log('====================');
}

// logCarro(); sin el bind esto marcaria error

//pero si hacemos el bind funciona 

var logModeloCarro = logCarro.bind(carro); //de este manera bindeamos el this de logCarro con el objeto carro 
// en la impresion aparece Mazda - Blanco

logModeloCarro('ABC', 'XYZ'); //esto es interesante por que es como si una funcion se ejecutara dentro de otra
//en la impresion aparece
//  carro Mazda - Blanco
// argumentos ABC XYZ
//esto mismo lo podemos hacer con call y apply

logModeloCarro.call(carro, '123', '456');
logModeloCarro.apply(carro, ['dffdg', 'dfgfdg']);
//apply solo espera dos parametros, el primero es el objeto al que apuntaria el this
//el segundo puede ser un array con todos los parametros que queramos
//a diferncia de call que pueden estar los parametros fuera de un array y ser el numero que sea


//esto nos serviria para lo que llamamos funciones prestadas


var carro2 = {
  color: 'Rojo',
  marca: 'Toyota'
}

console.log(carro.imprimir.call(carro2));
//estamos ocupando solo el metodo de carro dos, pero estamos apuntando con call a las propiedades de carro2
//cuyo nombre es el mismo

