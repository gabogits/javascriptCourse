//Arreglos
//var arr = new Array() esto es mas largo y es lo mismo que esto:

var arr = [];



var arr = [5, 4, 3, 2, 1];



console.log(arr);

//de igual forma al escribir en consola arr. aparece un listado de los prototipos de un arreglo
//por ejemplo reverse, que ordena los elementos al revés es decir


arr.reverse();

console.log(arr);// [1, 2, 3, 4, 5]
/*
arr = arr.map(function (elem) {
  elem *= 2;
  return elem;
});
console.log(arr);
*/


arr = arr.map(function (elem) {
  elem *= elem;
  return elem;
});
console.log(arr);

arr = arr.map(Math.sqrt); //para sacar la raiz cuadrada
console.log(arr);

//arr = arr.join(); //para unir los elementos del arreglo en una sola cadena por default pone comas entre cada uno de los elementos del arreglo, pero el arreglo pasa a ser una adena
//console.log(arr);

arr = arr.join('|'); //podemos ocupar cualquier elemento separador como el pipe, pero tambien podriamos dejar este parametro vacio y solo juntar los elementos uno a lado del otro 12345
console.log(arr);

//podemos hacer la funcion inversa de string a arreglo

arr = arr.split("|"); //sabemos que el pipe esta entre los elementos que deseamos convertir en arreglo por eso mandamos como parametro de igual manera el pipe
console.log(arr);
arr = arr.map(function (elem) {
  elem = Number(elem); //esto lo puse yo para que regrese el numero
  return elem;
});
console.log(arr);


//uso de push

arr.push(6);
console.log(arr);

arr.unshift(0);
console.log(arr);


console.log(arr.toString()); //esto es parecido a join, es más rápido pero no puedes mandar un parametro 

var elementoEliminado = arr.pop(); //pop elimina el utlimo elemento del arreglo


console.log(arr)

console.log(elementoEliminado) //pero si se guardo esta operación en esta variable, se puede saber que elemento se eliminó



//splice

arr.splice(1, 1); //el primer parametro de splice, es la posicion del arreglo desde donde  queremos trabajar, tiene que ser numero
//aqui dice que apartir de la posicion 1 vas a eliminar una posición o elemento de ahí del arreglo
console.log(arr);


arr.splice(1, 3);  //aqui dice que va elimimar de la posicion 1 del arreglo hasta la posición 3
console.log(arr);


//splice es mas complejo ya que no solo se utiliza para elminiar si no para agregar tambien 
arr.splice(1, 1, 10, 20, 30); //los sig parametros son elementos que se van agregar al arreglo, osea que aqui se lemina un elmento y se agrega el 10, 20, 30, en esta misma posicion 
console.log(arr);

arr.splice(1, 0, "nuevos", "elementos", "agregados"); //e inclusive no es necesario meter ningun elemento, solo agregar
console.log(arr);


arr = arr.slice(1, 4); //el slice es com0plicado por que indica e fragmento que NO sera cortado. El primer elemento indica el inicio de fragmento y el segundo, hasta donde sera cortado, osea que aprtit de contando con la posicion 4 será cortado y lo que reste del arreglo
//es decir el fragmento que no sera cortado, puede estar en el  inicio, en medio o al final

console.log(arr);
//la respuesta partiendo de 
//[0, "nuevos", "elementos", "agregados", 10, 20, 30] es 
//["nuevos", "elementos", "agregados"]


