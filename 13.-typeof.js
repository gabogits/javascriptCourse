//typeOf

function identifica(param) {
    console.log(typeof param);
}

function Persona() {

}

var juan = new Persona();

identifica(juan); //al imprimir el tipo de data nos imprime new "Object"





function identifica2(param) {

    if (typeof param == "function") {
        param() //para ejecutarla se ocupa los parentesís
    } else {
        console.log(param)
    }
}



identifica2(function () { console.log("soy anónima") });


//ahora para identificar el tipo de objeto, el tipo de instancia


function identifica3(param) {
    console.log(param instanceof Persona3); //esto es similar a param === Persona, esto va regresar un true o un false
    //si el parametro enviado es de tipo persona
}

function Persona3() {
    this.noombre = "Fernando";
    this.edad = 30;
}
var Fernando = new Persona3();

identifica3(Fernando);