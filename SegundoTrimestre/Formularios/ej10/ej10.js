let intel = ["HD 3000", "HD4000", "IRIS 600"];
let amd = ["RX Series 500", "Vega Series", "RX Series 6000"];
let nvidia = ["GTX Serie 1000", "GTX Serie 2000", "GTX Serie 3000"];
document.querySelector("select[name='marca']").addEventListener("change", function () {
    document.querySelector("#modelo").innerHTML = "<option value='' disabled selected>Eliga modelo</option>";
    document.querySelectorAll("option").forEach(ele => {
        if (ele.selected) {
            switch (ele.value) {
                case "intel":
                    console.log("entro en intel");
                    var i = 0;
                    intel.forEach(modelo => {
                        i++;
                        let opcion = document.createElement("option");
                        opcion.setAttribute("value", "intel " + i);
                        opcion.textContent = modelo;
                        document.querySelector("#modelo").appendChild(opcion);
                    })
                    break;
                case "amd":
                    console.log("entro en AMD");
                    var i = 0;
                    amd.forEach(modelo => {
                        i++;
                        let opcion = document.createElement("option");
                        opcion.setAttribute("value", "amd " + i);
                        opcion.textContent = modelo;
                        document.querySelector("#modelo").appendChild(opcion);
                    })
                    break;
                case "nvidia":
                    console.log("entro en NVIDIA");
                    var i = 0;
                    nvidia.forEach(modelo => {
                        i++;
                        let opcion = document.createElement("option");
                        opcion.setAttribute("value", "nvdia " + i);
                        opcion.textContent = modelo;
                        document.querySelector("#modelo").appendChild(opcion);
                    })
                    break;
                default:
                    break;
            }
        }
    })
})
document.querySelector("input[name='enviar']").addEventListener("click", function () {
     if(document.querySelector("#marca").value=="" ||document.querySelector("#modelo").value=="" ){
        alert("Ambos campos han de estar rellenos");
     }else{
        alert("Reporte enviado con exito");
        location.reload();
     }
})