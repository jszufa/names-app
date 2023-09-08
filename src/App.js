import './App.css';
import { useEffect, useState } from 'react';
import ScrollIntoView from 'react-scroll-into-view';

import NamesComparerMS from './NamesComparerMS';
import Names from './Names';
import Results from './Results';
import babyboy from './img/baby-boy.png';
import create from './img/create2.png';
import sword from './img/sword.png';
import trophy from './img/trophy.png';
import speechB1 from './img/speech-bubble1.png';
import speechB2 from './img/speech-bubble22.png';
import speechB3 from './img/speech-bubble3.png';
import speechB4 from './img/speech-bubble4.png';
/* import parent from './img/parent1.jpg'; */

function App() {

  //contains array of objects: {id: , name: }
  const [namesPool, setNamesPool] = useState([]);

  const [ranking, setRanking] = useState([]);
  console.log(ranking);

  useEffect(() => {
    console.log('odpalił się useeffect')
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
          <p>Sit down WITH YOUR PARTNER and have each of you write down names they like. You can suggest as many names as you like with the minimum number of 3 names. </p>
          <Names names={namesPool} setNames={setNamesPool} />
        </container>
      </section>
      <section className='Comparison' id='duels'>
        <img src={speechB3} className='SpeechB3 Bubble' />
        <img src={speechB4} className='SpeechB4 Bubble' />

        <container className='ContentBox'>
          <img src={sword} className='CompareIcon BigIcon' />
          <h2>2. Compare names in pairs</h2>
          <p> Complete name compraisons to determine your preference ranking. Do it INDIVIDUALLY.</p>
          {/* <img src={parent} className='ComparePhoto' /> */}


          <div className='CompareWindow'>
            <h3>Person A</h3>
            <p>Click on the name that you would prefer to give to your child.</p>
            <NamesComparerMS namesPool={namesPool} setRanking={setRanking} />

          </div>
          <div className='CompareWindow'>
            <h3>Person B</h3>
            <p>Click on the name that you would prefer to give to your child.</p>
            <NamesComparerMS namesPool={namesPool} setRanking={setRanking} />
          </div>
          <ScrollIntoView selector="#results">
            <button className="ResultsBtn">
              Done  &#x2713;
            </button>
          </ScrollIntoView>
        </container>
      </section>
      <section className='ResultsSection' id='results'>
        <container className='ContentBox'>
          <img src={trophy} className='TrophyIcon BigIcon' />
          <h2>3. See your top names</h2>
          <p>See the best names TRADE-OFF suggestion for your relationship.</p>
          <Results ranking={ranking} />
        </container>

      </section>
      <footer className='Footer'>
        <p>Created by Jerzy Szufa</p>
      </footer>
    </div>
  );
}

export default App;
