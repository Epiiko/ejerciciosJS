
// Crea una tabla en de 4 filas y 4 columnas. Usando atributos HTML, coloca un borde,
// unas medidas de 300x300px y una alineación al centro. A continuación crea tres
// botones:
// •El primero muestra los valores de anchura y altura de la tabla, pide unos valores
// nuevos para cada propiedad y los aplica a la tabla. ¿se aplican correctamente los
// valores? ¿Falla alguno?
// •El segundo muestra el valor actual del borde de la tabla y solicita un valor nuevo
// para aplicarlo. ¿Funciona correctamente el nuevo valor?
// •El tercer botón va cambiar la alineación de la tabla cada vez que se pulse. Es
// decir, si la tabla está alineada al centro, al pulsar el botón, la tabla quedará
// alineada a la derecha. Si se pulsa el botón otra vez, se alineará a la izquierda y si
// vuelvo a pulsarlo, la tabla se pondrá en el centro.
function cambiarTamaño(){
     newalt=parseInt(prompt("Introduzca un nuevo valor para la altura")); 
     newanch=parseInt(prompt("Introduzca la nueva anchura"));
     tabla=document.getElementsByTagName("table");
     tabla[0].height=newalt;
     tabla[0].width=newanch;
}
function cambiarBordeEstilo(){
    newborder=prompt("Introduzca el tipo de borde").toLowerCase();
    switch(newborder){
        case "dotted": newborder="dotted";
        case "dashed": newborder="dashed";
        case "wavy": newborder="wavy";
        default: "solid";
    }
    tabla=document.getElementsByTagName("table");
    tabla[0].border=newborder;
}
function cambiarBordeTamaño(){
    newbord=parseInt(prompt("Introduzca un nuevo valor para la altura"));
    tabla=document.getElementsByTagName("table"); 
    tabla[0].border=newbord+"px";
}
function sumaTamaño(){
    newalt=parseInt(prompt("Introduzca un valor para sumar a la altura")); 
    newanch=parseInt(prompt("Introduzca un valor para sumar la nueva anchura"));
    tabla=document.getElementsByTagName("table")[0];
    tabla.setAttribute("height" ,parseInt(tabla.height)+newalt);
    tabla.setAttribute("width" ,parseInt(tabla.width)+newanch);
}
function cambiarAlineamiento(){
    /*
    newalign=prompt("Introduzca el tipo de alineamiento").toLowerCase();
    switch(newalign){
        case "left": newalign="left";
        case "right": newalign="right";
        default: newalign="center";
    }
    tabla=document.getElementsByTagName("table");
    tabla[0].align=newalign
    */
//    let valores = ["left","center", "right"]
//    tabla=document.getElementsByTagName("table");

let tablita = document.getElementsByTagName("table")[0];
switch(tablita.getAttribute('align')){
    case "left": cambio="center"; 
    break;
    case "center": cambio="right";
    break;
    case "right": cambio="left";
    break;
    default: cambio="center";
}
tablita.setAttribute("align", cambio);

}
function cambiarClase(){
    tabla=document.getElementsByTagName("table")[0];
    if(tabla.className=="pakita"){
        tabla.className="chichio";
    }else{
        tabla.className="pakita";
    }
}