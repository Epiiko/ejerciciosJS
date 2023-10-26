// Crea una tabla con 4 filas y 4 celdas por fila. Usando atributos de HTML, coloca un
// borde y un tamaño de 400x400px y deja el fondo en blanco. 
// a)Crea el código Javascript necesario para que cada vez que se pulse sobre una
// celda,   esa   celda   se   vuelva   de   color   negro.  Nota:   hay   que   usar   funciones
// anónimas y this.
// b)  Mejora el ejercicio anterior para que cada vez que se pulse sobre una celda, esta
// cambie a negro o a blanco alternativamente según corresponda.
// c)Super mejora: define una lista de 4 colores y ahora cada vez que se pulsa sobre
// una celda, esta va cambiando de color siguiendo la lista de colores definida (si
// llega al final de la lista, vuelve al principio).


var lista=["red", "green", "blue","white"];
let celdas=document.getElementsByTagName("td");
for (let i=0;i<celdas.length;i++){
    celdas[i].addEventListener('click', function(){
        cambio(document.getElementsByTagName("td")[i]);
    })
}
function cambio(celda){
    celda.setAttribute("style", "background-color: " + siguienteColor(celda)+ ";")
}
function siguienteColor(celda){
    fondo_actual=celda.getAttribute("style");
    if(fondo_actual==null){
        return lista[0];
    }else{
        let color1=fondo_actual.split(": ") [1];
        let colordepurado=color1.split(";")[0];
         if(lista.indexOf(colordepurado)==lista.length-1){
             return lista[0];
         }else{
            return lista[lista.indexOf(colordepurado)+1];
         }
    }  
}