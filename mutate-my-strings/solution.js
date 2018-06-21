'use strict'

function mutateMyStrings(stringOne, stringTwo) {
    let str1 = stringOne.split('');
    let str2 = stringTwo.split('');
    let mutate = stringOne.concat('\n');
    for (let i in str1) {
        if (str1[i] !== str2[i]) {
            str1[i] = str2[i];
            mutate = mutate.concat(`${str1.join('')}\n`);
        }
    }
    return mutate
  };