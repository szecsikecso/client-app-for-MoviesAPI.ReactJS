import React from "react";

import { AddIcon } from "../utils/icons";
import { StyledAddMovieButton } from "../utils/styledItems";

const AddMovie = ({ onClick }) => {
  return (
    <StyledAddMovieButton onClick={onClick}>
      <AddIcon />
        Add movie
    </StyledAddMovieButton>
  );
};

export default AddMovie;
