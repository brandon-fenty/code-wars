'use strict'

// Use map() to double the values in an array

const double = arr => arr.map(function(doubler) {
    return doubler * 2;
});

// List Filtering

let filter_list = arr => arr.filter(function(ints) {
    return Number.isInteger(ints);
});

// Calculate average

const find_average = arr => arr.reduce((a,b) => a + b) / arr.length;