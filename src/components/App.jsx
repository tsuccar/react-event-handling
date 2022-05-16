import React, { useState } from "react";

function App() {
  const [headingText, setHeadingText] = useState("Hello");
  const [isMouseOver, setMouseOver] = useState(false);

  function handleClick() {
    setHeadingText("Submitted");
  }

  function handleMouseOver() {
    setMouseOver(true);
  }

  function handleMouseOut() {
    setMouseOver(false);
  }
  //   Perhaps you can finish the alternative way of combinging the two togetther ????

  //  const [state, setState] = useState({
  //     headingText: "Hello",
  //     bgColor: "white"
  //   });

  // function handleClick ()
  // {
  //   setState({headingText: "Submitted"})
  // }

  // function changeColorBlack()
  // {
  //   setState({bgColor: "black"})
  // }
  // function changeColorWhite()
  // {
  //   setState({bgColor: "white"})
  //  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: isMouseOver ? "black" : "white" }}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        onClick={handleClick}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
