import axios from "axios";

export const FETCH_PLAYER_START = "FETCH_PLAYER_START";
export const FETCH_PLAYER_SUCCESS = "FETCH_PLAYER_SUCCESS";
export const FETCH_PLAYER_FAIL = "FETCH_PLAYER_FAIL";

// export const getPlayer = () => {
//   return (dispatch => {
//     dispatch({ type: FETCH_PLAYER_START });
//     setTimeout(() => {
//       dispatch({ type: FETCH_PLAYER_SUCCESS, payload: "Blah" });
//       setTimeout(()=>{
//           dispatch({type: FETCH_PLAYER_FAIL,payload: "Fail"})
//       }, 3000)
//     }, 3000);
//   };
// };

//option 1: randomize the last 4 digits that i am aware of
//option 2: bring in entire array and pull the specific index
// option 3: bring in entire array and add search function!

export const getPlayer = () => (dispatch) => {
  //   const random = Math.floor(Math.random() * 9) + 1;
  //   console.log("RANDOM", Math.random());
  dispatch({ type: FETCH_PLAYER_START });
  console.log("fired");
  axios
    .get(
      `https://api.sportsdata.io/v3/nba/scores/json/Players?key=4c1814384c664dc9ba29dad00b0b44ff`
    )
    .then((res) => {
      console.log("response:", res.data);
      dispatch({ type: FETCH_PLAYER_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: FETCH_PLAYER_FAIL, payload: err.response.code });
    });
};
