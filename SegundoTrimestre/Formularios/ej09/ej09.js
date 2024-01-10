document.querySelector("input[name='dni']").addEventListener("blur", function(){
    if(this.value.length!=9){
        alert("El dni debe de tener 8 numeros y una letra");
    }else{
        if(!isNaN(this.value.substring(7,8)) && isNaN(this.value.substring(0,7))){
            alert("El formato debe ser 00000000L");
        }
    }
})