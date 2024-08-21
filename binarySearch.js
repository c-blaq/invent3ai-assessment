function binarySearch(array, targetValue) {
  let low = 0, //low and high keep tracks of which part of the array the search is in
    high = array.length - 1;

  while (low <= high) {
    const midPoint = Math.floor((low + high) / 2);

    if (array[midPoint] === targetValue) {
      // console.log(midPoint); //item found
      return `item found at the ${midPoint} index`;
    } else if (array[midPoint] > targetValue) {
      high = midPoint - 1; //search iwas too high
    } else {
      low = midPoint + 1; //search was too low
    }
  }

  return `Element not present, it will be inserted at the ${low} index`;
}

console.log(binarySearch([1, 3, 5, 6, 7, 9], -1));
