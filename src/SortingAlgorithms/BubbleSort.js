export function getBubbleSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return array;
  bubbleSort(array, animations);
  return animations;
}

function bubbleSort(array, animations) {
  var swapped;
  do {
    swapped = false;
    for(var i = 0; i < array.length - 1; i++) {
      if(array[i] && array[i + 1] && array[i] > array[i + 1]) {
        animations.push([0, i, i + 1]);
        animations.push([1, i, i + 1]);
        animations.push([2, i, array[i + 1]]);
        animations.push([2, i + 1, array[i]]);
        swap(array, i, i + 1);
        swapped = true;
      }
    }
  } while(swapped);
  return array;
}
function swap(array, i, j) {
  var temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}
