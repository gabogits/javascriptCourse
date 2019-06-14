try {
  var a = 100;

  //
  // throw 'oh oh!'; forzar el error con throw
  if (a === 101) {
    throw 'que mal';
  } else {
    throw 'oh oh!';
  }
  console.log("El valor de a es:", a)
}
catch (e) {
  //esto se ejecuta si falla el código de arriba
  //este es opcional

  console.log(e);

  if (e === 'que mal') {
    console.log('error de tipo 1');
  }


  if (e === 'oh oh!') {
    console.log('error de tipo 2');
  }

}
finally { //si no ocupamos el catch afuerzas  tiene que ir el finally
  console.log("finalmente")
}
//si no tiene el catch o finally nos mostrará este error
//Uncaught SyntaxError: Missing catch or finally after try


try {
  throw new Error('Error tipo 1');
  console.log("Esta parte nuca se ejecuta");
}
catch (e) {
  //console.log(e)
  console.log(e.message) //con esto solo se imprime el mensaje
}
finally {
  console.log("FInalmente");
}

//en el throw podemo mandar lo que sea, aquí mandamos un objeto

try {
  throw {
    nombreerror: 'Error tipo 1',
    accion: 'Salir corriendo a echarle agua',
    coderror: 1
  }
  console.log("Esta parte nuca se ejecuta");
}
catch (e) {
  console.log(e)
  console.log(e.nombreerror)
  console.log(e.accion)
  console.log(e.coderror)

  console.log("Parte del catch");
}
finally {
  console.log("FInalmente");
}



//aquí en el throw mandamos una funcion anonima

try {
  throw function () {
    console.log("Funcion del throw...");
  }

}

catch (e) {
  e();
  console.log("Parte del catch");
}
finally {
  console.log("FInalmente");
}


try {
  throw 1; //n cualquier número 

}

catch (e) {
  registroError(e);
}
finally {
  console.log("FInalmente");
}


//podriamos guardar en la base de datos un registro de erorres, para rastrearlo
function registroError(e) {
  var ahora = new Date();
  console.log("se registro un error ", e, "a las: ", ahora);
}
