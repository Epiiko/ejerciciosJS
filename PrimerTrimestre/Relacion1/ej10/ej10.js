// 10.- Crea tres DIV de tamaño 100x100px y con un color de fondo diferente cada uno.
// Al pasar por encima de alguno de esos DIVs, el color de fondo de la página debe
// cambiar al color que tenga el DIV sobre el que está el cursor del ratón.
// b) Añade el código necesario para que el color de la página vuelva a su color
// original si el cursor del ratón no está encima de ninguno de los DIVs del ejercicio.

var lista=document.getElementsByTagName("div");
for(let i=0;i<lista.length;i++){
    lista[i].addEventListener('mouseover', function(){
        pintarFondo(lista[i]);
    });
}
for(let i=0;i<lista.length;i++){
    lista[i].addEventListener('mouseout', function(){
        despintar(lista[i]);
    });
}
function pintarFondo(bloque){
    let colorActual=window.getComputedStyle(bloque).getPropertyValue("background-color");
    document.body.setAttribute("style", "background-color : " + colorActual + " ;");
}
function despintar(bloque){
    document.body.setAttribute("style", "background-color:white;")
}