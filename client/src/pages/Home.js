import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import styled from "styled-components";
import Table from "../components/Table";
// import AddGuess from "../utils/addGuess";
import { QUERY_CHARACTER } from "../utils/queries";

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
  let [guessedName, setGuessedName] = useState("GUESSNAME INITIAL STATE");
  let [amountOfGuesses, setAmountOfGuesses] = useState(0);
  let [guessArray, setGuessArray] = useState([]);
  let [singleGuessObj, setSingleGuessObj] = useState({});

  const guessedChange = (e) => {
    setGuessedName(e.target.value);
    console.log("GUESSEDNAME:", guessedName);
  };

  const guessButtonClick = (e) => {
    console.log("guessButtonClick GUESSEDNAME:", guessedName);
    let newAmount = amountOfGuesses + 1;
    setAmountOfGuesses(newAmount);
    // const charObj = useQuery(QUERY_CHARACTER, {
    //   variables: { name: guessedName },
    // });
    // console.log("QUERYCHAR", charObj);
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
      {amountOfGuesses ? (
        <Table
          props1={guessArray}
          props2={guessedName}
          props3={setGuessArray}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default Home;
