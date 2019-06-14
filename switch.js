
var mes = 40;

switch (mes) {
  case (10 > 5) ? 40 : 1:
    //tambien podemos tener condiciones en los case de los switch
    console.log('Enero');
    break;
  case 2:
    console.log("Febrero");
    break;
  case 3:
    console.log("Marzo");
  case undefined: //tambien podemos manejar un caso con un valor indefinido
    console.log("sin mes");
    break;
  default:
    console.log('cualquier otro mes');

}