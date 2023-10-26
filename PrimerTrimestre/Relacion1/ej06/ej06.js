// Crea cinco botones y coloca como value un color diferente a cada uno. Cada vez
// que se pulse uno de los botones, el fondo de la página debe cambiar al color indicado
// por ese botón.
document.getElementsByTagName("button")[0].addEventListener('click', function () {
    cambio(document.getElementsByTagName("button")[0])
})
document.getElementsByTagName("button")[1].addEventListener('click', function () {
    cambio(document.getElementsByTagName("button")[1])
})
document.getElementsByTagName("button")[2].addEventListener('click', function () {
    cambio(document.getElementsByTagName("button")[2])
})
document.getElementsByTagName("button")[3].addEventListener('click', function () {
    cambio(document.getElementsByTagName("button")[3])
})
document.getElementsByTagName("button")[4].addEventListener('click', function () {
    cambio(document.getElementsByTagName("button")[4])
})
function cambio(boton){
    console.log(boton.getAttribute("value"))
    cuerpo=document.getElementsByTagName("body")[0];
    cuerpo.setAttribute("style", "background-color: " + boton.getAttribute("value")+  ";");
}

