function max(num){
    if (num.length ===0){
       return undefined;
    }
   let maxNum = num[0];
    for(let i = 1; i < num.length; i++){
       if (num,[i]> maxNum){
           maxNum=num[i];
       }
    }
    return maxNum;
   }
   
   // escribe la función max acá
   
   console.log(maxNum([1, 3, 2])) // 3
   console.log(maxNum([10, 9, 8, 7, 6, 5, 4])) // 10
   console.log(maxNum([])) // undefined