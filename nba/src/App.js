import React from "react";

function App() {
  const dummyData = {
    FirstName: "Lebron",
    LastName: "James",
    Position: "SF",
    Height: 81, //inches
    Weight: 250, //pounds
    BirthCity: "Akron",
    BirthState: "OH",
    PhotoUrl:
      "https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nba/low-res/20000571.png",
  };
  return (
    <>
      <div className="App">
        <div className="main-container">
          <div>
            <img src={dummyData.PhotoUrl}></img>
            <h2>
              {dummyData.FirstName} {dummyData.LastName}
            </h2>
            <h2>{dummyData.Position}</h2>
            <h3>
              {dummyData.FirstName} {dummyData.LastName}
            </h3>
            <div>
              <p>{dummyData.Height}</p>
              <p>{dummyData.Weight}</p>
              <p>{dummyData.BirthCity}</p>
              <p>{dummyData.BirthState}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
