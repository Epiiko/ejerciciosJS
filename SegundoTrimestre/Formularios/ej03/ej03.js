lista = document.querySelectorAll("input[type='checkbox']");
lista.forEach((ele) =>
  ele.addEventListener("click", function (ev) {
    let campoTexto=document.querySelector("textarea");
    campoTexto.value = "";
    lista.forEach(element => {
        if(element.checked){
           campoTexto.value+=element.value + "\n";
        }
    });
  })
);
