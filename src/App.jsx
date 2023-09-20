import React, { useState } from 'react';
import IMAGES from './images/images';


function App() {
  const computerColors = ["red","orange","yellow","green","blue","indigo","violet"];
  const [target, setTarget] = useState(computerColors[Math.floor(Math.random() * 7)]);
  const [numOfGuess, setNumOfGuess] = useState(0);
  const [snarkySnark, setSnarkySnark] = useState("");
  const psychicSnark = [
    "!!!... ",
    "WOW!, your psychic abilities are amazing!",
    "You can do better, maybe after a cup of coffee.",
    "Okay maybe you are not psychic...today",
    "Perhaps you were distracted...",
    "Pick this one first next time, trust your instincts.",
    "It was only a matter of time...right?",
    "Sorry kid, you ain't got it...",
    "Dude! WTF, you only had 7 choices!",
    "You need to find a short bridge & take a long walk"
  ];

  const handleClick = (color) => {
    setNumOfGuess(numOfGuess + 1);

    if (numOfGuess > 8) {
      setSnarkySnark("You're just messing with me right now...right?");
    } else {
      setSnarkySnark(psychicSnark[numOfGuess]);
    }

    if (color === target) {
      document.getElementById("gameboard").style.backgroundColor = color;
      document.getElementById("userprompt").innerHTML = `!!!YOU GOT IT!!! Number of tries = ${numOfGuess} ${snarkySnark}, click this bar to play again`;
      document.getElementById("userprompt").style.display = "block";
      document.getElementById("userprompt").addEventListener("click", () => {
        window.location.reload();
      });
    } else {
      document.getElementById("nope").style.display = "block";
      setTimeout(() => {
        document.getElementById("nope").style.display = "none";
      }, 2000);
    }
  };

  return (
    <div className="container">
      <img id="profx" src= {IMAGES.image1} alt="Profile" />
      <div id="gameboard">
        <h1>Psychic Ability Test</h1>
        <h2 id="nope" style={{ display: 'none' }}>Nope, that's not it guess again</h2>
        <ul>
          {computerColors.map((color) => (
            <li id={color} key={color} onClick={() => handleClick(color)}>
              {color.charAt(0).toUpperCase() + color.slice(1)}
            </li>
          ))}
        </ul>
        <p>How many guesses will it take for you to guess the color I am thinking of? Click one of the buttons for your guess...</p>
        <p id="userprompt" style={{ display: 'none' }}></p>
      </div>
    </div>
  );
}

export default App;

