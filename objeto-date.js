


var hoy = new Date();

console.log(hoy); //aqui se agarra la fech que tenga el navegador web


var fechaMilisegundos = new Date(1); //1 es la representacion numerica de una fecha 
//Wed Dec 31 1969 18:00:00 GMT-0600 (hora estándar central) se hace una conversion en milisegundo a dias y devuelve una fecha
console.log(fechaMilisegundos);

/*--fecha fija---*/



//var fechaFija = new Date(anio, mes, dia, hora, min, seg, mili);

var fechaFija = new Date(2016, 9, 21, 23, 10, 15, 1); //se especa este sea octubre pero es noviembre, ya que los meses en javascript empiezan en base 0, como la posicion de los arreglos
//osea 2016, 0 es enero 2016
console.log(fechaFija); //Fri Oct 21 2016 23:10:15 GMT-0500 (hora de verano central)

//el milisegundo no se ve pero ahí esta


//si queremos obtener el año de la fecha

console.log(hoy.getFullYear() + 1); //

// ya no ocupar getYear console.log(hoy.getYear());

console.log(hoy.getDate()); //obtener el día
console.log(hoy.getHours()); //obtener las horas
console.log(hoy.getMilliseconds()); //obtener los milisegundos

console.log(hoy.getMonth()); //obtener el número del mes (en base 0)
console.log(hoy.getSeconds()); //obtener los segundos

//get time

console.log(hoy.getTime()); //la representación numerica en milisegundos de una fecha

//gettime nos sirve para saber cuando demora un proceso



var inicio = new Date();
console.log("inicio", inicio);
for (var i = 0; i < 15000; i++) {
  console.log("Algo....");

}
var fin = new Date();


console.log("fin", fin); //aquí el momento en que termino

//con esto obtenemos la fecha del momento que se ejecuto el proceso

var duracion = fin.getTime() - inicio.getTime();

console.log(duracion, "milisegundos");
console.log((duracion / 1000), "segundos"); // y asi obtenemos milisegundos


var sumarFecha = new Date(2016, 9, 20);

console.log(sumarFecha);


sumarFecha.setDate(25);
console.log("sumarFecha", sumarFecha); //aquí seteamos el día, obtenemos el Tue Oct 25 2016 

sumarFecha.setDate(32); //si excete el numero de días, suma la diferencia para el otro dia
console.log("sumarFecha", sumarFecha); //osea esta fecha Tue Nov 01 2016

//tambien hay .setYear(), .setMonth(), setMiliseconds();

//asi lo hacemos de manera parametrica, modificando el prototipo del objeto, y agregando un metodo.
var sumarFecha = new Date(2016, 9, 20);
Date.prototype.sumarDias = function (dias) {
  this.setDate(this.getDate() + dias);
  return this;
}

console.log("fecha.sumarDias(5)", sumarFecha.sumarDias(5));

//ahora sumar años
Date.prototype.sumarAnios = function (anios) {
  this.setFullYear(this.getFullYear() + anios);
  return this;
}

console.log("fecha.sumarAnios(5)", sumarFecha.sumarAnios(5));


var fecha1 = new Date(2016, 9, 21, 23, 10, 15, 1);
var fecha2 = new Date(2016, 9, 20, 23, 10, 15, 1);



var today = new Date();
var Christmas = new Date("12-25-2012");
var diffMs = (Christmas - today); // milliseconds between now & Christmas
var diffDays = Math.floor(diffMs / 86400000); // days
var diffHrs = Math.floor((diffMs % 86400000) / 3600000); // hours
var diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000); // minutes
// alert(diffDays + " days, " + diffHrs + " hours, " + diffMins + " minutes until Christmas 2009 =)");













/*