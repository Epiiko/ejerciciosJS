// Crea una galería de fotos (al menos 5 fotos) que posea un botón para avanzar y otro
// para retroceder.
// •El botón para avanzar hará que se muestre la siguiente foto cada vez que se
// pulse. Si se llega al final de la lista de imágenes, el botón deja de funcionar.
// •El botón para retroceder hará que se muestre la foto anterior cada vez que se
// pulse. Si se llega al principio de la lista de imágenes, el botón deja de funcionar.
// b) Mejorar el ejercicio haciendo que el botón correspondiente se deshabilite
// cuando se alcanza el final/principio de la lista de fotos.
document.getElementsByTagName("button")[1].addEventListener('click', function () {
    next()
})
document.getElementsByTagName("button")[0].addEventListener('click', function () {
    previous()
})

function next() {
    let botonNext = document.getElementsByTagName("button")[1];
    let botonPrev = document.getElementsByTagName("button")[0];
    let actual = document.getElementsByTagName("img")[0];
    let ruta_actual = actual.getAttribute("src");
    switch (ruta_actual) {
        case "./img/g1.jpg": actual.setAttribute("src", "./img/g2.jpg");
            botonPrev.removeAttribute("disabled");
            break;
        case "./img/g2.jpg": actual.setAttribute("src", "./img/g3.jpg");
            break;
        case "./img/g3.jpg": actual.setAttribute("src", "./img/g4.jpg");
            break;
        case "./img/g4.jpg": actual.setAttribute("src", "./img/g5.jpg");
            botonNext.setAttribute("disabled", 'true');
            break;
    }
}
function previous() {
    let botonNext = document.getElementsByTagName("button")[1];
    let botonPrev = document.getElementsByTagName("button")[0];
    let actual = document.getElementsByTagName("img")[0];
    let ruta_actual = actual.getAttribute("src");
    switch (ruta_actual) {
        case "./img/g5.jpg": actual.setAttribute("src", "./img/g4.jpg");
            botonNext.removeAttribute("disabled");
            break;
        case "./img/g4.jpg": actual.setAttribute("src", "./img/g3.jpg");
            break;
        case "./img/g3.jpg": actual.setAttribute("src", "./img/g2.jpg");
            break;
        case "./img/g2.jpg": actual.setAttribute("src", "./img/g1.jpg");
            botonPrev.setAttribute('disabled', 'true');
            break;
    }
}