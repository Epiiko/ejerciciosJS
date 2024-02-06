function loadHouses() {
  let resu = fetch("https://api.gameofthronesquotes.xyz/v1/houses")
    .then((res) => res.json())
    .then((response) => addHouses(response))
    .catch((err) => console.log("DSHAD"));
  console.log(resu);
}
function addHouses(response) {
  let hause_div = document.querySelector("#houses");
  response.forEach((element) => {
    hause_div.innerHTML += `<div class="card" id="${element.slug}">
        <img src="media/${element.slug}.png" alt="" id="img_${element.slug}" class="houses_logos">
        <h3 class="text">${element.slug}</h3>
    </div>`;
  });
  document.querySelectorAll("#houses .card").forEach((ele) => {
    ele.addEventListener("click", () => {
      newDivPersons(ele.id);
    });
  });
}
function addCharacters(response) {
  let person_div = document.querySelector("#persons");
  response.forEach((element) => {
    person_div.innerHTML += `<div class="card" id="${element.slug}">
        <img src="media/characters/${element.slug}.jpg" alt="" id="img_${element.slug}" class="houses_logos">
        <h3 class="text">${element.slug}</h3>
    </div>`;
  });
}

function loadCharacters() {
  let resu = fetch("https://api.gameofthronesquotes.xyz/v1/characters")
    .then((res) => res.json())
    .then((response) => addCharacters(response))
    .catch((err) => console.log("DSHAD"));
}

function loadQuotes() {
  let resu = fetch("https://api.gameofthronesquotes.xyz/v1/random/5")
    .then((res) => res.json())
    .then((response) => addQuotes(response))
    .catch((err) => console.log("DSHAD"));
}

function addQuotes(response) {
  let quotes_div = document.querySelector("#quotes");
  quotes_div.innerHTML = "";
  response.forEach((element) => {
    quotes_div.innerHTML += `<div class="card">
        <h3 class="text"> " ${element.sentence} "</h3>
        <p>- ${element.character.name}</p>
        <p> ${element.character.house.name ?? ""}</p>
    </div>`;
  });
}
function newDivPersons(house) {
  console.log("https://api.gameofthronesquotes.xyz/v1/house/" + house);
  fetch("https://api.gameofthronesquotes.xyz/v1/house/" + house)
  .then(res=>res.json())
  .then((response)=>{  addNewDivPersons(response)})
  
 
  .catch(err=>console.log(err));
}
function addNewDivPersons(response) {
  response=response[0];
  let fill_div = document.querySelector("#fill");
  document.querySelector("#titlefill").textContent = response.slug;
  fill_div.innerHTML = "";
  response.members.forEach((element) => {
    fill_div.innerHTML += `<div class="card">
        <h3 class="text"> " ${element.name} "</h3>
        <img src="media/characters/${element.slug}.jpg" alt="" id="img_${element.slug}" class="houses_logos">
    </div>`;
  });
}
document.querySelector("input[type='button']").addEventListener("click", () => {
  loadQuotes();
});
loadHouses();
loadCharacters();
loadQuotes();
