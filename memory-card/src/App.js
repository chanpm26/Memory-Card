import Ravens from './Images/Baltimore-Ravens-logo.png'
import Bengals from './Images/Bengals.png'
import Broncos from './Images/Broncos.png'
import Bills from './Images/buffalo-bills-logo-transparent.png'
import Cowboys from './Images/dallas-cowboys-logo-22.png'
import Eagles from './Images/Eagles.png'
import Falcons from './Images/Falcons.png'
import Colts from './Images/Colts.png'
import Chiefs from './Images/Chiefs.png'
import Vikings from './Images/minnesota-vikings-logo-transparent.png'
import Patriots from './Images/Patriots.png'
import Giants from './Images/Giants.png'
import Packers from './Images/Packers.png'
import Steelers from './Images/Steelers.png'
import Buccs from './Images/Buccs.png'
import Commanders from './Images/Commanders.png'
import './App.css';
import {useState, useEffect} from 'react'
import Card from './Components/Card'

let lastClicked = []

function App() {

  const [currentScore, setCurrentScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)
  
  const updateScore = () => {
    setCurrentScore((prevScore) => prevScore + 1)
  }

  const updateBestScore = () => {
    if (currentScore > bestScore) {
      setBestScore(currentScore)
    }
  }

  const playGame = (event) => {
    if (lastClicked.includes(event.target.id)) {
      updateBestScore();
      setCurrentScore(0);
      lastClicked = [];
    } else {
      updateScore();
      updateBestScore();
      lastClicked.push(event.target.id)
    }
  }

  const [cardArray, setCardArray] = useState([
    <Card title="Baltimore Ravens" image={Ravens} onClick={playGame} alt="NFL team, Baltimore Ravens, logo"/>,
    <Card title="Cincinnati Bengals" image={Bengals} onClick={playGame} alt="NFL team, Cincinnati Bengals, logo"/>,
    <Card title="Denver Broncos" image={Broncos} onClick={playGame} alt="NFL team, Denver Broncos, logo"/>,
    <Card title="Buffalo Bills" image={Bills} onClick={playGame} alt="NFL team, Buffalo Bills, logo"/>,
    <Card title="Dallas Cowboys" image={Cowboys} onClick={playGame} alt="NFL team, Dallas Cowboys, logo"/>,
    <Card title="Philadelphia Eagles" image={Eagles} onClick={playGame} alt="NFL team, Philadelphia Eagles, logo"/>,
    <Card title="Atlanta Falcons" image={Falcons} onClick={playGame} alt="NFL team, Atlanta Falcons, logo"/>,
    <Card title="Indianapolis Colts" image={Colts} onClick={playGame} alt="NFL team, Indianapolis Colts, logo"/>,
    <Card title="Kansas City Chiefs" image={Chiefs} onClick={playGame} alt="NFL team, Kansas City Chiefs, logo"/>,
    <Card title="Minnesota Vikings" image={Vikings} onClick={playGame} alt="NFL team, Minnesota Vikings, logo"/>,
    <Card title="New England Patriots" image={Patriots} onClick={playGame} alt="NFL team, New England Patriots, logo"/>,
    <Card title="New York Giants" image={Giants} onClick={playGame} alt="NFL team, New York Giants, logo"/>,
    <Card title="Green Bay Packers" image={Packers} onClick={playGame} alt="NFL team, Green Bay Packers, logo"/>,
    <Card title="Pittsburgh Steelers" image={Steelers} onClick={playGame} alt="NFL team, Pittsburgh Steelers, logo"/>,
    <Card title="Tampa Bay Buccaneers" image={Buccs}  onClick={playGame} alt="NFL team, Tampa Bay Buccaneers, logo"/>,
    <Card title="Washington Commanders" image={Commanders} onClick={playGame} alt="NFL team, Washington Commanders, logo"/>
    ])


  const randomizeArray = (array) => {
    setCardArray(array.map(value => ({ value, sort: Math.random() })).sort((a, b) => a.sort - b.sort).map(({ value }) => value))
  }

  useEffect(() => {
    updateBestScore();
    randomizeArray(cardArray)
  }, [currentScore])

  return (
    <div className="App">
      <p>Current Score: {currentScore}  || Best Score: {bestScore}</p>
        <h1 id="gameTitle">Don't Pick The Same Card Twice</h1>
      <div className='cardContainer'>
        <div className='cards'>
          {cardArray}
        </div>
      </div>
    </div>
  );
}

export default App;
