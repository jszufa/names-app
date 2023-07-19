export const compareRankings = (arr1, arr2) => {

    let resultArray = [];

    for (const element of arr1) {
        let index1 = arr1.indexOf(element);
        let index2 = arr2.indexOf(element);
        
        resultArray.push({
            name : element,
            score: Math.max(index1, index2)
        })
    }

    resultArray.sort((a,b) =>  a.score - b.score);
    return resultArray;
}