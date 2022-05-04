
const getBubbleSortAnimation= (array) => {
    const animations = [];
    const copyOfArray = array.slice()
    if(array.length <= 1) return array
    bubbleSortHelper(copyOfArray,animations)
    return animations
}


const getInsertionSortAnimation = (array) => {
    const animations = [];
    const helperArray = array.slice()
    if(array.length <= 1) return array
    insertionSortHelper(helperArray,animations)
    return animations
}

const insertionSortHelper = (helperArray,animations) => {
    const length = helperArray.length;
    for(let i = 1; i < length;i++) {
        let position = helperArray[i];
        let j = i - 1;
        animations.push(["compare1",j,i]);
        animations.push(["compare2",j,i]);
        while (j >= 0 && helperArray[j] >position) {
            animations.push(["insert",j+1,helperArray[j]]);
            helperArray[j+1] = helperArray[j];
            j = j-1;
            
            if (j >= 0) {
                animations.push(["compare1", j, i]);
                animations.push(["compare2", j, i]);
              }
        }

        animations.push(["insert",j+1, position])
        helperArray[j+1] = position


    }
    console.log(animations)
}
const bubbleSortHelper = (copyOfArray,animations) => {
    let len = copyOfArray.length;
    var isSwapped = false;
    let x = len - 1;
    for(let i = 0; i < len; i++) {
        isSwapped = false;
        for(let j = 0; j < x; j++) {
            animations.push(["compare1",j,j+1]);
            animations.push(["compare2",j,j+1]);
            if(copyOfArray[j] > copyOfArray[j+1]) {
                animations.push(["swap",j,copyOfArray[j+1]])
                animations.push(["swap",j+1,copyOfArray[j]])
                var temp = copyOfArray[j]
                copyOfArray[j] = copyOfArray[j+1]
                copyOfArray[j+1] = temp
                isSwapped = true;
                
            }

        }
        if(!isSwapped) {
            //console.log(array);
            break;
        }
        x--;
    }
}

const getQuickSortAnimations = (array) => {
    const animations = [];
    const arr = array.slice();
    if(array.length < 2) return array;
    quickSortHelper(arr,0,arr.length-1,animations);
    return animations;
}

const quickSortHelper = (array,low,high,animations) =>{
    
    //if(low === high) return;
    if(low < high) {

        let pivot = partition(array,low,high,animations);

        quickSortHelper(array,low,pivot-1,animations)
        quickSortHelper(array,pivot+1,high,animations);

        console.log(array);

    }
}

const partition = (arr,low,high,animations) =>{
    let pivot = arr[high];
    let smallIndex = (low-1);


    for(let i = low; i <= high - 1; i++){
        animations.push(["compare1",i,high]);
        animations.push(["compare2",i,high]);
        if(arr[i] < pivot) {
            
            animations.push(["compare1",i,smallIndex+1]);
            animations.push(["swap",i,arr[smallIndex+1]]);
            animations.push(["swap",smallIndex+1,arr[i]]);
            animations.push(["compare2",i,smallIndex+1]);
            smallIndex++;
            swap(arr,smallIndex,i);

        }
    }
        animations.push(["compare1",smallIndex+1,high]);
        animations.push(["swap",high,arr[smallIndex+1]]);
        animations.push(["swap",smallIndex+1,arr[high]]);
        animations.push(["compare2",smallIndex+1,high]);
    swap(arr,smallIndex+1,high);
    

    return (smallIndex + 1);


}

const swap = (arr,i,j) => {
   let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

const getMergeSortAnimation = (array) => {
    const animations = [];
    const helperArray = array.slice();

    if(array.length <= 1) {
        return array;
    }
    mergeSortHelper(array,0,array.length-1,helperArray,animations);
    return animations;
}

const mergeSortHelper = (helperArray,startIdx,endIdx,mainArray,animations) => {
    if (startIdx === endIdx) return;
    const middleIdx = Math.floor((startIdx+endIdx)/2);
    mergeSortHelper(mainArray,startIdx,middleIdx,helperArray,animations);
    mergeSortHelper(mainArray,middleIdx+1,endIdx,helperArray,animations);
    doMerge(helperArray,startIdx,middleIdx,endIdx,mainArray,animations);
}

const doMerge = (helperArray,startIdx,middleIdx,end,mainArray,animations) => {
    let k = startIdx;
    let i = startIdx;
    let j = middleIdx + 1;

    //compare first half of list
    while (i<= middleIdx && j <= end) {
        //push first comparison to change colors
        animations.push(["compare1",i,j]);
        //push 2nd here to revert back to og color
        animations.push(["compare2",i,j]);

        if(mainArray[i] <= mainArray[j]) {
            animations.push(["swap",k,mainArray[i]]);
            helperArray[k++] = mainArray[i++];
        } else {
            animations.push(["swap",k,mainArray[j]]);
            helperArray[k++] = mainArray[j++];
        }

    }

    while (i <= middleIdx) {
        //push first comparison to change colors
        animations.push(["compare1",i,i]);
        //push 2nd here to revert back to og color
        animations.push(["compare2",i,i]);

        animations.push(["swap",k,mainArray[i]]);
        helperArray[k++] = mainArray[i++];


    }

    while (j <= end) {
        //push first comparison to change colors
        animations.push(["compare1",j,j]);
        //push 2nd here to revert back to og color
        animations.push(["compare2",j,j]); 
        animations.push(["swap",k,mainArray[j]]);
        helperArray[k++] = mainArray[j++];
    }
}


export default {
    getBubbleSortAnimation,
    getInsertionSortAnimation,
    getQuickSortAnimations,
    getMergeSortAnimation

}


