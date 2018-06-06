'use strict'

// 6-4-18 pair program

function abbrevName(name){
    // code away
    var splitName=name.split(' ');
    var firstName=splitName[0].slice(0,1);
    var lastName=splitName[1].slice(0,1);
 
 
    return `${firstName}.${lastName}`.toUpperCase();
 };