import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";




const generarDominios = () => {
      let pronouns = ["the", "her", "my", "your"];
      let adjetives = ["big", "cool", "super", "mega"];
      let nouns = ["cat", "dog", "car", "house"];
      let extensions = [".com", ".net", ".org", ".io"];

      const lista = document.getElementById("listaDominios");
      lista.innerHTML = ""; 

      pronouns.forEach(pro =>
        adjetives.forEach(adj =>
          nouns.forEach(sus =>
            extensions.forEach(ext => {
              const dominio = `${pro}${adj}${sus}${ext}`;
              const li = document.createElement("li");
              li.textContent = dominio;
              lista.appendChild(li);
            })
          )
        )
      );
    };

    
    window.addEventListener("DOMContentLoaded", () => generarDominios());