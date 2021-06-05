import React, { useState } from "react";

function App() {

  setInterval(updateTime, 1000);
  
  let time = new Date().toLocaleTimeString();

  const [newTime, setTime] = useState(time);

  function updateTime() {
    const now = new Date().toLocaleTimeString();
    setTime(now);
  }


  return (
    <div className="container">
      <h1>{newTime}</h1>
      <button onClick={updateTime}>Get Time</button>
    </div>
  );
}

export default App;
