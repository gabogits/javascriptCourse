//esta es una forma de crear cookies
//document.cookie = "nombre=gabriel";
//document.cookie = "apellido=lopez";




//hay que escapar caracteres que nos podrian dar errores

//document.cookie = "nombre=ga;briel;"; //aqui los ; de el valor nos podrian dar un error por eso hay que escaparlas
//si no escapamos el ; obtendriamos esto al imprimir las cookies nombre=ga


var demo = "123;123*123'123/";
console.log(escape(demo));
//al imprimir obtenemos esto 123%3B123*123%27123/ escape, cambia los caracteres problematicos a su interpretacion escapada

//tambien existe la version sin escapar unescape
console.log(unescape(demo));

//auí creamos una cookie con una funcion
function crearCookie(nombre, valor) {
  //aqui lo escapamos
  valor = escape(valor);

  var hoy = new Date();
  hoy.setMonth(hoy.getMonth() + 1);
  document.cookie = nombre + "=" + valor + ";expires=" + hoy.toUTCString() + ";";
  //con esto le estamos haciendo la indiciacion de que la cookie expira en un mes
}

//crearCookie('nombre', 'fernando');
//crearCookie('correo', 'fernando@hotmail.test');

//crearCookie('direccion', 'san josé, costa rica');


//para eliminar una cookie

// fecha de expiracion de la cookie

function borrarCookie(nombre) {
  var hoy = new Date();
  hoy.setMonth(hoy.getMonth() - 1);
  document.cookie = nombre + "=x;expires=" + hoy.toUTCString() + ";";

}

//borrarCookie('nombre')


//obtencion de la cookie

function getCookie(nombre) {
  var cookies = document.cookie;
  var cookiesArr = cookies.split('; ');
  console.log(cookiesArr);

  for (var i = 0; i < cookiesArr.length; i++) {
    var parArr = cookiesArr[i].split("=");
    cookiesArr[i] = parArr;
    if (parArr[0] === nombre) {
      return unescape(parArr[1]);
    }
  }
  console.log(cookiesArr);
  return undefined;
}
console.log(getCookie('correo'));