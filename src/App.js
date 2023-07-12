import './App.css';

import NamesComparerMS from './NamesComparerMS';
import { maleNamesArray } from './helpers/initAppHelper';

//Randomizing order
maleNamesArray.sort(function () {
  return Math.random() - 0.5;
});

/* console.log(maleNamesArray); */

function App() {
  return (
    <div className="App">
      <NamesComparerMS maleNamesArray={maleNamesArray}/>
    </div>
  );
}

export default App;
