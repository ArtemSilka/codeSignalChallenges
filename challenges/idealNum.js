function idealNum(low, high) {
  let count = 0;

  for (let i = low; i <= high; i++) {
    let num = i;
    while(num % 3 === 0) {
      num = num / 3;
    }
    while(num % 5 === 0) {
      num = num / 5;
    }
    if (num === 1) count++;
  }

  return count;
}
// console.log(idealNum(200,405))