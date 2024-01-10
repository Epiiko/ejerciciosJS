let fondo=document.getElementById("fondo");
document.querySelectorAll("input[type='radio']").forEach(ele=>{
    ele.addEventListener("change", function(){
        fondo.style.backgroundColor=ele.id;
    })
});
document.querySelector("select").addEventListener("change", function(ev){
        fondo.style.backgroundColor=this.value;
        console.log(ev.target.value + "dhjkfjdhfajkl");
});