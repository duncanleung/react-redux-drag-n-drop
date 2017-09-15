import React, { Component } from "react";
import styled from "styled-components";
import update from "immutability-helper";
import { DragDropContext } from "react-dnd";
import HTML5backend from "react-dnd-html5-backend";

import Card from "./components/Card";

const ContainerWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: [
        {
          id: 1,
          text: "Write a cool JS library"
        },
        {
          id: 2,
          text: "Make it generic enough"
        },
        {
          id: 3,
          text: "Write README"
        },
        {
          id: 4,
          text: "Create some examples"
        },
        {
          id: 5,
          text: "Spam in Twitter"
        },
        {
          id: 6,
          text: "?????????? More stuff"
        },
        {
          id: 7,
          text: "PROFIT PROFIT "
        }
      ]
    };

    this.moveCard = this.moveCard.bind(this);
  }

  moveCard(dragIndex, hoverIndex) {
    const { cards } = this.state;
    const draggedCard = cards[dragIndex];

    this.setState(
      update(this.state, {
        cards: {
          $splice: [[dragIndex, 1], [hoverIndex, 0, draggedCard]]
        }
      })
    );
  }

  render() {
    const { cards } = this.state;

    return (
      <ContainerWrapper>
        {cards.map((card, index) => (
          <Card
            key={card.id}
            index={index}
            id={card.id}
            text={card.text}
            moveCard={this.moveCard}
          />
        ))}
      </ContainerWrapper>
    );
  }
}

export default DragDropContext(HTML5backend)(App);
