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
    tabla.setAttribute("heigth" ,parseInt(tabla.width)+newalt);
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