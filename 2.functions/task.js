//Задача № 1

function getArrayParams(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (max <= arr[i]) {
      max = arr[i]
    }
    if (min >= arr[i]) {
      min = arr[i]
    }
  }
  let avg = +(sum / arr.length).toFixed(2)
  return { min: min, max: max, avg: avg };
}
getArrayParams(1, 2, 3, -100, 10)

//Задача № 2

function summElementsWorker(...arr) {
  let initialValue = 0;
  if (arguments.length === 0) {
    return 0;
  }
  let sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);
  return sum
}
summElementsWorker(10, 10, 11, 20, 10)
function differenceMaxMinWorker(...arr) {
  let min = Infinity;
  let max = -Infinity;
  if (arguments.length === 0) {
    return 0;
  }
  for (let i = 0; i < arr.length; i++) {
    if (max <= arr[i]) {
      max = arr[i]
    }
    if (min >= arr[i]) {
      min = arr[i]
    }
  }
  return max - min
}
differenceMaxMinWorker(10, 10, 11, 20, 10)

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  if (arguments.length === 0) {
    return 0;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2) {
      sumOddElement += arr[i];
    } else {
      sumEvenElement += arr[i];
    }
  }
  return sumEvenElement - sumOddElement;
}
differenceEvenOddWorker(94, 51, 57, 41, 47, 66, 58, 10, 38, 17);

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;
  if (arguments.length === 0) {
    return 0;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      sumEvenElement += arr[i];
      countEvenElement++;
    }
  }
  return sumEvenElement / countEvenElement;
}
averageEvenElementsWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35);

//Задача № 3

const arrOfArr = [[10, 10, 11, 20, 10], [67, 10, 2, 39, 88], [72, 75, 51, 87, 43], [30, 41, 55, 96, 62]];

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  for (let i = 0; i < arrOfArr.length; i++) {
    const test = func(...arrOfArr[i])
    if (maxWorkerResult < test) {
      maxWorkerResult = test
    }
    
  }
  return maxWorkerResult
}
makeWork(arrOfArr, averageEvenElementsWorker)