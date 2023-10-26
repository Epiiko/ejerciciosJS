// 8.- Implementa el efecto ROLLOVER sobre una imagen: al pasar el ratón por encima,
// cambia la imagen. Al sacar el cursor fuera, la imagen vuelve a su estado original.
window.onload;
var imagen=document.getElementsByTagName("img")[0];
function encima(){
imagen.setAttribute("src","./img/g2.jpg");
}
function abajo(){
imagen.setAttribute("src", "./img/g1.jpg");
}
imagen.addEventListener('mouseover', function(){
    encima();
});

imagen.addEventListener('mouseout', function(){
    abajo();
});
