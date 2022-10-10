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

function App() {

  const [currentScore, setCurrentScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)


  return (
    <div className="App">
        <h1 id="gameTitle">Memory Card Game</h1>
      <div className='cardContainer'>
        <div className='cards'>
          <Card title="Baltimore Ravens" image={Ravens} alt="NFL team, Baltimore Ravens, logo"/>
          <Card title="Cincinnati Bengals" image={Bengals} alt="NFL team, Cincinnati Bengals, logo"/>
          <Card title="Denver Broncos" image={Broncos} alt="NFL team, Denver Broncos, logo"/>
          <Card title="Buffalo Bills" image={Bills} alt="NFL team, Buffalo Bills, logo"/>
          <Card title="Dallas Cowboys" image={Cowboys} alt="NFL team, Dallas Cowboys, logo"/>
          <Card title="Philadelphia Eagles" image={Eagles} alt="NFL team, Philadelphia Eagles, logo"/>
          <Card title="Atlanta Falcons" image={Falcons} alt="NFL team, Atlanta Falcons, logo"/>
          <Card title="Indianapolis Colts" image={Colts} alt="NFL team, Indianapolis Colts, logo"/>
          <Card title="Kansas City Chiefs" image={Chiefs} alt="NFL team, Kansas City Chiefs, logo"/>
          <Card title="Minnesota Vikings" image={Vikings} alt="NFL team, Minnesota Vikings, logo"/>
          <Card title="New England Patriots" image={Patriots} alt="NFL team, New England Patriots, logo"/>
          <Card title="New York Giants" image={Giants} alt="NFL team, New York Giants, logo"/>
          <Card title="Green Bay Packers" image={Packers} alt="NFL team, Green Bay Packers, logo"/>
          <Card title="Pittsburgh Steelers" image={Steelers} alt="NFL team, Pittsburgh Steelers, logo"/>
          <Card title="Tampa Bay Buccaneers" image={Buccs} alt="NFL team, Tampa Bay Buccaneers, logo"/>
          <Card title="Washington Commanders" image={Commanders} alt="NFL team, Washington Commanders, logo"/>
        </div>
      </div>
    </div>
  );
}

export default App;
