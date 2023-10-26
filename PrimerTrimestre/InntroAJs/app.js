function sumar(){
    let n1=prompt("Introduzca el primer numero");
    let n2=prompt("Introduzca el segundo numero");
    alert(isNaN(n1+n2)?"ERROR NO ES UN NUMERO":"La suma es " +
    (parseInt (n1) + parseInt (n2)));
}
var multi=function multi(a, b){return a*b};
let res=multi(2,5);
const arrowF =(a , b) => a*b;
console.log(arrowF(2,3));
function testFun(a,b){
    if(a===undefined) 
    a=0;
}
const persona={
    nombre: "Juan",
    apellido: "Perez"
}
function cambiarValorObjeto (persona1){
    persona1.nombre="PACO",
    persona1.apellido="CHOCOLATERO";
}
function miConcatenador(separator){
    var result ="";
    var i;
    for(i=1;i<arguments.length;i++){
        result +=arguments[i] + separator;
    }
    console.log(result);
    return result;
}
miConcatenador(",","red","dasdha","jdjd",23173187,"slkdhalkd");