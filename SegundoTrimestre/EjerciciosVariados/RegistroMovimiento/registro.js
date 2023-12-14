document.getElementById("grande").addEventListener("mousemove", function (ev) {
  document.getElementsByClassName("cajita")[0].innerHTML =
    ev.clientX + " , " + ev.clientY;
  document.getElementsByClassName("cajita")[1].innerHTML =
    ev.pageX + " , " + ev.pageY;
  document.getElementsByClassName("cajita")[2].innerHTML =
    ev.layerX + " , " + ev.layerY;
  document.getElementsByClassName("cajita")[3].innerHTML =
    ev.screenX + " , " + ev.screenY;
});
document.getElementById("grande").addEventListener("mouseout", function () {
  document.getElementsByClassName("cajita")[0].innerHTML = "0 , 0";
  document.getElementsByClassName("cajita")[1].innerHTML = "0 , 0";
  document.getElementsByClassName("cajita")[2].innerHTML = "0 , 0";
  document.getElementsByClassName("cajita")[3].innerHTML = "0 , 0";
});
