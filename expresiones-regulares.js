//expresiones regulares --la explicita, usando el constructor



var reg1 = RegExp('a'); //va buscar la letra a // --la explicita, usando el constructor, es case sensitive, cambia si hay mayusculas o minuscula
var reg2 = /a/; //esta y la línea anterior son iguales //la literal que sólo se define en el momento

var texto = 'Hola mundo,';

console.log(texto.match(reg1)); //match es un metodo de las string y por aqui le podemos mandar la expresión regular
//regresa esto si hay concidencia regresa este arreglo ["a", index: 3, input: "Hola mundo", groups: undefined], si no regresaria null
// en el arreglo esta la evaluacion, el index, osea el lugar donde fué encontrado y la cadena completa
//podriamos ponerlo de esta manera console.log(texto.match(/a/)) y tendria el mismo resultado

console.log(texto.match(/^H/)); // /^ el triangulo de arriba significa que lo busque en la primera posición O o parte de la palabra

console.log(texto.match(/o$/));  //esto significa que lo busque al final de la cadena


console.log(texto.match(/../)); //el punto es un caracter comodín, que significa cualquier carater. Entre mas puntos  le pongamo mas carateres de la izquiera a derecha abarca nuestra concidencia

console.log(texto.match(/..../)); //"Hola"


console.log(texto.match(/....$/)); //aqui buscas los últimos 4 caracteres  "undo"

console.log(texto.match(/^.o/)); //aqui significa, podria ser cualquier caracter el primero de la cadena, pero en siguiente de la coincidencia tiene que ser o

//numeros

var texto2 = 'Hola mundo 1234';

console.log(texto2.match(/[0-9]/)); // ["1", index: 12, input: "Hola mundo, 1234", groups: undefined] encontró esto


console.log(texto2.match(/[025689]/)); // podemos hacerlo tambien de esta maera, pues si encontrará coincidencia por el número 2


console.log(texto2.match(/[a-z]/)); //quiero que busque de caracteres de la A a la Z, aquí va encontrar la letra o, por que es la primera que se encuentra en mi arreglo, recordemos que la H esta en mayusculas

console.log(texto2.match(/[a-zA-Z]/)); //aquí la busqueda la hace insensitiva sin considerar si son mayusculas y minusculas y de esta manera regresa la H 

console.log(texto2.match(/^H[a-zA-Z]/)); //esto significa que al principio tiene que existir la H y despues cualquier caracter alfabeitco 

console.log(texto2.match(/^H[aeiou]/)); //esto es lo mismo que arriba, pero el sig caracter de la concidencia debe ser vocal
var texto3 = 'Hola mundo.';


console.log(texto3.match(/[aeiou]./)); //cualquier vocal seguido de cualquier caracter, regresa esto ["ol", index: 1, input: "Hola mundo.", groups: undefined]

console.log(texto3.match(/[aeiou].$/)); //cualquier vocal seguido de cualquier caracter al final,  regresa esto  ["o.", index: 9, input: "Hola mundo.", groups: undefined]

console.log(texto3.match(/ /)); //se puede definir como match un espacio asi, pero no es recomendado, como la cadena tiene un espacio vacio entre las dos palabras  'Hola mundo.', hay match

console.log(texto3.match(/  /)); //aqui no encontraria concidencias por que se esta considerando un espacio mayor, y pues es muy tosco definir esoacios de esta manera

//esta mejor hacerlo de la sig manera

var texto4 = 'Hola    mundo.';

console.log(texto4.match(/\s/));  //aquí simplemente se evalua que  en nuestra cadena exista un espacio, cualquiera que sea su extension


console.log(texto4.match(/\w/));
//esto significa que busque cualquier letra del albafeto en ingles este en mayuscula o minuslula,
//es igual a esto /[a-zA-Z]/, es esto mismo pero abreviado
//  /\w/) no toma en cuenta la ñ, por lo que habrá que agregarla aparte,

var texto5 = 'Hola  9  mundo.';
console.log(texto5.match(/\d/)); // con esto se agrevivia lo de /[0-9]/

//las expresiones regulares tienen tres controladores, 

// i = insensible, a las mayusculas y minusculas
// g = todas apariciones
// m = multilinea

var texto6 = 'HOla MUndo. \n Qué tál?';// con esto se logra dar un enter en la cadena \n 
console.log(texto6.match(/m/i));

console.log(texto6.match(/[aeiou]/g));  //Quiero todas las ocurrencias, aparecen la letras en el orden de aparicion  que tienen en el string (4) ["o", "a", "u", "o"]

console.log(texto6.match(/[aeiou]/ig));  //tambien se pueden combinar los controladores


console.log(texto6.match(/[aeiou]|[áéíóú]/ig));// el pipe | sirve para hacer match con una o otra opcion en esta caso se esta buscando en la cadena las vocales con o sin acento


var texto7 = 'Holaa MUndoo. Hoolaa MUndoo oo';

console.log(texto7.match(/o+/g)); //este signo de mas o+ significa que por lo menos debe de aparecer una o o mas seguidas dentro de la mis cadena


console.log(texto7.match(/o{2}/));  //con esto definimos cuantas veces aparece la letra o

console.log(texto7.match(/o{2,}/g)); //aqui  queremos todas las ocurrencias, se imprime esto ["oo", "oo", "oo"], 

// /o{2,}/g esto significa que esperamos de 2 a todas las ocurrencias que vengab

//podemos hacer un rango de cuantas veces esperamos que aparezcan

var texto8 = 'Holaa MUndoo. Hooooolaa de nuevo';


console.log(texto8.match(/o{3,4}/g)); //por lo menos va venir 3 o o 4 o's seguidas

//arreglo de dictongos
var texto9 = "Aeropuerto";
console.log(texto9.match(/[aeiou]{2,2}/ig));


var texto10 = "la respuesta de la suma es: 45 + 60 = 105"

console.log(texto10.match(/\d+/g));

console.log(texto10.match(/\d{1,}/g)); //ambas funcionan


console.log(texto10.match(/\d{1,}|respuesta/g)); //quiero cualquier número y la palabra respuesta incluida