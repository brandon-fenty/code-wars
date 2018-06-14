'use strict'

var gimme = function (arr) {
    for(var i in arr) {
      if(arr[i] != Math.max(...arr) && arr[i] != Math.min(...arr)) {
        return parseInt(i); 
      } 
    }
}; 