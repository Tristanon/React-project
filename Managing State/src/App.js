import corgi from "./corgi.jpg";
import "./App.css";
import { useState } from "react";

const App = () => {
  const [LikeAmount, setLikeAmount] = useState(0)
  const Liked = () => {
    setLikeAmount(LikeAmount + 1);
  };
  return (
    <div className="container">
      <h2>Like this photo!</h2>
      <img src={corgi} alt="Corgi"></img>
      <div id="container">
        <p>Amount of likes: </p>
        <p>{LikeAmount}</p>
      </div>
      <button id="like-btn" onClick={() => Liked()}>Like</button>
    </div>
  );
};

export default App;
