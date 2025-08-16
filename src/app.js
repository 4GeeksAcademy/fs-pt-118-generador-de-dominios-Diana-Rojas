import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";



const generarDominios = () => {
      let pronoun = ["the", "our", "my", "your"];
      let adjetive = ["big", "cool", "great","small"];
      let nouns = ["cat", "dog", "car", "house"];
      let extensions = [".com", ".net", ".org", ".io"];

      const lista = document.getElementById("listaDominios");
      

      const dominiosGenerados = new Set();

      while (dominiosGenerados.size < 10) {
        const pro = pronoun[Math.floor(Math.random() * pronoun.length)];
        const adj = adjetive[Math.floor(Math.random() * adjetive.length)];
        const sus = nouns[Math.floor(Math.random() * nouns.length)];
        const ext = extensions[Math.floor(Math.random() * extensions.length)];

        dominiosGenerados.add(`${pro}${adj}${sus}${ext}`);
      }

      dominiosGenerados.forEach(dominio => {
        const li = document.createElement("li");
        li.textContent = dominio;
        lista.appendChild(li);
      });
    };

    window.addEventListener("DOMContentLoaded", () => generarDominios());