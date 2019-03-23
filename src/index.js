module.exports = function getcountOfZeros(number, base) {


function factorialBase(base) {
  let array = [];
  for (let i = 2; i < base + 1; i++) {
    while (base % i == 0) {
      base /= i;
      array.push(i);
    }
  }
  return array
};


function getMultiplaers(array) {
  let obj = {};

  for (let i = 0; i < array.length; i++) {
    let str = array[i];
    obj[str] = true;
  }

  return Object.keys(obj);
};

function getConuntZeros(number, arrayUniq) {
  let array = arrayUniq.slice();
  let zeros = [];
  for (let i = 0; i < array.length; i++) {
    let count = Math.trunc(number / array[i]);
    zeros[i] = 0;
    while (count) {
      zeros[i] += count;
      array[i] *= arrayUniq[i];
      count = Math.trunc(number / array[i]);
    }
  }
  return zeros
};


function getIteration(arrayAll, arrayUniq) {
  let getIteration = [];
  for (let i = 0; i < arrayUniq.length; i++) {
    getIteration[i] = arrayAll.filter(number => number == arrayUniq[i]).length;
  }
  return getIteration
};

function countOfZeros(allCountZeros, getIteration) {
  for (let i = 0; i < allCountZeros.length; i++) {
    allCountZeros[i] = Math.trunc(allCountZeros[i] / getIteration[i]);
      
  }
  return Math.min.apply(null, allCountZeros);
};



var defaultMultiplayers = factorialBase(base);
var trueMultiplayers = getMultiplaers(defaultMultiplayers);
var allCountZeros = getConuntZeros(number, trueMultiplayers);
var getIteration = getIteration(defaultMultiplayers, trueMultiplayers);
var countOfZeros = countOfZeros(allCountZeros, getIteration);



return countOfZeros
};
