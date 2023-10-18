'use strict';

const axios = require('axios');

const MAX_POKEMON_TO_DRAFT = 6;
const POKEMON_API_BASE_URL = 'https://pokeapi.co/api/v2/';
const MOD_RESOURCE_PREFIX = 'https://raw.githubusercontent.com/arashivox/dhsprites/master/gen6/';

class Draft {
  constructor(room, format, numPokemon) {
    this.room = room;
    this.format = format;
    this.numPokemon = numPokemon;
    this.pokemonPool = [];
    this.draftOrder = [];
  }

  async generatePokemonPool() {
    // Fetch Pokemon data for the specified format
    const response = await axios.get(`${POKEMON_API_BASE_URL}pokemon/${this.format}`);
    const tierPokemon = response.data.pokemon;
    
    // Generate the Pokemon pool
    for (let i = 0; i < this.numPokemon; i++) {
      const randomIndex = Math.floor(Math.random() * tierPokemon.length);
      const pokemon = tierPokemon.splice(randomIndex, 1)[0];
      this.pokemonPool.push({
        name: pokemon.pokemon.name,
        sprite: `${MOD_RESOURCE_PREFIX}${pokemon.pokemon.name}.png`,
      });
    }
  }

  async fetchPokemonData(pokemonName) {
    const response = await axios.get(`${POKEMON_API_BASE_URL}pokemon/${pokemonName}`);
    return response.data;
  }

  async init() {
    await this.generatePokemonPool();
    this.shuffleOrder();
    this.displayPokemonPool();
  }

  shuffleOrder() {
    // Shuffling draft order
    this.draftOrder = Array.from(Array(this.numPokemon), (_, index) => index);
    for (let i = this.draftOrder.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.draftOrder[i], this.draftOrder[j]] = [this.draftOrder[j], this.draftOrder[i]];
    }
  }

  displayPokemonPool() {
    // Display the Pokemon pool
    const pokemonList = this.pokemonPool.map((pokemon, index) => `[${index + 1}] ${pokemon.name}`).join(', ');
    this.room.add(`Available Pokemon to draft: ${pokemonList}`);
  }
}

const commands = {
  draft: {
    create: 'new',
    new(target, room, user, connection) {
      if (!target) return this.errorReply("Usage: /draft new [format], [number of Pokemon]");
      const [format, numPokemon] = target.split(',').map(param => param.trim());
      if (!format || !numPokemon) return this.errorReply("Invalid parameters. Usage: /draft new [format], [number of Pokemon]");

      if (room.draft) return this.errorReply("There is already a draft in progress.");
      if (isNaN(numPokemon) || parseInt(numPokemon) <= 0 || parseInt(numPokemon) > MAX_POKEMON_TO_DRAFT) {
        return this.errorReply(`Invalid number of Pokemon. Please choose a number between 1 and ${MAX_POKEMON_TO_DRAFT}.`);
      }

      const draft = new Draft(room, format, numPokemon);
      draft.init();
      room.draft = draft;
    },
    newhelp: ["/draft new [format], [number of Pokemon] - Starts a new draft with specified format and number of Pokemon."],

    shuffle: 'coinflip',
    coinflip(target, room) {
      if (!room.draft) return this.errorReply("There is no draft in progress.");
      room.draft.shuffleOrder();
      room.draft.displayPokemonPool();
    },
    coinfliphelp: ["/draft coinflip - Shuffles the draft order and displays the available Pokemon to draft."],

	pick(target, room, user) {
		this.room.draft.pick(target, this.room, user);
	  },
	  pickhelp: ["/draft pick [number] - Picks a Pokemon from the available list."],
	  

	  end(target, room, user) {
		this.room.draft.end(target, this.room, user);
	  },
	  endhelp: ["/draft end - Ends the draft. Requires: % @ # & ~"],
	},
};

exports.commands = commands;
