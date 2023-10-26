// Crea un párrafo en HTML y ponle la clase “uno”. Usando CSS, coloca un fondo,
// uno borde, una anchura y un color/tam de letra  para esa clase.   Crea la clase “dos”
// similar a la clase “uno” pero con valores diferentes.
// a) Cuando se haga click sobre el párrafo, cambia de la clase “uno” a la clase “dos”.
// b) Cada vez que haga click en el párrafo, cambia de clase alternativamente.
document.getElementsByTagName("p")[0].addEventListener('click', function(){
    cambio();
})
function cambio(){
    if(document.getElementsByTagName("p")[0].getAttribute("class")=="uno"){
        document.getElementsByTagName("p")[0].setAttribute("class", 'dos'); 
        return;    
    }
    document.getElementsByTagName("p")[0].setAttribute("class", 'uno');
}