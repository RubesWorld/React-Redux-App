import React, { useEffect } from "react";

//redux imports
import { connect } from "react-redux";

//actions import
import { getPlayer } from "../actions/actions";

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
}) => {
  useEffect(() => {
    getPlayer();
  }, []);

  const handleClick = () => {
    getPlayer();
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
        <div className="main-container">
          <div>
            <img alt="nba player" src={PhotoUrl}></img>
            <h2>{YahooName}</h2>
            <h2>Position: {Position}</h2>
            <div>
              <p>Height: {Height} inches</p>
              <p>Weight: {Weight} pounds</p>
              <p>
                {BirthCity}, {BirthState}
              </p>
            </div>
            <button onClick={handleClick}>New Player</button>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  console.log("STATE INFO:", state);
  return {
    PlayerID: state.PlayerID,
    YahooName: state.YahooName,
    Position: state.Position,
    Height: state.Height, //inches
    Weight: state.Weight, //pounds
    BirthCity: state.BirthCity,
    BirthState: state.BirthState,
    PhotoUrl: state.PhotoUrl,
    isFetching: state.isFetching,
    error: state.error,
  };
};

export default connect(mapStateToProps, { getPlayer })(Info);
