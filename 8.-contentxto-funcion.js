
var nombre = "Juan Carlos";

var persona = {
    nombre: "Maria",
    apellido: "Dubon",
    imprimirNombre: function () { //aquí se genera un nuevo contexto de javascript

        console.log(this.nombre + " " + this.apellido) //dentro de los objetos podemos hacer referencia al this, que hace refencia al objeto en el que este, en este caso va imprimir el mismo objeto
        //la varaible global nombre es ignorada, por que con el this, estamos buscando nombre en el contexto en el que this se encuentra (el scope)
    },
    direccion: {
        pais: "Costa Rica",
        obtenerPais: function () {
            var self = this; //aqui guardamos la referencia a este objeto direccion (this), en la variable self
            console.log("La direccion es en " + this.pais) //en este caso this se refiere al objeto direccion 
            //el this cambia conforme anidas objetos

            var nuevaDireccion = function () {
                console.log(self) //al mimprimir solo this nos da el objeto window, por eso es necesario guardar en una variable la referencia a este objeto (self), para que nos imprima el valor
                console.log("La direccion es en " + self.pais) //en este caso this se refiere al objeto direccion 
                console.log(persona.apellido, "holaa") //de igual forma funciona la referencia completa
            }
            nuevaDireccion();
        }
    }
}

persona.imprimirNombre();
persona.direccion.obtenerPais();