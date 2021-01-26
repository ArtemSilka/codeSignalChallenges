function findArrayQuadruplet(arr, s) {
  // total time O(N^3), space O(1)
  if (arr.length < 4) return [];
  
  let sorted = arr.sort(); //O(N⋅log(N))

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
  } //O(N^3)
  
  return [];
}