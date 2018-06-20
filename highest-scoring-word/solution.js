'use strict'

function high(x){
    const arrOfChars = x.split(' ');
    const chars = 'abcdefghijklmnopqrstuvwxyz';
    
    let newArr = arrOfChars.map(function(word){
      let sum = 0;
      for (let i = 0; i < word.length; i++) {
        sum += chars.indexOf(word[i]);
      }
      return sum;
    });
    return arrOfChars[newArr.indexOf(Math.max(...newArr))];
  }