
var i = 1;

while (i <= 10) { //esto se ejecutará mientras elvalor de i sea menor o igual a 10
  i++;

  if (i === 5) { //podemos salirnos del ciclo en el momento que queramos
    break; //con este lo rompemos
  }
  /*
  if (i === 5) { //podemos salirnos del ciclo en el momento que queramos
    continue; //tambien podemos tener esta evaluacion para que se salte las lineas sig y vuelva al princiio del ciclo   if (i === 5) {
  }
  */
  console.log(i);
}
console.log("============================");
//do while, es como el ciclo while pero al reves


var b = 0;

do { //primero ejecuta aunque sea una solo una vez y despues evalua
  b++;
  //igual funciona aqui el break y el continue
  console.log(b)
} while (b < 10)

