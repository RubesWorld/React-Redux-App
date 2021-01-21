import React from "react";
import { connect } from "react-redux";

import { handleChanges } from "../actions/actions";

const SearchForm = (props) => {
  return (
    <form>
      <input
        type="text"
        placeholder="Search NBA Player..."
        onChange={(e) => props.handleChanges(e)}
        value={props.YahooName}
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
