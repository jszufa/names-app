import './App.css';
import { useEffect, useState } from 'react';

import NamesComparerMS from './NamesComparerMS';
import Names from './Names';
import Results from './Results';
import babyboy from './img/baby-boy.png';
import create from './img/create2.png';
import sword from './img/sword.png';
import trophy from './img/trophy.png';

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
        <p>Choose a name for your baby without a fight</p>
        <img className='Baby' src={babyboy} />
      </header>
      <section className='Names-pool'>
        <container className='ContentBox'>
          <img src={create} className='CreateIcon BigIcon' />
          <h2>1. Create pool of names</h2>
          <p>Together with your partner, create a list of names from which you want to choose. Each of you can enter your name suggestions here. To remove a name from the pool just click on it.</p>
          <Names names={namesPool} setNames={setNamesPool} />
          <p>Cross out dealbreakers. Great! Your pool of names is almost ready. Now each of you can look at it again and cross out few names (can be zero) you are 100% sure you won't name your child. </p>
        </container>
      </section>
      <section className='Comparison' id='duels'>
        <container className='ContentBox'>
          <img src={sword} className='CompareIcon BigIcon' />
          <h2>2. Duels of names</h2>
          <p> Complete a series of name compraisons to determine your preference ranking. In this part of the proces you will individually choose which name from the dispalyed pair you'd prefer to give to your child. </p>
          <p>First, person A performs a series of comparisons in the window below. Then person B performs their own series of comparisons in the second window.</p>


          <div className='CompareWindow'>
            <h3>Person A</h3>
            <NamesComparerMS namesPool={namesPool} setRanking={setRanking} />
            <p>Click on the name that you would prefer to give to your child.</p>
          </div>
          <div className='CompareWindow'>
            <h3>Person B</h3>
            <NamesComparerMS namesPool={namesPool} setRanking={setRanking} />
            <p>Click on the name that you would prefer to give to your child.</p>
          </div>
        </container>
      </section>
      <section className='ResultsSection'>
        <container className='ContentBox'>
          <img src={trophy} className='TrophyIcon BigIcon' />
          <h2>3. See your top names</h2>
          <p> The lower the score the better!</p>
          <p> If, for example, "Catlyn" got 3 points, it means that the name was in 3rd place for the person who likes the name less. In this type of decision there is usually one side that is less satisfied. This ranking maximizes the satisfaction of this person. </p>
        </container>
        <Results ranking={ranking} />
      </section>
      <footer className='Footer'>
        <p>Created by Jerzy Szufa</p>
      </footer>
    </div>
  );
}

export default App;
