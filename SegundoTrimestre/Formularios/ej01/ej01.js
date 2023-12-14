document
  .getElementsByTagName("input")[2]
  .addEventListener("click", function (e) {
    e.preventDefault;
    let texto = document.getElementsByTagName("input")[0].value;
    console.log(texto);
    document.getElementsByTagName("input")[1].value = texto;
  });
