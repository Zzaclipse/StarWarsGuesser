const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const characterSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  picture: {
    type: String,
  },
  gender: {
    type: String,
    required: true,
    trim: true,
  },
  species: {
    type: String,
    required: true,
    trim: true,
  },
  weapon: {
    type: String,
    required: true,
    trim: true,
  },
  forceSensitive: {
    type: String,
    required: true,
    trim: true,
  },
  birthPlanet: {
    type: String,
    required: true,
    trim: true,
  },
  lsds: {
    type: String,
    required: true,
    trim: true,
  },
});

const Character = model("Character", characterSchema);

module.exports = Character;
