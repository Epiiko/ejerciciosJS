// 13.- Crea el efecto SPOILER que se puede ver en foros y otros páginas. 
// Se oculta el contenido de un elemento (pej, un párrafo) y sólo se muestra el mensaje
// “Mostrar”. Al hacer click sobre dicho mensaje, se muestra el contenido del elemento y
// el mensaje cambia a “Ocultar”. Si se pulsa sobre ese mensaje, el elemento vuelve a su
// estado original (contenido oculto y mensaje “Mostrar”)

document.querySelectorAll("p")[1].addEventListener("click", function(){

    if(this.textContent=="Mostrar"){
    document.querySelectorAll("p")[0].style.display="block";
    this.textContent="Ocultar";
    }else{
        document.querySelectorAll("p")[0].style.display="none";
        this.textContent="Mostrar";
    }
})