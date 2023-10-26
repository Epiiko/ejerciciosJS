function eliminarRepes(array1, array2) {
  let combinada = [...array1, ...array2];
  let res = [];
  combinada.sort();
  for (let i = 0; i < combinada.length; i++)
    if (combinada[i] != combinada[i + 1]) res.push(combinada[i]);
    else while (combinada[i] == combinada[i + 1]) i++;
  return res;
}
let array1 = [1, 3, 4, 5, 6];
let array2 = [1, 10, 2, 323, 3, 5, 6];
console.log(eliminarRepes(array1, array2));
// no salen ordenados