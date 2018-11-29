let dataToBeSorted = [10,9,8,7,6,5];
// console.log('dataToBeSorted - before: ', dataToBeSorted);

const sortFunction = (arrayToSort) =>{
    let arrayToSortLength = arrayToSort.length;
    for (let i = arrayToSortLength-1; i>=0; i--){
        for(let j = 1; j<=i; j++){
            if(arrayToSort[j-1]>arrayToSort[j]){
                let valueInCurrentIndex = arrayToSort[j-1];
                arrayToSort[j-1] = arrayToSort[j];
                arrayToSort[j] = valueInCurrentIndex;
                console.log(arrayToSort)
            }
        }
    }
    return arrayToSort;
};

sortFunction(dataToBeSorted);
// console.log('dataToBeSorted - after: ', dataToBeSorted);
