function determinaDato(a) {

    if (a === undefined) {
        console.log("A es undefined... no se qie hacer");
    }

    if (typeof a === "number") {
        console.log("A es un numero y puedo hacer operación con numeros");
    }
    if (typeof a === "string") {
        console.log("A es un texto y puedo hacer operación con textos");
    }
    if (typeof a === "object") {
        console.log("A es un object... pero puede ser cualquier cosa");
        if (a instanceof Number) { //asi se puede saber si el objeto corresponde a tal o cual instancia
            console.log("A es un objeto númerico...");
        }
    }
}


/*
determinaDato({
    nombre: "fernando"
})
*/

var b = new Number(3);
console.log(b + 10); //me imprime un objeto de tipo númerico
//Number {3}, es como el objeto de tipo persona, no solo es de tipo number

determinaDato(b);
//la funcion reconoce a b, como un objeto de tipo numerico