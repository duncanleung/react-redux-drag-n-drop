import React from "react";
import { render } from "react-dom";

import styled from "styled-components";

import Board from "./components/Board";

const knightPosition = [7, 4];

const ChessBoard = styled.div`height: 300px;`;

render(
  <ChessBoard>
    <Board knightPosition={knightPosition} />
  </ChessBoard>,
  document.getElementById("root")
);
