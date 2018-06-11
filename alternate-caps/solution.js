'use strict'

function capitalize(s){  
    let evenStr = '';
    let oddStr = '';
    
    for (let i = 0; i < s.length; i++) {
      if (i % 2 === 0) {
        evenStr += s[i].toUpperCase();
      } else {
        evenStr += s[i];
      }
      
      if (i % 2 === 1) {
        oddStr += s[i].toUpperCase();
      } else {
        oddStr += s[i];
      }
    }
    return [evenStr, oddStr];
  };