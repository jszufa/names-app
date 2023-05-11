import { useState } from 'react';
import './NamesComparer.css';

function NamesComparer(props) {

  const [weightsArray, setWeightsArray] = useState(props.initialWeightsArray);
  const [currentNames, setCurrentNames] = useState(props.compareArray[0]);

  const updateCurrentNames = (winnerName) => {
    console.log(winnerName)

    //teraz żeby aktualizować wagi, biorę pod uwagę każdy element tablicy. Może jest szybszy sposób? Np. z filtrowaniem?
    setWeightsArray(
      weightsArray.map(name => (name[0] === winnerName) ? [name[0], ++name[1]] : name)
    )

    //wagi dobrze się aktualizują
    /* console.log(weightsArray); */

    //wariant pojedynku każdy z każdym

  
    setCurrentNames((lastPair) => {
      if (props.compareArray.indexOf(lastPair) < props.compareArray.length - 1) {
        return props.compareArray[props.compareArray.indexOf(lastPair) + 1];
      }
      else {
        console.log(weightsArray);
        return ['Koniec', 'Pojedynku'];
      }
    })
  }


  /*  const random = Math.floor(Math.random() * maleNamesArray.length); */



  //Wygrany = waga+1 + aktualna(albo raczej stała Waga pokonanego
  //jeśli zakładam przechodniość przekonań, to inne pojedynki przegranego, powinny wpływać na wynik wygranego
  // Przegrany = nic
  //wyświetl nowe imiona



  return (
    <div className="NamesComparer">
      {/* {initialWeightsArray} */}
      <button className='NameButton' onClick={() => updateCurrentNames(currentNames[0])}>{currentNames[0]}</button>
      <button className='NameButton' onClick={() => updateCurrentNames(currentNames[1])}>{currentNames[1]}</button>
    </div>
  );
}

export default NamesComparer;
