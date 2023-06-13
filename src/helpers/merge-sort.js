// low - index pierwszego wyrazu tablicy
// mid - index środkowego wyrazu tablicy
// high - index ostatniego wyrazu tablicy

//nie wiem dlaczego to nie działa dla nieparzystej liczby elementów, a to istotne pod kątem rozwiązania...
// nie działa tak samo dla czegoś co nie jest potęgą dwójki... czyli tutaj potrzebuję poprawić kod
// a konkretnie potrzebuję poprawić funkcję merge

let numbers = [30, 7, 6, 5, 1, 13, 6];

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

      console.log(`size: ${size}`);
      merge(inputArray, temp, low, mid, high);

      //warunek na ostatni przebieg pętli - reset tablicy roboczej
      //ten warunek jest kiepawy..
      //chciałbym żeby program dopisywał listę, która nie musi być sortowana w tym kroku, na koniec listy, czyli, żeby dopisywał zawsze posortowaną końcówkę sortedArray (sortedArray.length - temp.length)

      //Pytanie - kiedy ma to robić... w tym przypadku temp.length === length - 2
      //kiedy byłoby - 1 też miałoby to sens
      //W sumie to jest zawsze moment tuż przed tym jak zmienia się size
      //więc jeśli low + size*2 < length - size wtedy powinienem uruchomić warunek...

      if (low + size*2 >= length - size) {
        //przekazanie temp do inputArray
        let sortedTail = inputArray.slice(temp.length);
        temp.push(...sortedTail);
        var sortedArray = JSON.parse(JSON.stringify(temp));
        inputArray = sortedArray;
        temp = [];
      }

      // przełożyć ten warunek na kod w react
      
      /* if (temp.length === length) {
        //przekazanie temp do inputArray
        var sortedArray = JSON.parse(JSON.stringify(temp));
        inputArray = sortedArray;
        temp = [];
      } */
    }
  }

  return inputArray;
}


function merge(inputArray, temp, low, mid, high) {

  let left = inputArray.slice(low, mid + 1);
  let right = inputArray.slice(mid + 1, high + 1);

  
  console.log(`Low: ${low}`);
  console.log(`Mid: ${mid}`);
  console.log(`High: ${high}`);
  
  /* let right = inputArray.slice(mid + 1, high + 1); */

  let sortedArr = [];
  while (left.length && right.length) {
    // Inserts the smallest/biggest item into sortedArr
    // Tutaj powinno się wyświetlać zapytanie dla użytkownika
    // przy każdym kliknięciu powinniśmy się przesuwać jeden krok dalej w algorytmie
    // czy zmienne występujące w tej funkcji muszę w takim razie wrzucić w stany lub local storage?
    if (left[0] < right[0]) {
      sortedArr.push(left.shift())
    } else {
      sortedArr.push(right.shift())
    }
  }

  temp.push(...sortedArr, ...left, ...right);
  console.log(`temp: ${temp}`);

  

  //console.log(`oto temp ${temp}`);
  //console.log(temp);
  //console.log(`Length inputArray to ${inputArray.length}, a length temp to ${temp.length}`);
}

//bottomUpMergeSort(numbers);
console.log(bottomUpMergeSort(numbers));






// low - index pierwszego wyrazu tablicy
// mid - index środkowego wyrazu tablicy
// high - index ostatniego wyrazu tablicy

//starać się dopisać coś do tej wersji, czy napisać ją od nowa??


  //Ok potrzebuję napisać sobie algorytm w wersji ogólnej. Tzn zakładając że nie muszę zmieniać danych itp.





  //wersja algorytmu statyczna top down, porównująca stringi
  //ja potrzebuję wersji bottom up

  function merge2(left, right) {
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
    return merge2(left, right)
  }

  useEffect(() => { mergeSort(namesArray); }, []);

  //1. Mam gotową listę imion do posortowania -> tutaj "maleNamesArray"
  //2. Kiedy kliknę pierwsze imię wykonuje się operacja porównania dla pierwszej pary.
  //3. Oznacza to w praktyce, że tworzę nową listę, do której wrzucam wynik z pierwszej operacji




  // Użyjmy algorytmu Merge SORT
  // Algorytm potrzebuje:
  // 1. Początkowej tablicy z imionami - kolejność dowolna
  // 2. Potrzebuje funkcji pomocniczej, która akceptuje tylko posortowane tablice i łączy je w jedną większa tablicę. U mnie tę funkcję musi zawsze wywołać interakcja użytkownika. Jeśli użytkownik kliknie imię, to dodaje je się do kolejnej listy.
  // 3. Potrzebuję funckji Scalająco sortującej. W każdym momencie kiedy pojawia się element scalania potrzebuję interakcji użytkownika, bo to on podejmuje decyzję, czy a > b?
  // Nie potrzebuję wag, potrzebuję za to przechowywać w pamięci pomniejsze listy
