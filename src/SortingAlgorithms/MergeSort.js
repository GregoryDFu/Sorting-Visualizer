export function getMergeSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return array;
  const auxiliaryArray = array.slice();
  mergeSort(array, 0, array.length - 1, auxiliaryArray, animations);
  return animations;
}

function mergeSort(mainArray, leftIndex, rightIndex, auxiliaryArray, animations) {
  if (leftIndex === rightIndex) return;
  const middleIndex = Math.floor((leftIndex + rightIndex) / 2);
  mergeSort(auxiliaryArray, leftIndex, middleIndex, mainArray, animations);
  mergeSort(auxiliaryArray, middleIndex + 1, rightIndex, mainArray, animations);
  performMerge(mainArray, leftIndex, middleIndex, rightIndex, auxiliaryArray, animations);
}

function performMerge(mainArray, leftIndex, middleIndex, rightIndex, auxiliaryArray, animations) {
  let k = leftIndex;
  let i = leftIndex;
  let j = middleIndex + 1;
  while (i <= middleIndex && j <= rightIndex) {
    animations.push([0, i, j]);
    animations.push([1, i, j]);
    if (auxiliaryArray[i] <= auxiliaryArray[j]) {
      animations.push([2, k, auxiliaryArray[i]]);
      mainArray[k++] = auxiliaryArray[i++];
    } else {
      animations.push([2, k, auxiliaryArray[j]]);
      mainArray[k++] = auxiliaryArray[j++];
    }
  }
  while (i <= middleIndex) {
    animations.push([0, i, i]);
    animations.push([1, i, i]);
    animations.push([2, k, auxiliaryArray[i]]);
    mainArray[k++] = auxiliaryArray[i++];
  }
  while (j <= rightIndex) {
    animations.push([0, j, j]);
    animations.push([1, j, j]);
    animations.push([2, k, auxiliaryArray[j]]);
    mainArray[k++] = auxiliaryArray[j++];
  }
}
