let inputArray = [5, 7, 1, 4, 14, 2, 28, 3]


function merge(inputArray, temp, low, mid, high) {
    //
}


function bottomUpMergeSort(inputArray) {
    var length = inputArray.length,
        size = 1,
        temp = []; //allocate space just once

    for (size; size < length; size = size*2) {
        var low = 0;


        for(low; low < length-size; low += size*2) {
            var mid = low + size - 1,
                high = Math.min(low + (size*2 - 1), length -1);

            ArraySort.merge(inputArray, temp, low, mid, high);
        }
    }

    return inputArray;
}

// low - index pierwszego wyrazu tablicy
// mid - index środkowego wyrazu tablicy
// high - index ostatniego wyrazu tablicy

//starać się dopisać coś do tej wersji, czy napisać ją od nowa??
