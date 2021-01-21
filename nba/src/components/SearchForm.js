import React from "react";
import { connect } from "react-redux";

//import styles
import { TextField } from "@material-ui/core";

import { handleChanges } from "../actions/actions";

const SearchForm = (props) => {
  return (
    <form onSubmit={props.submitHandler}>
      <TextField
        type="text"
        placeholder="Search NBA Player..."
        onChange={(e) => props.handleChanges(e)}
        value={props.YahooName}
        variant="outlined"
      />
      {/* <button>Search</button> */}
    </form>
  );
};

const mapStateToProps = (state) => {
  return {
    searchTerm: state.searchTerm,
  };
};

export default connect(mapStateToProps, { handleChanges })(SearchForm);
