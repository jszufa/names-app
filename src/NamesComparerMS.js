import { useState, useEffect } from 'react';
import './NamesComparerMS.css';

// oszczędność algorytmu fajnie widać na 3 elementach
// low - index pierwszego wyrazu tablicy
// mid - index środkowego wyrazu tablicy
// high - index ostatniego wyrazu tablicy

function NamesComparerMS(props) {

  const [namesArray, setNamesArray] = useState(props.maleNamesArray);
  const [currentNames, setCurrentNames] = useState(props.maleNamesArray);

  const [size, setSize] = useState(1);
  const [temp, setTemp] = useState([]);

  const [low, setLow] = useState(0);

  const [leftFlag, setLeftFlag] = useState(0);
  const [rightFlag, setRightFlag] = useState(0);

  const [sortedArr, setSortedArr] = useState([]);
  const [finnishingFlag, setFinnishingFlag] = useState(false);



  useEffect(() => { finishingMove() }, [finnishingFlag]);
  useEffect(() => {
    if (size < namesArray.length) {
      setCurrentNames([namesArray[low], namesArray[low + size]])
    }
    else { setCurrentNames(['Koniec', 'Porównań:)']) }
  }
    , [temp]);

  const finishingMove = () => {

    setLeftFlag(0);
    setRightFlag(0);

    let newTemp = JSON.parse(JSON.stringify(temp));
    newTemp.push(...sortedArr);
    setTemp(() => newTemp);
    setSortedArr(() => []);

    let length = namesArray.length;
    if (low >= length - size) {
      //przekazanie temp do inputArray
      setSize(size * 2);
      setLow(() => 0);

      var sortedCompleteArray = JSON.parse(JSON.stringify(newTemp));
      //dodaję posortowany ogon tablicy
      let sortedTail = namesArray.slice(sortedCompleteArray.length);
      //console.log(sortedTail);
      sortedCompleteArray.push(...sortedTail);

      setNamesArray(sortedCompleteArray);
      setTemp(() => []);

      console.log(`Aktualny ranking imion to: ${sortedCompleteArray}`);
    }
  }

  //MERG SORT INITIALIZED BY USER
  const stepByStepMergeSort = (winnerName) => {
    let length = namesArray.length;

    if (size < length) {
      var mid = low + size - 1,
        high = Math.min(low + (size * 2 - 1), length - 1);

      let left = namesArray.slice(low + leftFlag, mid + 1);
      let right = namesArray.slice(mid + 1 + rightFlag, high + 1);

      if (left.length && right.length) {

        if (left[0] === winnerName) {

          let winner = left.shift();
          setSortedArr((current) => [...current, winner])
          setLeftFlag(leftFlag + 1);

          if (!(left.length)) {
            setSortedArr((current) => [...current, ...right]);
            setLow((current) => current + size * 2);
            setFinnishingFlag((current) => !current);
          }
          else (
            setCurrentNames([left[0], right[0]])
          )

        }
        else if (right[0] === winnerName) {

          let winner = right.shift();
          setSortedArr((current) => [...current, winner]);
          setRightFlag(rightFlag + 1);

          if (!(right.length)) {
            setSortedArr((current) => [...current, ...left]);
            setLow((current) => current + size * 2);
            setFinnishingFlag((current) => !current);
          }
          else (
            setCurrentNames([left[0], right[0]])
          )
        }
        else {
          console.error('Error: błąd algorytmu')
        }
      }
      else {
        console.error('Error: błąd algorytmu')
      }
    }
    else {
      console.log('koniec porównań, Mistrzu');
      console.log(namesArray);
    }
  }



  return (
    <div className="NamesComparer">
      <button className='NameButton' onClick={() => stepByStepMergeSort(currentNames[0])}>{currentNames[0]}</button>
      <button className='NameButton' onClick={() => stepByStepMergeSort(currentNames[1])}>{currentNames[1]}</button>
    </div>
  );
}

export default NamesComparerMS;
