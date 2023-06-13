import { useState, useEffect } from 'react';
import './NamesComparer.css';

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

      // SIZE = 1
      if (size === 1) {

        // LOW = 0
        if (low === 0) {

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

        // LOW = 2
        else if (low === 2) {

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
        // LOW = 4
        else if (low === 4) {

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
        // LOW = 6
        else if (low === 6) {

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
        // LOW = 8
        else if (low === 8) {

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
        // LOW = 10
        else if (low === 10) {

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

        // LOW = 12
        if (low === 12) {

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

        // LOW = 14
        else if (low === 14) {

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
        // LOW = 16
        else if (low === 16) {

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
        // LOW = 18
        else if (low === 18) {

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
        // LOW = 20
        else if (low === 20) {

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
        // LOW = 22
        else if (low === 22) {

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
      }
      // SIZE = 2
      else if (size === 2) {

        // LOW = 0
        if (low === 0) {

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

        // LOW = 4
        else if (low === 4) {

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
        // LOW = 8
        else if (low === 8) {

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
        // LOW = 12
        else if (low === 12) {

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
        // LOW = 16
        else if (low === 16) {

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
        // LOW = 20
        else if (low === 20) {

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
        // LOW = 24
        if (low === 24) {

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

        // LOW = 28
        else if (low === 28) {

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
        // LOW = 32
        else if (low === 32) {

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
        // LOW = 36
        else if (low === 36) {

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
        // LOW = 40
        else if (low === 40) {

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
        // LOW = 44
        else if (low === 44) {

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
      }
      // SIZE = 4
      else if (size === 4) {

        // LOW = 0
        if (low === 0) {

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

        // LOW = 8
        else if (low === 8) {

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
        // LOW = 16
        else if (low === 16) {

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
        // LOW = 24
        else if (low === 24) {

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
        // LOW = 32
        else if (low === 32) {

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
        // LOW = 40
        else if (low === 40) {

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
      }
      // SIZE = 8
      else if (size === 8) {

        // LOW = 0
        if (low === 0) {

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

        // LOW = 16
        else if (low === 16) {

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
        // LOW = 32
        else if (low === 32) {

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
        // LOW = 48
        else if (low === 48) {

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
        // LOW = 64
        else if (low === 64) {

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
        // LOW = 80
        else if (low === 80) {

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
      }
      // SIZE = 16
      else if (size === 16) {

        // LOW = 0
        if (low === 0) {

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

        // LOW = 32
        else if (low === 32) {

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
        // LOW = 64
        else if (low === 64) {

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
        // LOW = 96
        else if (low === 96) {

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
        // LOW = 128
        else if (low === 128) {

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
      }
      else if (size === 32) {

        // LOW = 0
        if (low === 0) {

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

        // LOW = 64
        else if (low === 64) {

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
        // LOW = 128
        else if (low === 128) {

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
      }
      // SIZE = 64
      else if (size === 64) {

        // LOW = 0
        if (low === 0) {

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

        // LOW = 128
        else if (low === 128) {

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
      }
    }
    else {
      //to pojawia się po ostatnim kliknięciu
      console.log('koniec porównań');
    }
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
