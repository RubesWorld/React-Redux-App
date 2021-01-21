const initialState = {
  PlayerID: null,
  YahooName: "",
  Position: "",
  Height: null, //inches
  Weight: null, //pounds
  BirthCity: "",
  BirthState: "",
  PhotoUrl: "",
  isFetching: false,
  error: "",
};

// const initialState = {
//   PlayerID: 20000571,
//   YahooName: "Lebron James",
//   Position: "SF",
//   Height: 81, //inches
//   Weight: 250, //pounds
//   BirthCity: "Akron",
//   BirthState: "OH",
//   PhotoUrl:
//     "https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nba/low-res/20000571.png",
//   isFetching: false,
//   error: "",
// };

export const nbaReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_PLAYER_START":
      return {
        ...state,
        PlayerID: null,
        YahooName: "",
        Position: "",
        Height: null, //inches
        Weight: null, //pounds
        BirthCity: "",
        BirthState: "",
        PhotoUrl: "",
        isFetching: true,
        error: "",
      };
    case "FETCH_PLAYER_SUCCESS":
      return {
        ...state,
        PlayerID: action.payload.PlayerID,
        YahooName: action.payload.YahooName,
        Position: action.payload.Position,
        Height: action.payload.Height, //inches
        Weight: action.payload.Weight, //pounds
        BirthCity: action.payload.BirthCity,
        BirthState: action.payload.BirthState,
        PhotoUrl: action.payload.PhotoUrl,
        isFetching: false,
        error: "",
      };
    case "FETCH_PLAYER_FAIL":
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
