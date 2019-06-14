function a() {
    console.log("funcion a")
}

a();
//lan funciones son objetos
a.nombre = "Maria";
a.direccion = {
    pais: "Costa Rica",
    ciudad: "San José",
    edificio: {
        piso: "8vo",
        nombre: "Edificio principal"
    }
}

//aempezamos a definiendola como una función, pero ahora le estamos agregando propiedades como si fuera un objeto 

//al imprimir a.direccion me imprime un objeto, pareciera que a() es objeto mas completo, que puede incluir propiedades funciones y otros objetos