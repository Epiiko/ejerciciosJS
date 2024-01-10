  let texto=document.querySelector("#doc");
document.querySelector("input[type='button']").addEventListener("click", function(){
    let publi=document.createElement("div");
    publi.appendChild(document.createTextNode(texto.value.substring(0,50)));
    document.querySelector("#publicaciones").appendChild(publi);
    texto.value="";
    texto.removeAttribute("readonly");
});
texto.addEventListener("input", function(){
    if(texto.value.length>100){
        texto.setAttribute("readonly", true);
    }
})