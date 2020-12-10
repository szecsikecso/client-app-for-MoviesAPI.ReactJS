import React from "react";

import { DeleteIcon } from "../utils/icons";
import { StyledDeleteMovieButton } from "../utils/styledItems";

const DeleteMovie = ({ onClick }) => {
  return (
    <StyledDeleteMovieButton onClick={onClick}>
      <DeleteIcon />
        Delete movie
    </StyledDeleteMovieButton>
  );
};

export default DeleteMovie;
