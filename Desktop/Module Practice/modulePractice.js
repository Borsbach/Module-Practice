import _ from 'lodash'

fetch(`https://pokeapi.co/api/v2/pokemon/${randomPokemon}`)
.then(res => res.json())
.then((data)=> {
  thePokemon.push(data);
  const pokemon = document.getElementById("pokemon");
  pokemon.src = data.sprites.front_default;
  player1Exp = data.base_experience;
})