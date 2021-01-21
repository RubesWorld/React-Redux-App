const initialState = {
  PlayerID: 20000571,
  YahooName: "Lebron James",
  Position: "SF",
  Height: 81, //inches
  Weight: 250, //pounds
  BirthCity: "Akron",
  BirthState: "OH",
  PhotoUrl:
    "https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nba/low-res/20000571.png",
  isFetching: false,
  error: "",
};

export const nbaReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_PLAYER_START":
      return {
        ...state,
        isFetching: true,
        error: "",
        PlayerID: null,
      };
    case "FETCH_PLAYER_SUCCESS":
      return {
        ...state,
        isFetching: false,
        error: "",
        PlayerID: action.payload,
      };
    case "FETCH_PLAYER_FAIL":
      return {
        ...state,
        error: action.payload,
        isFetching: false,
      };
    default:
      return state;
  }
};
