import React, { useState } from "react";
import { useQuery as uQ } from "@apollo/client";
import styled from "styled-components";
import Table from "../components/Table";
// import AddGuess from "../utils/addGuess";
import { QUERY_CHARACTERS } from "../utils/queries";
import { useCharContext } from "../utils/CharContext";

const Home = () => {
  let [allChars, setAllChars] = useState([
    {
      name: "Darth Vader",
      picture: "Placeholder(Darth Vader)",
      gender: "Male",
      species: "Cyborg",
      weapon: "Lightsaber",
      forceSensative: "True",
    },
    {
      name: "Luke Skywalker",
      picture: "Placeholder(Luke Skywalker)",
      gender: "Male",
      species: "Human",
      weapon: "Lightsaber",
      forceSensative: "True",
    },
    {
      name: "Jabba the Hutt",
      picture: "Placeholder(Jabba the Hutt)",
      gender: "Male",
      species: "Hutt",
      weapon: "None",
      forceSensative: "False",
    },
  ]);
  let [guessArray, setGuessArray] = useState([]);

  let [guessedName, setGuessedName] = useState("GUESSNAME INITIAL STATE");
  let [amountOfGuesses, setAmountOfGuesses] = useState(0);

  const guessedChange = (e) => {
    setGuessedName(e.target.value);
    console.log("GUESSEDNAME:", guessedName);
  };

  const guessButtonClick = (e) => {
    console.log("guessButtonClick GUESSEDNAME:", guessedName);
    let newAmount = amountOfGuesses + 1;
    setAmountOfGuesses(newAmount);
    allChars.forEach((c) => {
      if (c.name.trim().toLowerCase() == guessedName.toLowerCase()) {
        console.log("you win");
      }
    });

    let newArray = [...guessArray];
    setGuessArray();
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
      {amountOfGuesses >= 1 ? (
        <div>
          <table>
            <tr>
              <th>Pic</th>
              <th>Gender</th>
              <th>Species</th>
              <th>Weapon</th>
              <th>Force Sensative</th>
            </tr>
            {guessArray.map((val) => {
              return (
                <tr>
                  <td>{val.picture}</td>
                  <td>{val.gender}</td>
                  <td>{val.species}</td>
                  <td>{val.weapon}</td>
                  <td>{val.forceSensative}</td>
                </tr>
              );
            })}
          </table>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Home;
