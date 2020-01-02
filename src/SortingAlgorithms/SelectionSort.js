export function getSelectionSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return array;
  selectionSort(array, animations);
  return animations;
}

function selectionSort(mainArray, animations) {
    var len = mainArray.length;
    for (var i = 0; i < len - 1; i = i + 1) {
        var min = i;
        for (var j = i + 1; j < len; j = j + 1) {
          animations.push([0, min, j]);
          animations.push([1, min, j]);
            if (mainArray[j] < mainArray[min]) {
                min = j;
            } else {}
        }
        if (min !== i) {
          animations.push([2, i, mainArray[min]]);
          animations.push([2, min, mainArray[i]]);
            swap(mainArray, i, min);
        } else {}
    }
}

function swap(mainArray, i, min) {
    var temp = mainArray[i];
    mainArray[i] = mainArray[min];
    mainArray[min] = temp;
}
