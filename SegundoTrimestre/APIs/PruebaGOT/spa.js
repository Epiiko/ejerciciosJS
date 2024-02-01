window.onload = () => {
    function loadHouses(){
      fetch("https://api.gameofthronesquotes.xyz/v1/houses").then(res=>res.json()).then(response=>console.log(response));
      // return response;
    }
    function housesCards(){
      const houses=loadHouses();
      
    }
    loadHouses();
    function loadPersons(){
      const origen = "libros.json";
      let salida = document.querySelector(".content");
      // creo el objeto
      xhr = new XMLHttpRequest();
      //hago la peticion
      xhr.open("GET", origen);
      //   paso3
      xhr.addEventListener("load", function (respuesta) {
         respuesta =JSON.parse(respuesta.target.response);
        let library= respuesta.library;
        let libroHTML = "";
       for (const  book of  library) {
        console.log(book);
        libroHTML += `<div class="card" style="width: 18rem;">
        <img src="${book.cover}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${book.title}</h5>
          <p class="card-text">${book.synopsis}</p>
          <a href="#" class="btn btn-primary">Ver libro</a>
        </div>
      </div>
      <br>`;
       }
       salida.innerHTML=libroHTML;
      });
      xhr.addEventListener("error", function (respuesta) {
        console.log("ERROR");
      });
      xhr.send();
      //   esto no es asincrona
      console.log("Soy la ultima en aparecer...");
    }
    
  };
  