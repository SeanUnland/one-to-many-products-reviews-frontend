import React from "react";
import Display from "./Component/display";
import "./App.css";

function App() {
  const [product, setProduct] = React.useState({});
  return (
    <div className="App">
      <Display />
    </div>
  );
}

export default App;
