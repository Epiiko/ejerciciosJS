
function loadHouses() {
  let resu = fetch("https://api.gameofthronesquotes.xyz/v1/houses").then(res => res.json()).then(response => addHouses(response)).catch(err => console.log("DSHAD"));
  console.log(resu);
}
function addHouses(response) {
  let hause_div = document.querySelector("#houses");
  response.forEach(element => {
    hause_div.innerHTML += `<div class="card" id="${element.slug}">
        <img src="media/${element.slug}.png" alt="" id="img_${element.slug}" class="houses_logos">
        <h3 class="text">${element.slug}</h3>
    </div>`
  });
}
function addCharacters(response) {
  let person_div = document.querySelector("#persons");
  response.forEach(element => {
    person_div.innerHTML += `<div class="card" id="${element.slug}">
        <img src="media/characters/${element.slug}.jpg" alt="" id="img_${element.slug}" class="houses_logos">
        <h3 class="text">${element.slug}</h3>
    </div>`
  });
}

function loadCharacters() {
  let resu = fetch("https://api.gameofthronesquotes.xyz/v1/characters").then(res => res.json()).then(response => addCharacters(response)).catch(err => console.log("DSHAD"));
  console.log(resu);
}

function loadQuotes() {
  let resu = fetch("https://api.gameofthronesquotes.xyz/v1/random/5")
    .then(res => res.json())
    .then(response => addQuotes(response))
    .catch(err => console.log("DSHAD"));
  console.log(resu);
}

function addQuotes(response) {
  let quotes_div = document.querySelector("#quotes");
  response.forEach(element => {
    quotes_div.innerHTML += `<div class="card">
        <h3 class="text"> " ${element.sentence} "</h3>
        <p>- ${element.character.name}</p>
        <p> ${element.character.house.name ?? ''}</p>
    </div>`;
  });
}

loadHouses();
loadCharacters();
loadQuotes();

