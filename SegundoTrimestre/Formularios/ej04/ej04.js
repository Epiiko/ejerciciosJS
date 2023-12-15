let aEuro=true;
document.querySelector("input[type='button']").addEventListener("click", function(){
    if(aEuro){
        aEuro=false;
        document.querySelector("label").textContent=" Dolares $ ";
        document.querySelectorAll("label")[1].textContent=" Euros € ";
    }else{
        document.querySelector("label").textContent=" Euros € ";
        document.querySelectorAll("label")[1].textContent=" Dolares $ ";
        aEuro=true;
    }
});
document.querySelector("input[type='submit']").addEventListener("click", function(e){
    e.preventDefault();
    if(aEuro){
        dolarEuro();
    }else{
        euroDolar();
    }

});
function dolarEuro(){
    let cantidad=document.querySelector("input").value;
    document.querySelectorAll("input")[1].value= parseInt(cantidad)*0.83;
}
function euroDolar(){
    let cantidad=document.querySelector("input").value;
    document.querySelectorAll("input")[1].value= parseInt(cantidad)*1.17;
}