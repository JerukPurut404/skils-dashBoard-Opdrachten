class App {
  constructor() {
    this.PokemonImage = document.getElementById('js--pokemon-image');
    this.randomNumber = Math.floor(Math.random() * 1009 + 1);
    this.reloadPokemonBtn = document.getElementById("loadBtn");
    this.catchPokemonBtn = document.getElementById("catchBtn");
    this.pokemonText = document.getElementById("js--pokemon-text");
    this.submitButton = document.getElementById("submitBtn");
    this.PokemonGamePlayed = false;
    this.init();
    this.pokemonName = ''
    this.pokemonNameCapitalized = ''
    this.reloadPokemonBtn.onclick = this.reloadPokemon.bind(this);
    this.catchPokemonBtn.onclick = this.catchPokemon.bind(this);
    this.tv_show_title = document.getElementById("tv-show-title");
    this.tv_show_description = document.getElementById("tv-show-description");
    this.tv_show_poster = document.getElementById("tv-show-poster");
    this.tv_show_input = document.getElementById("tv-show-input");  
    this.AgeInputField = document.getElementById("js--age-input");
    this.AgeInputField.onkeyup = this.init.bind(this);
  }

  init() {
    const NameField = document.getElementById("js--name");
    document.addEventListener("DOMContentLoaded", () => {
      this.AgeInputField.onkeyup = function(event){
        if(event.keyCode === 13){
          fetch("https://api.agify.io?name=" + document.getElementById("js--age-input").value)
          .then(response => response.json())
          .then(data => {
            document.getElementById("js--age-input").style.display = "none";
            NameField.innerText = data.age;
          })
        }
      }
    });

    document.addEventListener("DOMContentLoaded", () => {
      this.tv_show_input.onkeyup = function(event){
        if(event.keyCode === 13){
          fetch("https://api.tvmaze.com/search/shows?q=" + document.getElementById("tv-show-input").value)
          .then(response => response.json())
          .then(data => {
            const show = data[0].show;
           document.getElementById("tv-show-title").innerText = show.name;
           document.getElementById("tv-show-description").innerHTML = show.summary;
           document.getElementById("tv-show-poster").src = show.image.medium;
          })
          .catch(error => {
            console.log(error);
          })
        }
      }
    });


    fetch("https://pokeapi.co/api/v2/pokemon/" + this.randomNumber)
      .then(response => response.json())
      .then(data => {
        this.PokemonImage.src = data.sprites.front_default;
        this.pokemonName = data.species.name;
        this.pokemonNameCapitalized = this.pokemonName.charAt(0).toUpperCase() + this.pokemonName.slice(1)
      })

    fetch("https://api.tvmaze.com/search/shows?q=neon genesis evangelion")
      .then(response => response.json())
      .then(data => {
        this.tv_show_title.innerText = data[0].show.name;
        this.tv_show_description.innerHTML = data[0].show.summary;
        this.tv_show_poster.src = data[0].show.image.medium;

      })
  }

  reloadPokemon() {
    this.PokemonGamePlayed = false
    this.pokemonText.innerText = "A wild Pokemon!"
    this.randomNumber = Math.floor(Math.random() * 1009 + 1);
    fetch("https://pokeapi.co/api/v2/pokemon/" + this.randomNumber)
      .then(response => response.json())
      .then(data => {
        this.PokemonImage.src = data.sprites.front_default;
        this.pokemonName = data.species.name;
        this.pokemonNameCapitalized = this.pokemonName.charAt(0).toUpperCase() + this.pokemonName.slice(1)
        console.log(this.pokemonNameCapitalized);
      })
      .catch(error => console.error(error));
  }

  catchPokemon() {
    if(this.PokemonGamePlayed === false){
      let catchNumber = Math.floor(Math.random() * 2);
      if (catchNumber === 0) {
        this.pokemonText.innerText = this.pokemonNameCapitalized + " Fled";
        console.log(this.pokemonNameCapitalized)
      }
      else {
        this.pokemonText.innerText = this.pokemonNameCapitalized + " Caught!";
        console.log(this.pokemonNameCapitalized)
      }
      this.PokemonGamePlayed = true
    } 
  }
}

const app = new App();
