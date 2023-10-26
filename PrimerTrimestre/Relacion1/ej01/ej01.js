
    function sacarInfo(){
        let enlace = document.getElementsByTagName("a")[0];
        console.log(enlace.getAttribute("href"));
        console.log(enlace.textContent);
    }
    function cambiarInfo(){
        let enlace = document.getElementsByTagName("a")[0];
        if(enlace.textContent==="he cambiado"){
            enlace.textContent="Google";
            return;
        }
        enlace.textContent="he cambiado";
    }