import './App.css';
import { useEffect, useState } from 'react';

import NamesComparerMS from './NamesComparerMS';
import NamesComparerMSsecond from './NamesComparerMSsecond';
import Names from './Names';
import Results from './Results';

import babyboy from './img/baby-boy.png';
import create from './img/create2.png';
import sword from './img/sword.png';

import speechB1 from './img/speech-bubble1.png';
import speechB2 from './img/speech-bubble22.png';
import speechB3 from './img/speech-bubble3.png';
import speechB4 from './img/speech-bubble4.png';

function App() {

  //contains array of objects: {id: , name: }
  const [namesPool, setNamesPool] = useState([]);

  const [ranking, setRanking] = useState([]);

  useEffect(() => {
    if (sessionStorage.getItem('names')) {
      setNamesPool(JSON.parse(sessionStorage.getItem('names')))
    }
  }, []);

  return (
    <div className='App'>

      <header className='Header'>
        <h1>Choose together</h1>
        <p>Choose a name for your baby in a very... peaceful way</p>
        <img className='Baby' src={babyboy} />
      </header>

      <section className='Names-pool'>
        <img src={speechB1} className='SpeechB1 Bubble' />
        <img src={speechB2} className='SpeechB2 Bubble' />
        <container className='ContentBox'>
          <img src={create} className='CreateIcon BigIcon' />
          <h2>1. Create pool of names</h2>
          <p>Sit down WITH YOUR PARTNER and have each of you write down names you like. You can suggest as many names as you like with the minimum number of 3 names. </p>
          <Names names={namesPool} setNames={setNamesPool} />
        </container>
      </section>

      <section className='Comparison' id='duels'>
        <img src={speechB3} className='SpeechB3 Bubble' />
        <img src={speechB4} className='SpeechB4 Bubble' />
        <container className='ContentBox'>
          <img src={sword} className='CompareIcon BigIcon' />
          <h2>2. Compare names in pairs</h2>
          <p> Complete name comparisons to determine your preference ranking. Do it INDIVIDUALLY.</p>
          <div className='CompareWindow'>
            <h3>Person A</h3>
            <p>Click on the name that you would prefer to give to your child.</p>
            <NamesComparerMS namesPool={namesPool} setRanking={setRanking} />
          </div>
          <div className='CompareWindow'>
            <h3>Person B</h3>
            <p>Click on the name that you would prefer to give to your child.</p>
            <NamesComparerMSsecond namesPool={namesPool} setRanking={setRanking} />
          </div>
        </container>
      </section>

      <Results ranking={ranking} />

      <footer className='Footer'>
        
        <p>Created by <a className='PortfolioLink' href='https://github.com/jszufa'>Jerzy Szufa</a></p>
        <p className='ContactP'>Contact me at: jerzy.szufa(at)gmail.com</p>
        <a href="https://www.flaticon.com/free-icons/baby" title="baby icons">Baby icons created by Flat Icons - Flaticon</a>
        <a href="https://www.flaticon.com/free-icons/create" title="create icons">Create icons created by Freepik - Flaticon</a>
        <a href="https://www.flaticon.com/free-icons/duel" title="duel icons">Duel icons created by Freepik - Flaticon</a>
        <a href="https://www.flaticon.com/free-icons/award" title="award icons">Award icons created by Freepik - Flaticon</a>
        <a href="https://www.flaticon.com/free-icons/speech-bubble" title="speech bubble icons">Speech bubble icons created by Freepik - Flaticon</a>
        <a href="https://www.flaticon.com/free-icons/chat" title="chat icons">Chat icons created by srip - Flaticon</a>

      </footer>
    </div>
  );
}

export default App;