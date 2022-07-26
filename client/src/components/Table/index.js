import React from "react";
import { useQuery } from "@apollo/client";
import styled from "styled-components";
import { QUERY_CHARACTER } from "../../utils/queries";

const RedBackground = styled.div`
  background-color: red;
`;

const GreenBackground = styled.div`
  background-color: green;
`;

const Table = ({ props1, props2 }) => {
  const { loading, data } = useQuery(QUERY_CHARACTER, {
    variables: { name: props2 },
  });
  console.log("props1", props1);
  console.log("props2", props2);
  if (loading) {
    return <div>Loading...</div>;
  }
  console.log(data.character);

  // props3([...props1, data]);

  return (
    <div>
      <table>
        <tr>
          <th>Pic</th>
          <th>Gender</th>
          <th>Species</th>
          <th>Weapon</th>
          <th>Force Sensative</th>
        </tr>
        {props1.map((val) => {
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
  );
};

export default Table;
