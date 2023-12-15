document
  .querySelector("input[type='button']")
  .addEventListener("click", function () {
    let palabra1 = document.getElementsByTagName("input")[0].value;
    let palabra2 = document.getElementsByTagName("input")[1].value;
    if ([...palabra1].sort().join("") == palabra2.split("").sort().join("")) {
      alert("LAS PALABRAS SON ANAGRAMAS");
    } else {
      alert("LAS PALABRAS NO SON ANAGRAMAS");
    }
  });
