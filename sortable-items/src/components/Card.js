import React from "react";
import PropTypes from "prop-types";

import styled from "styled-components";

const CardWrapper = styled.div`
  width: 100px;
  border: 1px dashed gray;
  padding: 0.5rem 1rem;
  margin-bottom: 0.5rem;
  background-color: white;
  cursor: move;
`;

const Card = props => {
  const { id, text } = props;

  return <CardWrapper>{text}</CardWrapper>;
};

Card.propTypes = {
  id: PropTypes.any.isRequired,
  text: PropTypes.string.isRequired
};

export default Card;
