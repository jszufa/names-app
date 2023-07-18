import './App.css';

import NamesComparerMS from './NamesComparerMS';
import Names from './Names';
import { maleNamesArray } from './helpers/initAppHelper';

//Randomizing order
maleNamesArray.sort(function () {
  return Math.random() - 0.5;
});

/* console.log(maleNamesArray); */

function App() {
  return (
    <div className="App">
      <section className='Names-pool'>
        <h2>1. Create pool of names</h2>
        <p>Together with your partner, create a list of names from which you want to choose. Each of you can enter your name suggestions here. To remove a name from the pool just click on it.</p>
        <Names />
      </section>
      <section className='Dealbreakers'>
        <h2>2. Cross out dealbreakers</h2>
        <p>Great! Your pool of names is almost ready. Now each of you can look at it again and cross out few names (can be zero) you are 100% sure you won't name your child. </p>
      </section>
      <section className='Comparison'>
        <h2>3. Duels of names</h2>
        <p> Complete a series of name compraisons to determine your preference ranking. In this part of the proces you will individually choose which name from the dispalyed pair you'd prefer to give your child. </p>
        <p>First, person A performs a series of comparisons in the window below. Then person B performs their own series of comparisons in the second window.</p>
        
        <div className='CompareWindow'>
          <h3>Person A</h3>
          <NamesComparerMS maleNamesArray={maleNamesArray} />
          <p>Click on the name that you would prefer to give to your child.</p>
        </div>
        <div className='CompareWindow'>
          <h3>Person B</h3>
          <NamesComparerMS maleNamesArray={maleNamesArray} />
          <p>Click on the name that you would prefer to give to your child.</p>
        </div>
      </section>
    </div>
  );
}

export default App;
