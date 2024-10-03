async function searchPokemon(){
    const pokemonName = document.getElementById('pokemon-name').value.toLowerCase();
    const apiURL = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    const pokemonDataDiv = document.getElementById('pokemon-data')

    try{
        const response = await fetch(apiURL);

        if(!response.ok){
            throw new Error("Pokémon não encontrado");
        }

        const data = await response.json();

        pokemonDataDiv.innerHTML = `
            <h2>${data.name} (# ${data.id}) </h2>
            <p>Habilidades: ${data.abilities.map(abilitiesInfo => abilitiesInfo.ability.name).join(', ')} </p>
        `

    }catch(e){
        pokemonDataDiv.innerHTML = `<p style="color: red;"> ${e.message}</p>`
    }
}