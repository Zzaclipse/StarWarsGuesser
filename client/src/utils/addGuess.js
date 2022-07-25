import { useQuery } from "@apollo/client";

import { QUERY_CHARACTER } from "../utils/queries";

const AddGuess = (oldGuesses, newGuess) => {
  const { name, weapon } = useQuery(QUERY_CHARACTER, {
    variables: { name: newGuess },
  });
  console.log("QUERYCHAR", name, weapon);
  return name, weapon;
  //   let newArrayWithNewGuess = [...oldGuesses, queryChar];

  //   return newArrayWithNewGuess;
};

export default AddGuess;
