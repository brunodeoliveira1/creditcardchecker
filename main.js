// validates the credit cards using the Luhn algorithm
const validateCred = array => {
  // to invert the list.
  newArray = array.reverse();
  // to calculate the sum of the digits.
  let sumNum = 0;
  for (let j = 0; j < newArray.length; j++) {
    if (j % 2 === 0) {
      sumNum += newArray[j];
    } else {
      if (newArray[j] * 2 > 9) {
        sumNum += newArray[j] * 2 - 9;
      } else {
        sumNum += newArray[j] * 2;
      }
    }
  }
  // to check if it's a valid calculation.
  if (sumNum % 10 === 0) {
    return true;
  }
}

//finding invalid credit cards in an array of arrays
const findInvalidCards = array => {
  let invalidArray = [];
  const arrLen = array.length;
  for (let i = 0; i < arrLen; i++) {
      if (validateCred(array[i]) !== true) {
        invalidArray.push(array[i]);
    }
  }
  return invalidArray;
}


// checks the array given and returns the list with the credit card companies that provided a wrong credit card number
const idInvalidCardCompanies = array => {
  const invalidArray = findInvalidCards(array);
  let arrayOfCompanies = [];
  let cardBrand = '';
  for (let i = 0; i < invalidArray.length; i++) {
    switch(invalidArray[i][0]) {
      case 3:
        cardBrand = 'Amex (American Express)';
        break;
      case 4:
        cardBrand = 'Visa';
        break;
      case 5:
        cardBrand = 'Mastercard';
        break;
      case 6:
        cardBrand = 'Discover';
        break;
    }
    if (!arrayOfCompanies.includes(cardBrand)){
      arrayOfCompanies.push(cardBrand);
    }
  } 
  return arrayOfCompanies;
}