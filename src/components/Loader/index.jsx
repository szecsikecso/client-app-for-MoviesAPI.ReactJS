import React from "react";
import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";
import { Spinner5 } from "styled-icons/icomoon";

import ErrorBoundary from "../ErrorBoundary";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const scale = keyframes`
   0% { transform: scale(1); }
    50% { transform: scale(1.2); }
    100% { transform: scale(1); }
`;

const Container = styled.div`
  position: fixed;
  animation: ${scale} 1.5s linear infinite;
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  color: #7ca579;
`;

const Spinner = styled(Spinner5)`
  animation: ${rotate} 1.25s linear infinite;
  height: 4rem;
  width: 4rem;
`;

const Loader = (props) => {
  return (
    <ErrorBoundary>
      <Container>
        <Spinner />
        <h1>{props.title}</h1>
      </Container>
    </ErrorBoundary>

  );
};

Loader.propTypes = {
  title: PropTypes.string,
};

Loader.defaultProps = {
  title: "Loading...",
};

export default Loader;
