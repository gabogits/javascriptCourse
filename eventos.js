//Obtener informacion de un event


function evento(arg) {
    console.log("me disparé");
    console.log(arg); //al asignarle un evento se tiene acceso a las propiedades del objeto
}

var objeto = document.getElementById('obj');
objeto.addEventListener('click', evento);

//MouseEvent {isTrusted: true, screenX: 161, screenY: 174, clientX: 38, clientY: 16, …}

//isTrusted is trusted significa que es un evento disoarado por un usuario y no un click programado
//se puede saber el valor que tiene un input  con e.target.value, tambien en que punto x y y se dio click, etc, el tipo de evento
function eventoBloquear(arg) {
    if (arg.button === 2) { //se le puede asignar un mensaje al dar click derecho sobre la area bloqueada
        alert("click bloqueado");
        return;
    }
    console.log('no hay problema'); //con el click izq pasaria esto
    console.log(arg);
}

function eventoSeleccionar() {
    var texto = window.getSelection().toString();
    //para obtener lo que selecciona la gente
    console.log(texto);
}

var divbloquear = document.getElementById('bloquear-menuContext');
divbloquear.addEventListener('mousedown', eventoBloquear);
divbloquear.addEventListener('mouseup', eventoSeleccionar);

//evento submi
function validar() {
    var nombre = document.getElementById('txtNombre').value;
    var apellido = document.getElementById('txtApellido').value;
    if (nombre.length < 1 || apellido.length < 1) {
        return false;
    }
    return true;

}

//obtener un parametro de los enviados por el formulario

function getParamURL(name) {
    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [, ""])[1].replace(/\+/g, '%20')) || null
}

console.log(getParamURL('txtNombre'))