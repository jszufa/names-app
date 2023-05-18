import { useState, useEffect } from 'react';
import './NamesComparer.css';

function NamesComparerMS(props) {

  const [namesArray, setNamesArray] = useState(props.maleNamesArray);
  const [currentNames, setCurrentNames] = useState(props.compareArray[0]);
  const [filteredCompareArray, setFilteredCompareArray] = useState(props.compareArray)


  //wersja algorytmu statyczna, porównująca stringi

  function merge(left, right) {
    let sortedArr = [] // the sorted items will go here
    while (left.length && right.length) {
      // Insert the smallest item into sortedArr
      // Tutaj powinno się wyświetlać zapytanie dla użytkownika
      if (left[0] > right[0]) {
        sortedArr.push(left.shift())
      } else {
        sortedArr.push(right.shift())
      }
    }
    // Use spread operators to create a new array, combining the three arrays
    return [...sortedArr, ...left, ...right]
  }

  function mergeSort(arr) {
    // Base case
    if (arr.length <= 1) return arr
    let mid = Math.floor(arr.length / 2)
    // Recursive calls
    let left = mergeSort(arr.slice(0, mid))
    let right = mergeSort(arr.slice(mid))
    return merge(left, right)
  }

  useEffect(() => { mergeSort(namesArray); }, []);
  



// Użyjmy algorytmu Merge SORT
// Algorytm potrzebuje:
// 1. Początkowej tablicy z imionami - kolejność dowolna
// 2. Potrzebuje funkcji pomocniczej, która akceptuje tylko posortowane tablice i łączy je w jedną większa tablicę. U mnie tę funkcję musi zawsze wywołać interakcja użytkownika. Jeśli użytkownik kliknie imię, to dodaje je się do kolejnej listy.
// 3. Potrzebuję funckji Scalająco sortującej. W każdym momencie kiedy pojawia się element scalania potrzebuję interakcji użytkownika, bo to on podejmuje decyzję, czy a > b?
// Nie potrzebuję wag, potrzebuję za to przechowywać w pamięci pomniejsze listy


  return (
    <div className="NamesComparer">
      {/* {initialWeightsArray} */}
      <button className='NameButton' onClick={() => console.log(mergeSort(namesArray))}>{currentNames[0]}</button>
      <button className='NameButton' >{currentNames[1]}</button>
    </div>
  );
}

export default NamesComparerMS;
