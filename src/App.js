import React from "react";
import Greeting from "./Greeting";

function App() {
  return (
    <React.Fragment>
      <Greeting greeting="good morning" name="Avantha"/>
      <Greeting greeting="good afternooon" name="Avantha"/>
      <Greeting greeting="good evening" name="Avantha"/>
    </React.Fragment>
    );
}

export default App;
