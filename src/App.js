import './App.css';

import NamesComparer from './NamesComparer';

let maleNamesArray = ["Ignacy", "Bernard", "Hugon", "Antoni", "Tadeusz", "Jan", "Stanisław", "Łukasz", "Marcin"];
let initialWeightsArray = maleNamesArray.map(name => [name, 0]);


function App() {
  return (
    <div className="App">
      <NamesComparer maleNamesArray={maleNamesArray} initialWeightsArray={initialWeightsArray}/>
    </div>
  );
}

export default App;
