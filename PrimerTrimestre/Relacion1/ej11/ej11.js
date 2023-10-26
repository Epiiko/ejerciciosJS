// 11.- Crea tres DIV de tamaño 300x100px con un color de fondo distinto cada uno y con
// un texto en su interior que indique “Soy el DIV X” (siendo X un número del uno al
// tres).
// a) Oculta el segundo DIV usando la propiedad visibility de CSS. Consigue
// que ese DIV “vuelva a aparecer” sí y solo sí, el cursor del ratón se coloca en el
// primer DIV.
// b)Oculta el segundo DIV usando la propiedad display de CSS. Consigue que
// ese DIV “vuelva a aparecer” sí y solo sí, el cursor del ratón se coloca en el
// primer DIV.
document.querySelector("div").addEventListener("mouseover", function () {
    descubrir();
})
document.getElementsByTagName("div")[0].addEventListener("mouseout", function(){
    esconder();
} )
function descubrir() {
    let div = document.getElementsByTagName("div")[1];
    div.setAttribute("style", "background-color: rgb(89, 255, 0); visibility: visible;")
}
function esconder() {
    let div = document.getElementsByTagName("div")[1];
    div.setAttribute("style", "display : none")
}