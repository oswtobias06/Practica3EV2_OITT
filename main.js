const titulo = document.getElementById("nombre");
const intro = document.getElementById("intro");
const estreno = document.getElementById("estreno");
const personajes = document.getElementById("personajes");
const planetas = document.getElementById("planetas");
const vehiculos = document.getElementById("vehiculos");
const especies = document.getElementById("especies");
const inputpelicula = document.getElementById("pelicula");
const boton = document.getElementById("boton");


async function pelicula(){
    const respuesta = await fetch("https://swapi.dev/api/films/" + inputpelicula.value);
    const starwars = await respuesta.json();

    titulo.innerText =  starwars.title;
    intro.innerText = starwars.opening_crawl;
    estreno.innerText = starwars.release_date;

  personajes.innerText = "";
  for (let i = 0; i < starwars.characters.length; i++) {
    const res = await fetch(starwars.characters[i]);
    const personaje = await res.json();
    const item = document.createElement("li");
    item.innerText = personaje.name;
    personajes.appendChild(item);
  }

  planetas.innerText = "";
  for (let i = 0; i < starwars.planets.length; i++){
    const res = await fetch(starwars.planets[i]);
    const planeta = await res.json();
    const item = document.createElement("li");
    item.innerText = planeta.name;
    planetas.appendChild(item);

  }

  vehiculos.innerText = "";
  for (let i = 0; i < starwars.vehicles.length; i++){
    const res = await fetch(starwars.vehicles[i]);
    const vehiculo = await res.json();
    const item = document.createElement("li");
    item.innerText = vehiculo.name;
    vehiculos.appendChild(item);

  }
  especies.innerText = "";
  for (let i = 0; i < starwars.species.length; i++){
    const res = await fetch(starwars.species[i]);
    const especie = await res.json();
    const item = document.createElement("li");
    item.innerText = especie.name;
    especies.appendChild(item);

  }
  }

boton.addEventListener("click", e => {
    e.preventDefault();
    pelicula();
});