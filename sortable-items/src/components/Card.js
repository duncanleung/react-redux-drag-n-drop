import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { DragSource, DropTarget } from "react-dnd";

import ItemTypes from "../ItemTypes";

const CardWrapper = styled.div`
  width: 100px;
  border: 1px dashed gray;
  padding: 0.5rem 1rem;
  margin-bottom: 0.5rem;
  background-color: white;
  cursor: move;
  opacity: ${props => (props.isDragging ? 0 : 1)};
`;

const cardSource = {
  beginDrag(props) {
    return {
      id: props.id,
      index: props.index
    };
  }
};

const cardTarget = {
  hover(props, monitor, component) {
    const dragIndex = monitor.getItem().index;
    const hoverIndex = props.index;

    //Don't replace items with itself
    if (dragIndex === hoverIndex) {
      return;
    }

    props.moveCard(dragIndex, hoverIndex);

    // Note: we're mutating the monitor item here!
    // Generally it's better to avoid mutations,
    // but it's good here for the sake of performance
    // to avoid expensive index searches.
    monitor.getItem().index = hoverIndex;
  }
};

const Card = props => {
  const { id, text, isDragging, connectDragSource, connectDropTarget } = props;

  return connectDragSource(
    connectDropTarget(
      <div>
        <CardWrapper isDragging={isDragging}>{text}</CardWrapper>
      </div>
    )
  );
};

Card.propTypes = {
  id: PropTypes.any.isRequired,
  text: PropTypes.string.isRequired
};

export default DropTarget(ItemTypes.CARD, cardTarget, connect => ({
  connectDropTarget: connect.dropTarget()
}))(
  DragSource(ItemTypes.CARD, cardSource, (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }))(Card)
);
