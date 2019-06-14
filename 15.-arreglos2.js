var arr = [ //podemos incluir dentro de un arreglo, boleanos, objetos y funciones
  true,
  {
    nombre: "Fernando",
    apellido: "Herrera"
  },
  function () {
    console.log("Estoy viviendo en un arreglo")
  },
  function (persona) { //podemos incluir funciones que reciben parametros
    console.log(persona.nombre + " " + persona.apellido);
  },
  ["fernando", "carlos", "hernando", "melissa",
    [
      "Juan",
      "Pedro",
      "Dilcia",
      function () {
        console.log(this); //dede este punto el this apunta a si mismo
      }
    ]

  ]

]

console.log(arr);
console.log(arr[0]);
console.log(arr[1].nombre + " " + arr[1].apellido);

arr[2](); //asi ejecutamos una funcion adentro de un arreglo

arr[3](arr[1]); //recibe el objeto que se encuentra en la posición 1,  en el mismo arreglo donde se encuentra esta funcion

console.log(arr[4][2]);
console.log(arr[4][4][1]);

var arreglo2 = arr[4][4];

arreglo2[1] = "Pedrita";

console.log(arreglo2);
console.log(arr);


arreglo2[3](); //al imprimir this regresa el arreglo que lo contiene