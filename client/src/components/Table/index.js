import React from "react";
import { useQuery } from "@apollo/client";
import styled from "styled-components";

const RedBackground = styled.div`
  background-color: red;
`;

const GreenBackground = styled.div`
  background-color: green;
`;

const Table = ({ props }) => {
  console.log(props);
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
        {props.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.pic}</td>
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
