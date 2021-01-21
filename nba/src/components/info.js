import React, { useEffect, useState } from "react";
import SearchForm from "./SearchForm";

//redux imports
import { connect } from "react-redux";

//actions import
import { getPlayer } from "../actions/actions";

//import styles
import { TextArea } from "@material-ui/core";

const Info = ({
  PlayerID,
  YahooName,
  Position,
  Height,
  Weight,
  BirthCity,
  BirthState,
  PhotoUrl,
  isFetching,
  error,
  getPlayer,
  searchTerm,
  data,
}) => {
  const [filteredPlayer, setFilteredPlayer] = useState(data);

  useEffect(() => {
    getPlayer();
  }, []);

  useEffect(() => {
    let newArray = data.filter((specificPlayer) => {
      return specificPlayer.YahooName.toLowerCase().includes(
        searchTerm.toLowerCase()
      );
    });
    setFilteredPlayer(newArray);
  }, [data, searchTerm]);

  const submitHandler = (e) => {
    e.preventDefault();
  };

  if (error) {
    return <h2>We got an error: {error}</h2>;
  }

  if (isFetching) {
    return <h2>Fetching Quote For You!</h2>;
  }

  return (
    <>
      <div className="App">
        <SearchForm submitHandler={submitHandler} />

        <div className="player-div">
          {filteredPlayer.map((players, i) => {
            return (
              <div className="tab-container" key={i}>
                <div className="image-container">
                  <img alt="nba player" src={players.PhotoUrl}></img>
                </div>
                <div className="info-container">
                  <h2>{players.YahooName}</h2>
                  <h2>Position: {players.Position}</h2>
                  <div className="small-text">
                    <p>Height: {players.Height} inches</p>
                    <p>Weight: {players.Weight} pounds</p>
                    <p>
                      Hometown: {players.BirthCity}, {players.BirthState}
                    </p>
                  </div>
                </div>
                {/* <button onClick={handleClick}>New Player</button> */}
              </div>
            );
          })}
          {/* Close map */}
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  console.log("STATE INFO:", state);
  return {
    data: state.data,
    searchTerm: state.searchTerm,
  };
};

export default connect(mapStateToProps, { getPlayer })(Info);
