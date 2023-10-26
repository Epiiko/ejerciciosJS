// 9- Repite el ejercicio 5 de esta relación pero esta vez no uses clases (toca directamente
//     todas las propiedades CSS que necesites).

let parra = document.querySelector("p");
let activo =true;
let coloract=(window.getComputedStyle(parra).getPropertyValue("background-color"));
document.querySelector("p").addEventListener('click', function () {
   console.log(window.getComputedStyle(parra).getPropertyValue("background-color"));
    if (activo) {
        document.querySelector("p").setAttribute("style", "color: black; background-color: white; font-size: 2rem");
        activo=false;
        return;
    }
    activo=true;
    document.querySelector("p").setAttribute("style", "color: white; background-color: black; font-size: 3rem");
});
