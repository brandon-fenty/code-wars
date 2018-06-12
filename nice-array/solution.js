'use strict'

function isNice(arr) {
    let niceArr = [];
    let counter = 0;
    
    for (let i = 0; i < arr.length; i++) {
        niceArr.push(arr[i] - 1);
        niceArr.push(arr[i] + 1);
    }
    for (let j = 0; j < arr.length; j++) { 
        if (niceArr.includes(arr[j]) === true) {
            counter++;
    }
    }
    if (arr.length === 0) {
        return false;
    }
    if (counter === arr.length) { 
        return true;
    } else {
        return false;
    }
}