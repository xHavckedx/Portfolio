/* }
function form(){
    var valores = window.location.search;
    var urlParams = new URLSearchParams(valores);
    
    var nombre = urlParams.get('nombre')
    var email = urlParams.get('email')
    var mensaje = urlParams.get('mensaje')

    console.log(nombre,"\n",email,"\n",mensaje,"\n")
}*/

function formulario(){
    var inputs = document.getElementsByClassName('contacto__formulario-input');
    for (var i = 0; i < inputs.length; i++){
        if(i==0){var Nombre = inputs[i].value}
        if(i==1){var Email = inputs[i].value}
        if(i==2){var Mensaje = inputs[i].value}
    }
    console.log(Nombre, Email, Mensaje)
}