import { useState, useEffect } from 'react';
import './NamesComparer.css';

function NamesComparerMS(props) {

  const [namesArray, setNamesArray] = useState(props.maleNamesArray);
  const [currentNames, setCurrentNames] = useState(props.maleNamesArray);

  /* useEffect(() => { updateCurrentNames(); }, [namesArray]); */

/*   const updateCurrentNames = () => {
    setCurrentNames([namesArray[0], namesArray[1]])
  } */


  // low - index pierwszego wyrazu tablicy
  // mid - index środkowego wyrazu tablicy
  // high - index ostatniego wyrazu tablicy
  let numbers = [5, 7, 1, 4, 14, 2, 28, 3];

  const [size, setSize] = useState(1);
  const [temp, setTemp] = useState([]);

  const [low, setLow] = useState(0);

  const [leftFlag, setLeftFlag] = useState(0);
  const [rightFlag, setRightFlag] = useState(0);

  const [sortedArr, setSortedArr] = useState([]);
  const [finnishingFlag, setFinnishingFlag] = useState(false);

 

  useEffect(() => { finishingMove() }, [finnishingFlag]);

  const finishingMove = () => {
    setLeftFlag(0);
    setRightFlag(0);
    let newTemp = JSON.parse(JSON.stringify(temp));
    newTemp.push(...sortedArr);
    setTemp(() => newTemp);

    let length = namesArray.length;
    if (newTemp.length === length) {
      //przekazanie temp do inputArray
      var sortedCompleteArray = JSON.parse(JSON.stringify(newTemp));
      setNamesArray(sortedCompleteArray);
      setTemp(() => []);
      // console.log(namesArray);
      console.log(newTemp)
    }
  }

  //

  const stepByStepMergeSort = (winnerName) => {
    let length = namesArray.length;

    if (size === 1) {
      if (low < length - size) {
        if (low === 0) {
          /* setMid(low + size - 1)
          setHigh(Math.min(low + (size * 2 - 1), length - 1)) */
          var mid = low + size - 1,
            high = Math.min(low + (size * 2 - 1), length - 1);

          let left = namesArray.slice(low + leftFlag, mid + 1);
          let right = namesArray.slice(mid + 1 + rightFlag, high + 1);

          if (left.length && right.length) {

            if (left[0] == winnerName) {
              //sprawdzić, czy left.shift tutaj zmieni od razu tablicę, czy nie, jeśli nie wtedy zmienić formułę niżej na if(!(left.length-1)) Sprawdzę dla samego left, czy zmienia działanie
              setSortedArr((current) => [...current, left.shift()])
              setLeftFlag(leftFlag + 1);

              if (!(left.length-1)) {
                setSortedArr((current) => [...current, right]);
                setFinnishingFlag((current) => !current);
              }
            }
            else if (right[0] == winnerName) {
              setSortedArr((current) => [...current, right.shift()])
              setRightFlag(rightFlag + 1);

              if (!(right.length-1)) {
                setSortedArr((current) => [...current, left]);
                setFinnishingFlag((current) => !current);
              }
            }
            else {
              console.error('Error: błąd algorytmu')
            }
          }


          setLow(low + size * 2)
        }
        else if (low === 3) {

        }
        else if (low === 5) {

        }
        else if (low === 7) {

        }
        else if (low === 9) {

        }
        else if (low === 11) {

        }
        else if (low === 13) {

        }
        else if (low === 15) {

        }
        else if (low === 17) {

        }
        else if (low === 19) {

        }
        else if (low === 21) {

        }
        else if (low === 23) {

        }
        else if (low === 25) {

        }
        else if (low === 27) {

        }
        else if (low === 29) {

        }
      }
      else {
        setSize(size * 2)
      }
    }

    else if (size === 2) {

    }

    else if (size === 4) {

    }

    else if (size === 8) {

    }

    else if (size === 16) {

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
      <button className='NameButton' onClick={() => stepByStepMergeSort(currentNames[0])}>{currentNames[0]}</button>
      <button className='NameButton' onClick={() => stepByStepMergeSort(currentNames[1])}>{currentNames[1]}</button>
    </div>
  );
}

export default NamesComparerMS;
