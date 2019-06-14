//palabra reservada new

function Persona() {

}

var juan = Persona();

console.log(juan) //nos regresa undefined


function Persona2() {

}

var juan2 = new Persona2();

console.log(juan2)  //nos regresa un objeto vacio de tipo persona Persona {}, agarra una forma muy parecida a una clase




function Persona3() {
    this.nombre = "Juan";
    this.apellido = "Mendoza";
    this.edad = 30
}

var juan3 = new Persona3();

console.log(juan3)  //al imprimir esto crea un objeto con el nombre Persona, como si el tipo de objeto fuera Persona

/*Persona {
    nombre: "Juan",
    apellido: "Mendoza",
    edad: 30
}

no hubo necesidad de encerrar las propiedades de Persona3 en un objeto, la palabra new lo crea

//de igual manera new, reserva el espacio en memoria del objeto y  crea el contexto, ya que si quitaramos la palabra new a Persona3, this pasaria a hacer referencia al objeto global y no al funcion persona 3

*/

//de igual manera podemos crear funciones
function Persona4() {
    this.nombre = "Juan";
    this.apellido = "Mendoza";
    this.edad = 30;
    this.nombreCompleto = function () {
        return this.nombre + " " + this.apellido;
    }
    //lo interesante es que apesar de  que new construye estas propiedades como una variable  this.nombre = "Juan", no se contruye como un objeto, es decir se pone punto y como al final de cada propiedad
    // y no una coma
    //Pero al imprimirlo acomoda las propieddes como objeto
    /*Persona {
        nombre: "Juan",
        apellido: "Mendoza",
        edad: 30
    }*/

}

var juan4 = new Persona4();

console.log(juan4)




//tambien podemos mandar parametros en el momento de la creacion del objeto


function Persona5(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = 30;
    this.nombreCompleto = function () {
        return this.nombre + " " + this.apellido;
    }

}

var juan5 = new Persona5('paquito', 'lopez');

console.log(juan5.nombreCompleto());