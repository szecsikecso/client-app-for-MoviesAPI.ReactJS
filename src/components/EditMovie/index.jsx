import React from "react";

import { EditIcon } from "../utils/icons";
import { StyledEditMovieButton } from "../utils/styledItems";

const EditMovie = ({ onClick }) => {
  return (
    <StyledEditMovieButton onClick={onClick}>
      <EditIcon />
        Edit movie
    </StyledEditMovieButton>
  );
};

export default EditMovie;
