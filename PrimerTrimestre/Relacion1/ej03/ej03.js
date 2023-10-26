// Crea un DIV con el número 0 en su interior. Bajo el DIV, coloca dos botones: uno
// para sumar y otro para restar.
// •Si se pulsa el botón para sumar, se incrementa en uno el número que hay en el
// DIV en ese momento.
// •Si se pulsa el botón restar, se decrementa en uno el número que hay en el DIV en
// ese momento.
window.onload;

function sumar(){
    let numero=document.querySelector("p");
    numero.textContent=parseInt(numero.textContent)+1;
}
function restar(){
    let numero=document.querySelector("p");
    numero.textContent=parseInt(numero.textContent)-1;
}