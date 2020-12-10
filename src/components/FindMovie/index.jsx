import React, { useState } from "react";

import { StyledSearchButton, StyledSearchInput, StyledSearchLabel } from "../utils/styledItems";
import { SearchIcon } from "../utils/icons";

// Passes query entered in Text Input into onSubmit, which takes in modified URL query as param and sends it to axiosFetch hook.
const FindMovie = ({ inline, searchQuery, handleSearchQuery, emptySearchQuery }) => {
  const [query, setQuery] = useState(searchQuery);

  const clearEmptyQuery = () => {
    emptySearchQuery.current = false;
  }

  const handleSearchSubmit = (event, query, handleSearchQuery) => {
    handleSearchQuery(query);
    event.preventDefault();
  };

  if (emptySearchQuery.current) {
    handleSearchQuery("");
  }

  return (
    <form
      inlineform={inline}
      onSubmit={(e) => handleSearchSubmit(e, query, handleSearchQuery)}
    >
      <StyledSearchLabel htmlFor="search">Find your movie</StyledSearchLabel>
      <StyledSearchInput
        type="text"
        placeholder="What do you want to watch?"
        name="search"
        autoComplete="off"
        inlineform={inline}
        value={emptySearchQuery.current ? "" : query}
        onChange={(event) => { clearEmptyQuery(); setQuery(event.target.value); }}
        required
      />
      <StyledSearchButton type="submit" inlineform={inline}>
        Search
        <SearchIcon />
      </StyledSearchButton>
    </form>
  );
};

export default FindMovie;
