export function getQuickSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return array;
  quickSort(array, 0, array.length - 1, animations);
  return animations;
}

function swap(mainArray, leftIndex, rightIndex){
    var temp = mainArray[leftIndex];
    mainArray[leftIndex] = mainArray[rightIndex];
    mainArray[rightIndex] = temp;
}
function partition(mainArray, left, right, animations) {
    var pivot   = mainArray[Math.floor((right + left) / 2)], //middle element
        i       = left, //left pointer
        j       = right; //right pointer
    while (i <= j) {
        while (mainArray[i] < pivot) {
          animations.push([0, i, Math.floor((right + left) / 2)]);
          animations.push([1, i, Math.floor((right + left) / 2)]);
            i++;
        }
        while (mainArray[j] > pivot) {
          animations.push([0, Math.floor((right + left) / 2), j]);
          animations.push([1, Math.floor((right + left) / 2), j]);

            j--;
        }
        if (i <= j) {
          animations.push([0, i, j]);
         animations.push([1, i, j]);
         animations.push([2, i, mainArray[j]]);
         animations.push([2, j, mainArray[i]]);

            swap(mainArray, i, j); //sawpping two elements
            i++;
            j--;
        }
    }
    return i;
}

function quickSort(mainArray, left, right, animations) {
    var index;
    if (mainArray.length > 1) {
        index = partition(mainArray, left, right, animations); //index returned from partition
        if (left < index - 1) { //more elements on the left side of the pivot
            quickSort(mainArray, left, index - 1, animations);
        }
        if (index < right) { //more elements on the right side of the pivot
            quickSort(mainArray, index, right, animations);
        }
    }
    return mainArray;
}
