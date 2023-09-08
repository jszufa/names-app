import { useState, useEffect } from 'react';
import './NamesComparerMS.css';
import ProgressBar from '@ramonak/react-progress-bar';
import swordB from './img/sword_blue.png';

// low - index of the first compared element
// mid - index of the middle element
// high - index of the last element

function NamesComparerMS(props) {

  const [namesArray, setNamesArray] = useState([]);
  const [currentNames, setCurrentNames] = useState(['Start comparisons', '']);

  const [size, setSize] = useState(1);
  const [temp, setTemp] = useState([]);

  const [low, setLow] = useState(0);

  const [leftFlag, setLeftFlag] = useState(0);
  const [rightFlag, setRightFlag] = useState(0);

  const [sortedArr, setSortedArr] = useState([]);
  const [finnishingFlag, setFinnishingFlag] = useState(false);


  useEffect(() => { finishingMove() }, [finnishingFlag]);
  useEffect(() => {
    //for the process of comparison
    if (size < namesArray.length) {
      setCurrentNames([namesArray[low], namesArray[low + size]])
    }
    //for initialization
    else if (namesArray.length === 0) { return }
    //for the end of comparison
    else {
      setCurrentNames(['Perfect, you did it! Continue with the second person or see the results below.', '']);

      props.setRanking(
        (r) => {
          r.push(namesArray);
          return r
        }
      );
    }
  }, [temp]);


  const initializeComparison = () => {

    //converting 
    let newNamesArray = props.namesPool.map((object) => object.name);

    //randomizing order
    newNamesArray.sort(function () {
      return Math.random() - 0.5;
    });
    setNamesArray(newNamesArray);
    setCurrentNames(newNamesArray);
  }


  const finishingMove = () => {

    setLeftFlag(0);
    setRightFlag(0);

    let newTemp = JSON.parse(JSON.stringify(temp));
    newTemp.push(...sortedArr);
    setTemp(() => newTemp);
    setSortedArr(() => []);

    let length = namesArray.length;

    if (low >= length - size && length > 0) {
      //passing temp to inputArray
      setSize(size * 2);
      setLow(() => 0);

      var sortedCompleteArray = JSON.parse(JSON.stringify(newTemp));
      //adding sorted tail of the array
      let sortedTail = namesArray.slice(sortedCompleteArray.length);
      sortedCompleteArray.push(...sortedTail);

      setNamesArray(sortedCompleteArray);
      setTemp(() => []);

      /* console.log(`The current name ranking is: ${sortedCompleteArray}`) */;
    }
  }

  //MERGE SORT INITIALIZED BY USER
  const stepByStepMergeSort = (winnerName) => {
    if (namesArray.length === 0) {
      initializeComparison();
      return;
    }

    let length = namesArray.length;

    if (size < length && length > 0) {
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
          console.error('Error: algorithm error')
        }
      }
      else {
        console.error('Error: algorithm error')
      }
    }
    else {
      /* console.log('The end of comparison');*/
    }
  }

  return (
    <div className='NamesComparer'>
      <button className='NameButton' onClick={() => stepByStepMergeSort(currentNames[0])}>{currentNames[0]}</button>
      {currentNames[1] &&
        <img src={swordB} className='Swords' />}
      {currentNames[1] &&
        <button className='NameButton' onClick={() => stepByStepMergeSort(currentNames[1])}>{currentNames[1]}</button>}
      <ProgressBar completed={Math.log2(size) * 100 / Math.ceil(Math.log2(namesArray.length))} className='Wrapper' bgColor='#94CB79' isLabelVisible={false} height='6px' />
    </div>
  );
}

export default NamesComparerMS;