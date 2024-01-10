let dni = document.querySelector("input[name='dni']");
let nombre = document.querySelector("input[name='nombre']");
let apellidos = document.querySelector("input[name='apellidos']");
let nacimiento = document.querySelector("input[name='nac']");
let web = document.querySelector("input[name='web']");
let pass = document.querySelector("input[name='pass']");
function validarDni() {
    if (dni.value.length != 9) {
        alert("El dni debe estar relleno");
        return false;
    } else {
        if (isNaN(dni.value.substring(0, 8)) || !isNaN(dni.value.substring(8, 9))) {
            alert("El formato del dni contiene 8 numeros seguidos de una letra (introduzcalo sin guión)");
            return false;
        } else {
            return true;
        }
    }
}
function validarNombre() {
    if (nombre.value.length < 1) {
        alert("El campo nombre debe de estar relleno");
        return false;
    } else {
        if (nombre.value.split(" ").length > 2) {
            alert("Solo puede introducir dos nombres");
            return false;
        } else {
            return true;
        }
    }
}
function validarApellido() {
    if (apellidos.value.length < 1) {
        alert("El campo apellidos debe de estar relleno");
        return false;
    } else {
        if (apellidos.value.split(" ").length > 2) {
            alert("Solo puede introducir dos apellidos");
            return false;
        } else {
            return true;
        }
    }
}
function validarNacimiento() {
    // fechaact=new Date();
    // console.log(fechaact.toLocaleDateString());
    if (nacimiento.value == "") {
        alert("La fecha es obligatoria");
        return false;
    } else {
        return true;
    }
}
function validarWeb() {
    if (web.value == "") {
        alert("La web es obligatoria");
        return false;
    } else {
        // if(web.value.substring(0,7)!="https://"){
        //     alert("La web debe empezar por https://")
        //     return false;
        // }
        return true;
    }
}
function validarPass() {
    if (pass.value < 1) {
        alert("La contraseña es obligatoria");
        return false;
    } else {
        if (pass.value.length < 8 || pass.value.length > 12) {
            alert("La contraseña debe de estar entre 8 y 12 caracteres");
            return false;
        } else {
            return true;
        }

    }
}




//Validacion+Envio
document.querySelector("input[name='enviar']").addEventListener("click", function () {
    // if (validarDni()) {
    //     if (validarNombre()) {
    //         if (validarApellido()) {
    //             if (validarNacimiento()) {
    //                 if (validarWeb()) {
    //                     if (validarPass()) {
    //                         alert("Formulario enviado");
    //                         location.href = "exito.html"
    //                     } else {
    //                         pass.focus();
    //                     }
    //                 } else {
    //                     web.focus();
    //                 }
    //             } else {
    //                 nacimiento.focus();
    //             }
    //         } else {
    //             apellidos.focus();
    //         }
    //     } else {
    //         nombre.focus();
    //     }
    // } else {
    //     dni.focus();
    // };

    if (!validarDni()) {
        dni.focus();
        return;
    }
    if (!validarNombre) {
        nombre.focus();
        return;
    }
    if(!validarApellido){
        apellidos.focus();
        return;
    }
    if(!validarNacimiento){
        nacimiento.focus();
        return;
    }
    if(!validarPass){
        pass.focus();
        return;
    }
    alert("Formulario enviado");
    location.href="exito.html"
})