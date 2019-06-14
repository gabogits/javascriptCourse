//Objeto Math 

var PI = Math.PI;
var E = Math.E;
console.log(PI);
console.log(E);



var num1 = 10.456789;
// metodo de redondeo round
console.log(num1);
console.log(Math.round(num1));

//si queremos redondear a dos decimales, tendriamos que hacer esto
//los ceros es el numero de decimales y tenemos que vidirlo entre el mismo numero de ceros

console.log(Math.round(num1 * 1000) / 1000);


// metodo de redondeo floor

console.log(Math.floor(num1)); //lo deja en el mumero entero, quita todos los decimales

// metodo random

var rnd = Math.random();
console.log(rnd); //genera numeros aleatorios muy cercanos al cero y 1, pero nunca 0 o 1

//generar un número aleatorio entre dos numeros

function randomEntre(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(randomEntre(500, 7000)); //aqui obtenemos un número aleatorio entre el 500 y el 7000

// Math sqrt, raiz cuadrada

console.log(Math.sqrt(4)); //raiz cuadrada


//Math.pow exponentes
console.log(Math.pow(3, 2)); //9
console.log(Math.pow(5, 2)); //9


//expresiones literales --la explicita, usando el constructor

//la literal que sólo se define en el momento

var reg1 = RegExp('a'); //va buscar la letra a
var reg2 = /a/; //esta y la línea anterior son iguales

var texto = 'Hola mundo';

texto.match(reg1) //match es un metodo de las string y por aqui le podemos mandar la expresión regular