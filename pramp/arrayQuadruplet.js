function findArrayQuadruplet(arr, s) {
  if (arr.length < 4) return [];
  
  let sorted = arr.sort();
  // [0,1,2,3,4,5,7,9] // 8
  //  0.1 2 3 4 5 6 7
  for (let i = 0; i < sorted.length -3; i++) {
    for (let j = i + 1; j < sorted.length - 2; j++) {
      let diff = s - (sorted[i] + sorted[j]),
          low = j + 1,
          high = sorted.length - 1;
      
      while (low < high) {
        if (sorted[low] + sorted[high] < diff) {
          low++;
        } else if (sorted[low] + sorted[high] > diff) {
          high--;
        } else {
          return [sorted[i], sorted[j], sorted[low], sorted[high]].sort((a, b) => a - b);
        }
      }
    }
  }
  
  return [];
}