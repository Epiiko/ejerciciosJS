alsa= [
    {
        nombre: "Nacho",
        precio: 4839,
        localidad: "Torremolinos"
    },
    {
        nombre: "Alberto",
        precio: 3214,
        localidad: "Alhaurin"
    },
    {
        nombre: "Paco",
        precio: 1234,
        localidad: "Marbella"
    },
    {
        nombre: "Nacho",
        precio: 3213,
        localidad: "Alora"
    }
]

function getAlsa(){
  return new Promise((resolve, reject)=>{
    if(alsa.length==0) reject("No hay datos en el array");
    setTimeout(()=>{
        resolve(alsa);
    },3000)
  },)
    
}
console.log(getAlsa());
console.log("Soy el segundo");
console.log("Soy el tercero");