//the state object

const initialState = {
  data: [],
  isFetching: false,
  error: "",
};

//   data: {
//     PlayerID: null,
//     YahooName: "",
//     Position: "",
//     Height: null, //inches
//     Weight: null, //pounds
//     BirthCity: "",
//     BirthState: "",
//     PhotoUrl: "",
//     isFetching: false,
//     error: "",
//   },
// };

export const nbaReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_PLAYER_START":
      return {
        ...state,
        isFetching: true,
        error: "",
      };
    case "FETCH_PLAYER_SUCCESS":
      return {
        ...state,
        data: action.payload,
        isFetching: false,
        error: "",

        // data: {
        //   PlayerID: action.payload.PlayerID,
        //   YahooName: action.payload.YahooName,
        //   Position: action.payload.Position,
        //   Height: action.payload.Height, //inches
        //   Weight: action.payload.Weight, //pounds
        //   BirthCity: action.payload.BirthCity,
        //   BirthState: action.payload.BirthState,
        //   PhotoUrl: action.payload.PhotoUrl,
        //   isFetching: false,
        //   error: "",
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
