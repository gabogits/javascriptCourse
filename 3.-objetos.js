var persona = {
    nombre: "Juana",
    apellido: "Herrera",
    edad: 25,
    direccion: {
        pais: "Costa Rica",
        ciudad: "San jose",

    }
};

persona.direccion.zipcode = 1190; //es posible agregar propiedades posteriores a la creación del objetos de esta manera

console.log(persona.direccion);


var persona2 = {
    nombre: "Juana",
    apellido: "Herrera",
    edad: 25,
    direccion: {
        pais: "Costa Rica",
        ciudad: "San jose",

    }
};

persona.direccion.zipcode = 1190; //es posible agregar propiedades posteriores a la creación del objetos

console.log(persona2.direccion);



var persona3 = {
    nombre: "Juana",
    apellido: "Herrera",
    edad: 25,
    direccion: {
        pais: "Costa Rica",
        ciudad: "San jose",
        edificio: {
            nombre: "Edificio principal",
            telefono: "2222-3333"
        }
    }
};

console.log(persona3.direccion.edificio.telefono);
// para obtener una propiedad enterrada dentro de varios objetos anidados puede resultar complicado

//podemos guardar en una variable, para que sea más sencillo manipular

var edificio = persona3.direccion.edificio;

edificio.nopiso = "8vo piso";

console.log("persona con propiedad guardada en variable", persona3)


//referencia por corchete

var persona4 = {
    nombre: "Juana",
    apellido: "Herrera",
    edad: 25,
    direccion: {
        pais: "Costa Rica",
        ciudad: "San jose",
        edificio: {
            nombre: "Edificio principal",
            telefono: "2222-3333"
        }
    }
};

console.log("por corchete", persona4["nombre"]); //entre corchetes el nombre de la propiedad

console.log("por corchete", persona4["direccion"]["pais"]); //asi obtenemos el nombre de país, esto es igual que persona4.direccion.pais


//esto nos puede servir para cuando queremos hacerlo dinámico

var campo = "edad";
console.log(persona[campo]);

//en los siguientes 2 ejemplos de abajo, nos regresa undefined, hay que tener cuidado, ya que podria pensar que existe la propiedad
//cuando no es así, y hacer pensar que existe la propiedad pero no tiene valor definido
//var campo = "edad2";
//console.log(persona[campo]);

//console.log(persona.edad2);