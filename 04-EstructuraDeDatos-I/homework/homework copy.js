'use strict';

// EJERCICIO 1
function nFactorial(n) {
  if (n < 0) return false;
   else if (n > 0 && n < 2 )  return n;
      else{

         return n * nFactorial(n-1);
      }  

  }

// EJERCICIO 2
function nFibonacci(n) {
 if (n < 0) return false;
  else if (n > 0 && n < 3) return 1;
   else {
      return nFibonacci(n-1) + nFibonacci(n-2);
   }

  

}

// EJERCICIO 3
function Queue() {
this.array = [];

   
}





// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   Queue,
   nFactorial,
   nFibonacci,
};
