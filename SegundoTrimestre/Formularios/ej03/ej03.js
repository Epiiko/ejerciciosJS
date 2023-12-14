lista=document.querySelectorAll("input [type='checkbox']")
if(element.checked){
    console.log("putaputa");
    document.getElementsByTagName("textatrea")[0].value+=element.value;
}