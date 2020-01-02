export function getInsertionSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return array;
  insertionSort(array, animations);
  console.log(array);
  return animations;
}

function insertionSort(array, animations) {
  let length = array.length;
    for (let i = 1; i < length; i++) {
        let key = array[i];
        let j = i - 1;
        animations.push([0, i - 1, i]);
        animations.push([1, i - 1, i]);
        while (j >= 0 && array[j] > key) {
          animations.push([0, j, j + 1]);
          animations.push([1, j, j + 1]);
          animations.push([2, j + 1, array[j]]);
          animations.push([2, j, array[j + 1]]);
            array[j + 1] = array[j];
            j = j - 1;
        }
        animations.push([2, j + 1, key]);
        array[j + 1] = key;
    }

}
