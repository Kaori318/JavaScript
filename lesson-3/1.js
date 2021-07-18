function primeNumber (number) {
   if(number < 2){
      return false;
   }
   for (let y = 2; y <= Math.sqrt(number); y++){
      if (number % y == 0){
         return false; 
      }
      } 
      return true;
   }

let i = 0;
while(i <= 100){
   if (primeNumber (i)){
   console.log (i);
   }
   i++
}