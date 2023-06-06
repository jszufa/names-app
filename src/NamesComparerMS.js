import { useState, useEffect } from 'react';
import './NamesComparer.css';

function NamesComparerMS(props) {

  const [namesArray, setNamesArray] = useState(props.maleNamesArray);
  const [currentNames, setCurrentNames] = useState([]);
  const [filteredCompareArray, setFilteredCompareArray] = useState(props.compareArray)

  useEffect(() => { updateCurrentNames(); }, [namesArray]);

  const sortArray = (winnerName) => {
    let sortedArr = [];
    if (currentNames[0] === winnerName) {
      sortedArr.push(namesArray.shift())
    }
    /* console.log(sortedArr) */
    setNamesArray(namesArray);
  }

  const updateCurrentNames = () => {
    setCurrentNames([namesArray[0], namesArray[1]])
  }


  // low - index pierwszego wyrazu tablicy
  // mid - index środkowego wyrazu tablicy
  // high - index ostatniego wyrazu tablicy
  let numbers = [5, 7, 1, 4, 14, 2, 28, 3];

  const [size, setSize] = useState(1);
  const [temp, setTemp] = useState([]);

  const [low, setLow] = useState(0);
  const [mid, setMid] = useState(0);
  const [high, setHigh] = useState(1);

  const stepByStepMergeSort = () => {
    if (size = 1) {

    }

    else if (size = 2) {

    }

    else if (size = 4) {

    }

    else if (size = 8) {

    }

    else if (size = 16) {

    }
  }




  function bottomUpMergeSort(inputArray) {
    var length = inputArray.length;
    var size = 1;
    var temp = []; //allocate space just once

    for (size; size < length; size = size * 2) {
      var low = 0;
      //console.log(`The size value is ${size}`)

      for (low; low < length - size; low += size * 2) {
        var mid = low + size - 1,
          high = Math.min(low + (size * 2 - 1), length - 1);
        /* console.log(`The low value is ${low}`);
        console.log(`The mid value is ${mid}`);
        console.log(`The high value is ${high}`) */

        merge(inputArray, temp, low, mid, high);

        //warunek na ostatni przebieg pętli - reset tablicy roboczej
        if (temp.length === length) {
          //przekazanie temp do inputArray
          var sortedArray = JSON.parse(JSON.stringify(temp));
          inputArray = sortedArray;
          temp = [];
        }
      }
    }

    return inputArray;
  }


  function merge(inputArray, temp, low, mid, high) {

    let left = inputArray.slice(low, mid + 1);
    let right = inputArray.slice(mid + 1, high + 1);

    let sortedArr = [];
    while (left.length && right.length) {
      // Inserts the smallest/biggest item into sortedArr
      // Tutaj powinno się wyświetlać zapytanie dla użytkownika
      // przy każdym kliknięciu powinniśmy się przesuwać jeden krok dalej w algorytmie
      // czy zmienne występujące w tej funkcji muszę w takim razie wrzucić w stany lub local storage?
      if (left[0] > right[0]) {
        sortedArr.push(left.shift())
      } else {
        sortedArr.push(right.shift())
      }
    }

    temp.push(...sortedArr, ...left, ...right);

    //console.log(`oto temp ${temp}`);
    //console.log(temp);
    //console.log(`Length inputArray to ${inputArray.length}, a length temp to ${temp.length}`);
  }








  return (
    <div className="NamesComparer">
      {/* {initialWeightsArray} */}
      <button className='NameButton' onClick={() => console.log(mergeSort(namesArray))}>{currentNames[0]}</button>
      <button className='NameButton' onClick={() => sortArray(currentNames[1])}>{currentNames[1]}</button>
    </div>
  );
}

export default NamesComparerMS;
