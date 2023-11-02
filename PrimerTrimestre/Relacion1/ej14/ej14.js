// 14.- Crear un menú vertical con efecto acordeón usando los siguientes apartados:•Inicio
// ◦Portada.
// ◦Acerca de mi.
// ◦Mis fotos.
// •Proyectos
// ◦Web Apps.
// ◦Mobile Apps.
// ◦Juegos.
// •Portfolio
// ◦Páginas webs.
// ◦Software.
// •Contacto
// A tener en cuenta:
// •El menú debe tener una maquetación en CSS.
// •Los subapartados permanecen ocultos hasta que se pulsa sobre el apartado
// correspondiente. 
// •Al abrir un bloque de subapartados, se cierran los demás
let subapartados=document.querySelectorAll("li");
subapartados[0].addEventListener("click", function(){
    mostrar(0);
});
subapartados[4].addEventListener("click", function(){
    mostrar(1);
});
subapartados[8].addEventListener("click", function(){
    mostrar(2);
});

function mostrar(num){
    document.querySelectorAll("li+ul").forEach(bloque => {
        bloque.style.setProperty("display" , "none");
    });
    document.querySelectorAll("body>ul>li")[num].nextElementSibling.style.setProperty("display", "block");
}