// import React from "react";
// import { useQuery } from "@apollo/client";
// import styled from "styled-components";
// import { QUERY_CHARACTER } from "../../utils/queries";

// const RedBackground = styled.div`
//   background-color: red;
// `;

// const GreenBackground = styled.div`
//   background-color: green;
// `;

// const Table = ({ charName, props2 }) => {
//   const { loading, data } = useQuery(QUERY_CHARACTER, {
//     variables: { name: charName },
//   });
//   console.log("props1", charName);

//   if (loading) {
//     return <div>Loading...</div>;
//   }
//   return (
//     <tr key={val.name}>
//       <td>{val.picture}</td>
//       <td>{val.gender}</td>
//       <td>{val.species}</td>
//       <td>{val.weapon}</td>
//       <td>{val.forceSensitive}</td>
//     </tr>
//   );
// };

// export default Table;
