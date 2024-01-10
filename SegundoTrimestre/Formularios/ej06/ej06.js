document.querySelectorAll("input[type='checkbox']").forEach(ele=>{
    ele.addEventListener("click", function(){
        let despleg=document.getElementById("despleg");
        despleg.innerHTML="<option value='' disabled selected>Elige pais</option>";
        document.querySelectorAll("input[type='checkbox']").forEach(chbx=>{
            if(chbx.checked){
                let opcion=document.createElement("option");
                opcion.setAttribute("value", chbx.value);
                opcion.textContent=chbx.value;
                despleg.appendChild(opcion);
            }
        })
    })
});