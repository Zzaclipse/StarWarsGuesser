import React, { createContext, useContext, useState } from "react";
import { useQuery } from "@apollo/client";

import { QUERY_CHARACTERS } from "./queries";

const CharContext = createContext();

export const useCharContext = () => useContext(CharContext);
export const CharProvider = ({ children }) => {
  const { loading, data } = useQuery(QUERY_CHARACTERS);

  let [guessArray, setGuessArray] = useState(data);

  const addToArray = (char) => {
    const newArray = [...guessArray, char];

    setGuessArray(newArray);
  };
  return (
    <CharContext.Provider value={{ guessArray, addToArray }}>
      {children}
    </CharContext.Provider>
  );
};
