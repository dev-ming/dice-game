import { useState } from "react";
import Board from "./Board";
import Button from "./Button";
import "./App.css";
import logo from "./assets/logo.png";

function random(n) {
  return Math.ceil(Math.random() * n);
}

function App() {
  const [myHistory, setMyHistory] = useState([]);
  const [otherHistory, setOtherHistory] = useState([]);

  const handleRollClick = () => {
    const nextMyNum = random(6);
    const nextOtherNum = random(6);

    setMyHistory([...myHistory, nextMyNum]);
    setOtherHistory([...otherHistory, nextOtherNum]);

    setWinner();
  };

  const handleClearClick = () => {
    setMyHistory([]);
    setOtherHistory([]);
  };

  let myClassName = "Board";
  let otherClassName = "Board";

  const setWinner = () => {
    let myClassNameTemp = "Board";
    let otherClassNameTemp = "Board";
    if (
      myHistory[myHistory.length - 1] > otherHistory[otherHistory.length - 1]
    ) {
      myClassNameTemp += " Board-winner";
    } else if (
      myHistory[myHistory.length - 1] < otherHistory[otherHistory.length - 1]
    ) {
      otherClassNameTemp += " Board-winner";
    }
    myClassName = myClassNameTemp;
    otherClassName = otherClassNameTemp;
  };

  return (
    <div className="App">
      <div>
        <img class="App-logo" src={logo} alt="주사위게임 로고" />
        <h1 class="App-title">Dice Game</h1>
      </div>
      <div>
        <Button className="App-button" color="blue" onClick={handleRollClick}>
          던지기
        </Button>
        <Button className="App-button" color="red" onClick={handleClearClick}>
          처음부터
        </Button>
      </div>
      <div className="App-boards">
        <Board
          className="App-board"
          a={myClassName}
          name="나"
          color="blue"
          gameHistory={myHistory}
        />
        <Board
          className="App-board"
          a={otherClassName}
          name="상대"
          color="red"
          gameHistory={otherHistory}
        />
      </div>
    </div>
  );
}

export default App;
