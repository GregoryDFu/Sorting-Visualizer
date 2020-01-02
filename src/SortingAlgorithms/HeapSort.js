let arrLength;
export function getHeapSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return array;
  heapSort(array, animations);
  return animations;
}
function maxHeap(mainArray, i, animations) {
    const left = 2 * i + 1;
    const right = 2 * i + 2;
    let max = i;

    if (left < arrLength && mainArray[left] > mainArray[max]) {
      animations.push([0, left, max]);
      animations.push([1, left, max]);
        max = left;
    }

    if (right < arrLength && mainArray[right] > mainArray[max])     {
      animations.push([0, right, max]);
      animations.push([1, right, max]);
        max = right;
    }

    if (max != i) {
      animations.push([0, i, max]);
      animations.push([1, i, max]);
      animations.push([2, i, mainArray[max]]);
      animations.push([2, max, mainArray[i]]);
        swap(mainArray, i, max);
        maxHeap(mainArray, max, animations);
    }
}

function swap(mainArray, leftIndex, rightIndex) {
    const temp = mainArray[leftIndex];

    mainArray[leftIndex] = mainArray[rightIndex];
    mainArray[rightIndex] = temp;
}

function heapSort(mainArray, animations) {
    arrLength = mainArray.length;
    var i;
    for (i = Math.floor(arrLength / 2); i >= 0; i --)      {
        maxHeap(mainArray, i, animations);
      }

    for (i = mainArray.length - 1; i > 0; i--) {
      animations.push([0, 0, i]);
      animations.push([1, 0, i]);
      animations.push([2, 0, mainArray[i]]);
      animations.push([2, i, mainArray[0]]);
        swap(mainArray, 0, i);
        arrLength--;

        maxHeap(mainArray, 0, animations);
    }
}
