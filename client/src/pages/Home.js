import React, { useEffect, useState } from "react";
import { useQuery as uQ } from "@apollo/client";
import styled from "styled-components";
import Table from "../components/Table";
// import AddGuess from "../utils/addGuess";
import { QUERY_CHARACTERS } from "../utils/queries";
import { useCharContext } from "../utils/CharContext";

const Home = () => {
  const YouWin = styled.div`
    font-size: 50px;
    font-family: "Goldman", cursive;
    color: yellow;
  `;
  const RedBackground = styled.td`
    background-color: red;
    padding 5px;
  `;

  const GreenBackground = styled.td`
    background-color: green;
    padding 5px;
  `;

  let [correctAnswer, setCorrectAnswer] = useState({ name: "abc" });
  const { loading, data } = uQ(QUERY_CHARACTERS);
  let [allChars, setAllChars] = useState([]);

  useEffect(() => {
    if (data) {
      console.log("data", data);
      console.log("data.chars", data.characters);
      let charArr = data.characters;
      console.log("charArr", charArr);
      setAllChars((prevArr) => [...prevArr, ...charArr]);
      console.log("allchars", allChars);
      setCorrectAnswer(
        data.characters[Math.floor(Math.random() * data.characters.length)]
      );
      console.log("CA", correctAnswer);
    }
  }, [data]);

  let [guessArray, setGuessArray] = useState([]);

  let [guessedName, setGuessedName] = useState("GUESSNAME INITIAL STATE");
  let [amountOfGuesses, setAmountOfGuesses] = useState(0);

  const guessedChange = (e) => {
    setGuessedName(e.target.value);
    console.log("GUESSEDNAME:", guessedName);
  };

  const guessButtonClick = (e) => {
    e.preventDefault();
    console.log("guessButtonClick GUESSEDNAME:", guessedName);
    console.log("allChars", allChars);
    console.log("CORRECTANSWER", correctAnswer);

    let newAmount = amountOfGuesses + 1;
    setAmountOfGuesses(newAmount);
    allChars.forEach((c) => {
      if (c.name.trim().toLowerCase() == guessedName.toLowerCase()) {
        setGuessArray([...guessArray, c]);
      }
    });
  };

  const playAgain = (e) => {
    e.preventDefault();
    setCorrectAnswer(
      data.characters[Math.floor(Math.random() * data.characters.length)]
    );
    setGuessArray([]);
    window.location.reload(false);
  };

  return guessedName.trim().toLowerCase() ==
    correctAnswer.name.toLowerCase() ? (
    <div>
      <YouWin>You Win!</YouWin>
      <button
        id="playAgainButton"
        class="btn btn-lg btn-light m-2"
        type="button"
        onClick={playAgain}
      >
        Play Again
      </button>
    </div>
  ) : (
    <div class="align-center">
      <form onSubmit={guessButtonClick}>
        <label for="guessedName" className="starwarsfont">
          Enter name:
        </label>
        <input
          type="text"
          id="guessedName"
          name="guessedName"
          onChange={guessedChange}
        ></input>
        <button
          id="guessButton"
          className="btn btn-lg btn-light m-2"
          type="submit"
        >
          Guess
        </button>
      </form>
      {amountOfGuesses >= 1 && guessArray != [] ? (
        <div>
          <table class="starwarsfont align-center">
            <tr>
              <th>Pic</th>
              <th>Gender</th>
              <th>Species</th>
              <th>Weapon</th>
              <th>Force Sensitive</th>
              <th>Birth Planet</th>
              <th>Lightside or Darkside</th>
            </tr>
            {guessArray.map((char) => {
              let cell1 = <img src={char.picture}></img>;
              let cell2 =
                char.gender == correctAnswer.gender ? (
                  <GreenBackground>{char.gender}</GreenBackground>
                ) : (
                  <RedBackground>{char.gender}</RedBackground>
                );
              let cell3 =
                char.species == correctAnswer.species ? (
                  <GreenBackground>{char.species}</GreenBackground>
                ) : (
                  <RedBackground>{char.species}</RedBackground>
                );
              let cell4 =
                char.weapon == correctAnswer.weapon ? (
                  <GreenBackground>{char.weapon}</GreenBackground>
                ) : (
                  <RedBackground>{char.weapon}</RedBackground>
                );
              let cell5 =
                char.forceSensitive == correctAnswer.forceSensitive ? (
                  <GreenBackground>{char.forceSensitive}</GreenBackground>
                ) : (
                  <RedBackground>{char.forceSensitive}</RedBackground>
                );
              let cell6 =
                char.birthPlanet == correctAnswer.birthPlanet ? (
                  <GreenBackground>{char.birthPlanet}</GreenBackground>
                ) : (
                  <RedBackground>{char.birthPlanet}</RedBackground>
                );
              let cell7 =
                char.lsds == correctAnswer.lsds ? (
                  <GreenBackground>{char.lsds}</GreenBackground>
                ) : (
                  <RedBackground>{char.lsds}</RedBackground>
                );
              return (
                <tr key={char.name}>
                  {cell1}
                  {cell2}
                  {cell3}
                  {cell4}
                  {cell5}
                  {cell6}
                  {cell7}
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
