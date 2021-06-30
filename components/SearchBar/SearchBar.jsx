import { Container, InputBase } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import React from "react";
import useStyles from "../../styles/style.js"

const SearchBar = ({value, changeInput}) => {
    const classes = useStyles()
  return (
    <Container maxWidth="sm">
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          placeholder="Search…"
          value={value}
          onChange={changeInput}
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ "aria-label": "search" }}
        />
      </div>
    </Container>
  );
};

export default SearchBar;
