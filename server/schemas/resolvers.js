const { AuthenticationError } = require("apollo-server-express");
const { User, Character } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },
    user: async (parent, { username }) => {
      return User.findOne({ username });
    },
    characters: async () => {
      return Character.find();
    },
    character: async (parent, { name }) => {
      return Character.findOne({ name });
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("No user found with this email address");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },
    addCharacter: async (
      parent,
      { name, picture, gender, species, weapon, forceSensative }
    ) => {
      const character = await Character.create({
        name,
        picture,
        gender,
        species,
        weapon,
        forceSensative,
      });
      return character;
    },

    removeCharacter: async (parent, { charId }) => {
      return Character.findOneAndDelete({ _id: charId });
    },
  },
};

module.exports = resolvers;
