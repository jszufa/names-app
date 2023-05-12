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


  //Wygrany = waga+1 + aktualna(albo raczej stała Waga pokonanego
  //jeśli zakładam przechodniość przekonań, to inne pojedynki przegranego, powinny wpływać na wynik wygranego
  // Przegrany = nic
  //wyświetl nowe imiona


  //Version2
  //Spróbujmy tak: jeśli x pokona y, wtedy x pokonuje wszystkich, których pokonał już y(czyli powinien dostawać tyle punktów ile aktualnie ma y), co więcej y-greka nie warto już w ogóle brać pod uwagę.
  //Innymi słowy liczy się hierarchia a nie liczba zwycięstw
  //czyli jeśli mam 9 imion, to mogę ocenić, że jest maksymalnie do zdobycia 8 punktów
  //gdy coś wygra pojedynek, to dostaje 1 punkt i jest dalej brane pod uwagę, jeśli przegra, to odpada z rankingu z liczbą punktów, którą miało do tej pory
  
  //*w wariancie bardziej pod użytkownika, fajnie byłoby stale brać pod uwagę grupę 3 imion z najwyższym wynikiem

  //Szkic algorytmu:
  // Mam tablice z wszystkimi kombinacjami
  // gdy ktoś kliknie dane imię, to 1) wygrany dostaje +1 oraz 2) tablica compareArray zostaje wyfiltrowana (znikają z niej wszystkie pary z imieniem przegranego)



  return (
    <div className="NamesComparer">
      {/* {initialWeightsArray} */}
      <button className='NameButton' onClick={() => updateCurrentNames(currentNames[0])}>{currentNames[0]}</button>
      <button className='NameButton' onClick={() => updateCurrentNames(currentNames[1])}>{currentNames[1]}</button>
    </div>
  );
}

export default NamesComparer;
