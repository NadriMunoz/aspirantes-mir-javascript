function maxIndex(num) {
    if (num.length === 0) {
      return -1;
    }
  
    let maxNum = num[0];
    let maxIndex = 0;
  
    for (let i = 1; i < arr.length; i++) {
      if (num[i] > maxNum) {
        maxNum = num[i];
        maxIndex = i;
      }
    }
  
    return maxIndex;
  }

  // escribe la función maxIndex acá

console.log(maxIndex([1, 3, 2])) // 1
console.log(maxIndex([10, 9, 8, 7, 6, 5, 4])) // 0
console.log(maxIndex([])) // -1