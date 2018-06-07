'use strict'

function insertDash(num){
    var numSplit = num.toString().split('');
    var numArr = [];
 
    for(i = 0; i < numSplit.length; i++){
        if(numSplit[i] % 2 === 1 && numSplit[i+1] % 2 === 1){
            numArr += numSplit[i] + '-';            
        }else{
            numArr += numSplit[i];
        }
    }
 
 return numArr;
 }