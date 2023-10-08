function repe(lista1, item){
    let cantidad=0;
    for (let elemento of lista1)
    if(elemento===item)cantidad++;
    let res=cantidad>1?true:false;
    return res;
}
function eliminarRepes(lista1,lista2){
    let res=[];
    let grande=[...lista1,...lista2];
    for( let elemento of grande)
    if(!repe(grande,elemento))res.push(elemento);   
    return res;
}
let p=[1,1,1,2,3,2,2,2,3,4,5,3];
let p2=[2,1,2,1,3,3123,3213,3,33];
let res=eliminarRepes(p,p2);
for (let v of res) console.log(v);