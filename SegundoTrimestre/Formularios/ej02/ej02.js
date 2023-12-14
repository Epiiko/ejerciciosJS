document
  .getElementsByTagName("input")[0]
  .addEventListener("input", function (e) {
    e.preventDefault;
    let texto = document.getElementsByTagName("input")[0].value;
    console.log(texto);
    document.getElementsByTagName("input")[1].value = texto;
  });