import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import styled from "styled-components";
import Table from "../components/Table";

const Testdata = [
  {
    pic: "Placeholder(Darth Vader)",
    gender: "Male",
    species: "Cyborg",
    weapon: "Lightsaber",
    forceSensative: "True",
  },
  {
    pic: "Placeholder(Luke Skywalker)",
    gender: "Male",
    species: "Human",
    weapon: "Lightsaber",
    forceSensative: "True",
  },
  {
    pic: "Placeholder(Jabba the Hutt)",
    gender: "Male",
    species: "Hutt",
    weapon: "None",
    forceSensative: "False",
  },
  {
    pic: "Placeholder(Jabba the Hutt)",
    gender: "Male",
    species: "Hutt",
    weapon: "None",
    forceSensative: "False",
  },
  {
    pic: "Placeholder(Jabba the Hutt)",
    gender: "Male",
    species: "Hutt",
    weapon: "None",
    forceSensative: "False",
  },
  {
    pic: "Placeholder(Jabba the Hutt)",
    gender: "Male",
    species: "Hutt",
    weapon: "None",
    forceSensative: "False",
  },

  {
    pic: "Placeholder(Jabba the Hutt)",
    gender: "Male",
    species: "Hutt",
    weapon: "None",
    forceSensative: "False",
  },
  {
    pic: "Placeholder(Jabba the Hutt)",
    gender: "Male",
    species: "Hutt",
    weapon: "None",
    forceSensative: "False",
  },
  {
    pic: "Placeholder(Jabba the Hutt)",
    gender: "Male",
    species: "Hutt",
    weapon: "None",
    forceSensative: "False",
  },
  {
    pic: "Placeholder(Jabba the Hutt)",
    gender: "Male",
    species: "Hutt",
    weapon: "None",
    forceSensative: "False",
  },
];

const Home = () => {
  let [guessedName, setGuessedName] = useState("xxxxxxx");
  let [amountOfGuesses, setAmountOfGuesses] = useState(0);
  const guessedChange = (e) => {
    setGuessedName(e.target.value);
    console.log(guessedName);
  };

  const guessButtonClick = (e) => {
    let newAmount = amountOfGuesses + 1;
    setAmountOfGuesses(newAmount);
  };

  return (
    <div>
      <label for="guessedName">Enter name:</label>
      <input
        type="text"
        id="guessedName"
        name="guessedName"
        onChange={guessedChange}
      ></input>
      <br />
      <button id="guessButton" type="button" onClick={guessButtonClick}>
        Guess
      </button>
      {amountOfGuesses ? <Table props={Testdata} /> : ""}
    </div>
  );
};

export default Home;
