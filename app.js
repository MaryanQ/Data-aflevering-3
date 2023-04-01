"use strict";

window.addEventListener("load", initApp);

async function initApp() {
  const pokemons = await getPokemon(
    "https://cederdorff.github.io/dat-js/05-data/pokemons.json"
  );

  for (const pokemon of pokemons) {
    showPokemon(pokemon);
    console.log(pokemon);
  }
}

async function getPokemon(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

function showPokemon(pokemons) {
  console.log(pokemons);

  const myPokemons = /* html */ `
  
    <article class="grid-item">
        <h2>${pokemons.name}</h2>
        <img src = "${pokemons.image}" alt=""/>
        <p>Ability: ${pokemons.ability}</p>
        <p> Gender: ${pokemons.gender}</p>
    </article>

`;

  document
    .querySelector("#pokemon-character")
    .insertAdjacentHTML("beforeend", myPokemons);
  document
    .querySelector("#pokemon-character article:last-child")
    .addEventListener("click", pokemonClicked);

  function pokemonClicked() {
    console.log("______________________________________");

    document.querySelector("#detail-image").src = pokemons.image;
    document.querySelector("#detail-name").textContent = pokemons.name;
    document.querySelector("#detail-info").textContent = pokemons.info;
    document.querySelector("#detail-description").textContent =
      pokemons.description;
    document.querySelector(
      "#detail-footprint"
    ).textContent = `footprint: ${pokemons.footprint}`;
    document.querySelector(
      "#detail-statsSpeed"
    ).textContent = `statsSpeed: ${pokemons.statsSpeed}`;
    document.querySelector(
      "#detail-ability"
    ).textContent = `Ability: ${pokemons.ability}`;
    document.querySelector(
      "#detail-dexindex"
    ).textContent = `Dexindex: ${pokemons.dexindex}`;
    document.querySelector(
      "#detail-subtype"
    ).textContent = `Subtype: ${pokemons.subtype}`;
    document.querySelector(
      "#detail-generation"
    ).textContent = `Generation: ${pokemons.generation}`;
    document.querySelector(
      "#detail-height"
    ).textContent = `Height: ${pokemons.height} cm`;
    document.querySelector(
      "#detail-weight"
    ).textContent = `Weight: ${pokemons.weight} kg`;
    document.querySelector(
      "#detail-gender"
    ).textContent = `Gender: ${pokemons.gender}`;
    document.querySelector(
      "#detail-type"
    ).textContent = `Type: ${pokemons.type}`;
    document.querySelector(
      "#detail-weaknesses"
    ).textContent = `Weaknesses: ${pokemons.weaknesses}`;
    document.querySelector(
      "#detail-spilversion"
    ).textContent = `Spilversion: ${pokemons.spilversion}`;

    let canEvolve = generateEvolve(pokemons);

    document.querySelector("#detail-canEvolve").textContent = canEvolve;
    document.querySelector(
      "#detail-statsHP"
    ).textContent = `statsHP: ${pokemons.statsHP}`;
    document.querySelector(
      "#detail-statsattack"
    ).textContent = `statsattack: ${pokemons.statsAttack}`;
    document.querySelector(
      "#detail-statsDefence"
    ).textContent = `statsDefence: ${pokemons.statsDefence}`;
    document.querySelector(
      "#detail-statsSpecialAttack"
    ).textContent = `statsSpecialAttack: ${pokemons.statsSpecialAttack}`;
    document.querySelector(
      "#detail-statsSpecialDefence"
    ).textContent = `statsSpecialDefence: ${pokemons.statsSpecialDefence}`;

    document.querySelector("#dialog-character").showModal();
  }
}

function generateEvolve(pokemons) {
  let canEvolve = "";
  if (pokemons.canEvolve) {
    canEvolve = `${pokemons.name} can evolve.`;
  } else {
    canEvolve = `${pokemons.name} can't evolve.`;
  }
  return canEvolve;
}
