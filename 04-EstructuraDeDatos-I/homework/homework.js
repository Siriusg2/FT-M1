'use strict';

// EJERCICIO 1
function nFactorial(n) {
   if (n === 0 || n === 1)
   {    return 1  } 

   else {    return( n * nFactorial(n - 1))  }


  }

// EJERCICIO 2
function nFibonacci(n) {
   if (n === 0)
   {    return 0  } 
   else if (n === 1){
      return 1;
   }

   else {    return nFibonacci(n - 1) + nFibonacci(n - 2 ) }

  

}

// EJERCICIO 3
function Queue() {
this.arr = [];

}
Queue.prototype.enqueue = function(x){ this.arr.push(x)}
Queue.prototype.dequeue = function(){ return this.arr.shift()}
Queue.prototype.size = function(){ return this.arr.length}


const queue = new Queue();




// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   Queue,
   nFactorial,
   nFibonacci,
};
