var b = "Herrera"
var a = new String("Fernando")
console.log(a[0]); //se podria pensar que fernando es una arreglo de carácteres por eso, me imprime la F
// console.log(a["0"]); de igual manera funciona asi, lo que quiere decir que no es que estemos leyendo una posicion del arreglo, si no que le estamos pasando el nombre de una propiedad del objeto
//si imprimimos a   
console.log(a);
/*String {"Fernando"}
0: "F"
1: "e"
2: "r"
3: "n"
4: "a"
5: "n"
6: "d"
7: "o"
nos damos cuenta de ello, el nombre es guardado en un objeto, en donde cada carcter es guardado en una propiedad
*/


console.log(a.toUpperCase()); //mayusculas

console.log(a.toLowerCase()); //minusculas

var i = a.indexOf("e");
console.log("la letra e: esta en la posición", i); //nos imprime el numero 1


// podemos imprimir la letra a
i = a.indexOf("a");
console.log("la letra a: esta en la posición", i); //nos imprime el numero 4

//y que pasa si  queremos la n, pero esta se repite en la palabra fernando
i = a.indexOf("n");
console.log("la letra n: esta en la posición", i); //asi por default nos da la posicion del primer caracter osea la 3

// para ello tenemos lastIndeOf


i = a.lastIndexOf("n"); //con esto nos indica donde esta  la última posicion encontrado de nuestro objeto de busqueda
console.log("la letra a: esta en la posición", i); //nos imprime el numero 5 que es la posicion de la última n que tengamos en nuestra palabra

var c = new String("Fernando Herrera")

var herrera = c.indexOf("Herrera"); //tambien podemos buscar palabras completas


console.log("la letra a: esta en la posición", herrera) //la posicion de la palabra herrera es 9, el espacio también es un caracter

//podemos obtener una porcion de nuestro string principal

var nombre = c.substr(6)
console.log(nombre); //imprime esto do Herrera, es deciur del 6 elemento en adelante

nombre = c.substr(6, 3)
console.log(nombre); //imprime del 6 caracter, tres caracteres mas, por lo que obtenemos do -el tercer caracter es el espacio vacio entre las dos palabras-


//entonces para imprimir el nombre podemos aplicar este truco -si es que el nombre esta al principio de nuestra cadena y hay un espacio vacio que lo separe de lo demás

nombre = c.substr(0, c.indexOf(" ")); //del principio hasta < donde encuentre un espacio vas a cortar
console.log(nombre);


//tambien podemos ocupar el split y slice en las cadenas

var split = c.split();
console.log(split); //regresa un arreglo con nuestra variable ["Fernando Herrera"]

var split = c.split(' ');//especificamos un indicador ''  para que corte nuestro string, asi cada palabra es un elemento de nuestro arreglo
console.log(split); //regresa un arreglo con dos elementos ["Fernando", "Herrera"]
console.log(split.length); //asi obtenemos la extensión de nuestro arreglo



//===========================

document.write("Hola mundo"); //esto escribe en la pagina donde este el codigo "hola mundo"

//c.italics() envuelve la variable ve en etiquetas <i>Fernando Herrera</i>

document.write(c.italics()); 