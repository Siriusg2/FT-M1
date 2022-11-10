'use strict';

function BinarioADecimal(num) {
     num = num.split('').reverse();
 
    let count = 0;

    for (let i = 0; i < num.length; i++) {  
        
     count = count + num[i] * 2 ** i;
       
       return count; }
       

}


function DecimalABinario(num) {

let arr = [];

while (num > 0) { 
   let mod = num % 2;
   num = Math.floor(num / 2);
   arr.unshift(mod);
   return(arr.join(''));

}
}


module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
