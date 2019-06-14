function crearProducto(nombre, precio) {
    nombre = nombre || "sin nombre";
    //validaciones en caso de no existan esos argumentos
    precio = precio || 0

    console.log("Producto: ", nombre, "Precio: ", precio);
}

crearProducto()
//al querer imprimir nombre y precio aun sin enviar argumentos 
//obtenemos unos valores por default

crearProducto("Lapiz") // puede venir uno o dos argumentos


//para evitar la sobrecarga de operaciones y establecer valores puntuales, se puede hacer 
//lo siguiente

function crearProducto100(nombre) {
    crearProducto(nombre, 100); //mandamos un precio estandar
}

function crearProductoCamisa(precio) {
    crearProducto('camisa', precio); //mandamos un nombre de camisa estandar
}

crearProducto100('pluma');
crearProductoCamisa(75)