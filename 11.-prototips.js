function Persona() {
    this.nombre = "Fernando";
    this.apellido = "Herrera";
    this.edad = 30;

    this.imprimirInfo = function () {
        console.log(this.nombre + " " + this.apellido + "(" + this.edad + ")")
    }
}

var fer = new Persona();

fer.imprimirInfo();


//prototipos

//supongamos que queremos meter proppiedades a este objeto, pero no lo podemos hacer desde la misma funcion Persona
//los prototipo permiten extender este tipo de objetos

Persona.prototype.pais = "Costa Rica";
//esta propiedad se va agregar en el objeto __proto__

console.log(fer);

console.log(fer.imprimirInfo());


console.log(fer.pais);

//cuando se llama a la propiedad pais y no lo encuentra en el objeto principal, va entrar en el objeto proto y lo va buscar


//otro ejemplo claro es la propiedad imprimirInfo que incluye una funcion, los valores de las propiedades nombre apellido y edad si cambian, pero no la funcion imprimirInfo, esta es una constante para todas
//bueno salvo los parametros

//el objetivo de los prototipos es hacer más eficiente el uso de los objetos:



function Persona2() {
    this.nombre = "Luisa";
    this.apellido = "Diaz";
    this.edad = 30;
}//esto podrá estar un millon de veces

Persona2.prototype.imprimirInfo = function () {
    console.log(this.nombre + " " + this.apellido + "(" + this.edad + ")")
} //esto solo estará una vez en memoria, nos ayudan a manejar mejor los objetos
//es que esta funcion se replicaria las n veces que se instancia a Persona2, por eso la sacamos para que solo se agregue en memoria una vez


var luisa = new Persona2();

console.log(luisa);

luisa.imprimirInfo();


var a = "Fernando";
var b = 1;

// cuando creamos estas variable, si en consola de google escribimos por ejemplo a. nos aparece un listado de metodos o prototipos de ese tipo de variable
//en el caso de a son prototipos de tipo string
//o en el caso de b, prototipos de tipo numerico



Number.prototype.esPositivo = function () { //podemos utilizar este metodo para evaluar su una variable tiene un valor numerico positivo o negativo
    if (this > 0) {
        return true;
    } else {
        return false;
    }
}

//algo asi   
//a = 20;   
//a.esPositivo
//en consola recibimos true

//estamos agregando metodos a un prototipi nativo existente

//y cada vez que definamos una variable de tipo númerico, estará disponible este metodo, como si fuera nativo

//estanis extendiendo la funcionaliudad de a


//entonces podemos extender metodos en y para las variables que como esPositico podriamos utilizar con frecuencia, para eso es el prototipo

//asi tendriamos propiedades a la mano y funciones faciles de llamar, contra las variables
//pero no es tan recomendable no es meter propiedades a las variables primitivas, solo es recomendable agregar en las clases o metodos personalizados


//estudiar más los protos