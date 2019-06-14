// existen 5 tipos de datos primitivos

var num = 10; //numeros
var str = "texto"; //cadenas
var bol = true; //boleanos
var und = undefined; //undefined
var nul = null; //null

//las variables no estan amarradas a un tipo de dato en particular, puede cambiar a booleanas o string o numericas en cuálquier momento


var obj = { //el objeto puede ser una coleccion de otros objetos primitivos o de otros objetos

    //todo esta dentro de una nomenclatura de pares, dentro de los objetos no va el punto y coma
    numero: 10,
    texto: "Nuevo texto"
};

console.log(obj);


var obj2 = { //pueden haber  objetos adentro de otro objeto 
    numero: 10, //no es necesario agregar la palabra reservada  var numero: 10, por que ya el objeto completo se guardo en memoria
    texto: "Nuevo texto",
    objHijo: {
        numero2: 20,
        texto2: "Nuevo texto 2"
    }
};
console.log(obj2);

//por valoy por referencia

var a = 10;

var b = a;

console.log("a:", a);
console.log("b:", b);

a = 20;

console.log("a:", a);
console.log("b:", b); //aqui devuelve nuevamente 10, ya que guardó el valor que tenia a en primera instancia

var c = {
    nombre: "Juana"
}
var d = c;

console.log("c:", c);
console.log("d:", d);

c.nombre = "Maria";

console.log("c:", c);
console.log("d:", d);
//podria pensarse que el valor de nombre en el objeto d conservaria el valor de juana
//pero no es así, los objetos se pasan por referencia
/*

var c = {
    nombre: "Juana"
}
var d = c; //esta operación se interpreta como que ambos ocupan el mismo espacio en memoria, es como si diera igual, ya sea que llames c o d ambos ocupan el mismo espacio en memoria
//estaran ligados y tendrán el mismo valor 


*/


d.nombre = "Pedro"; //por ejemplo aqui en la variable d al cambiar la propiedad nombre también se refleja en el objeto c, d y c apuntan al mismo lado, pareceria que están amarradas
console.log("c:", c);
console.log("d:", d);
//ambos apuntan al mismo lugar