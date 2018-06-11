'use strict'

// Without refactoring

function validatePIN (pin) {
    if (/^(\d{4}|\d{6})$/.test(pin)) {
      return true;
    } else {
      return false;
    }
  
  }

// With refactoring

const validatePIN = pin => /^(\d{4}|\d{6})$/.test(pin);