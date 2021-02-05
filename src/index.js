
exports.min = function min (array) {
  if (array == undefined || array == 0) {
    return 0;
  }
  let arr = array.sort((a, b) => a - b);
  return arr[0];
}

exports.max = function max (array) {
  if (array == undefined || array == 0) {
    return 0;
  }
  let arr = array.sort((a, b) => a - b);
  return arr[arr.length - 1];
}

exports.avg = function avg (array) {
  if (array == undefined || array == 0) {
    return 0;
  }
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum / array.length;
}
