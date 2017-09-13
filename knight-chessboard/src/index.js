import React from "react";
import { render } from "react-dom";
import styled from "styled-components";

import Board from "./components/Board";

import { observe } from "./Game";

const ChessBoard = styled.div`height: 300px;`;

observe(knightPosition =>
  render(
    <ChessBoard>
      <Board knightPosition={knightPosition} />
    </ChessBoard>,
    document.getElementById("root")
  )
);
