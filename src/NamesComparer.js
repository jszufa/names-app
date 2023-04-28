import { useState } from 'react';
import './NamesComparer.css';

function NamesComparer() {
  
  const[weightsArray, setWeightsArray] = useState([])
  
  let maleNamesArray = ["Ignacy", "Bernard", "Hugon", "Antoni", "Tadeusz", "Jan", "Stanisław", "Łukasz", "Marcin"];

  //adding initial weights
  let initialWeightsArray = maleNamesArray.map(name => [name, 0]);
  //console.log(maleNamesArray.map(name => [name, 0]))

  const random = Math.floor(Math.random() * maleNamesArray.length);

  const updateNameWeights = (/* oba aktualne imiona */) => {
      
    //Wygrany = waga+1 + aktualna(albo raczej stała Waga pokonanego
    //jeśli zakładam przechodniość przekonań, to inne pojedynki przegranego, powinny wpływać na wynik wygranego
    // Przegrany = nic
    //wyświetl nowe imiona

  }
  
  return (
    <div className="NamesComparer">
      {/* {initialWeightsArray} */}
      <button className='NameButton' onClick>{maleNamesArray[random]}</button>
      <button className='NameButton' onClick>Bartek</button>
    </div>
  );
}

export default NamesComparer;
