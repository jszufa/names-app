import './App.css';

import NamesComparer from './NamesComparer';
import NamesComparerMS from './NamesComparerMS';

/* let maleNamesArray = ["Ignacy", "Bernard", "Hugon", "Antoni", "Tadeusz", "Jan", "Stanisław", "Łukasz", "Marcin"]; */
let maleNamesArray = ["Ignacy", "Bernard", "Stanisław", 'Jan', 'Teo', 'Michał', 'Marcin', 'Bernard', 'Jacek', 'Pafnucy', 'Bartosz', 'Damian', 'Szymon'];
let initialWeightsArray = maleNamesArray.map(name => [name, 0]);


const createStaticCompareblePairs = (array) => {

  let staticCompareArray = [];

  for (let x = 0; x < array.length; x++) {
    for (let n = 1; n < array.length - x; n++) {
      staticCompareArray.push([array[x], array[x + n]]);
    }
  }

  return staticCompareArray;
}

let newCompareArray = createStaticCompareblePairs(maleNamesArray);
//console.log(newCompareArray);


function App() {
  return (
    <div className="App">
      <NamesComparer maleNamesArray={maleNamesArray} initialWeightsArray={initialWeightsArray} compareArray={newCompareArray}/>
      <NamesComparerMS maleNamesArray={maleNamesArray} initialWeightsArray={initialWeightsArray} compareArray={newCompareArray}/>
    </div>
  );
}

export default App;
