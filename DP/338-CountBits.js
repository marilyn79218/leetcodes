// 338. Counting Bits
// Given a non negative integer number num. For every numbers i in the range 0 ≤ i ≤ num calculate the number of 1's in their binary representation and return them as an array.

/*
  Input: 2
  Output: [0,1,1]
*/
/*
  Input: 5
  Output: [0,1,1,2,1,2]
*/

var countBits = function(num) {
  var powerOf2 = [1, 2];
  let records = [0];
  for (let i=1; i<=num; i++) {
    let count = 0;
    let binary = getBinary(i, powerOf2).split('').forEach(binaryChar => { if (binaryChar === '1') ++count } );
    records[i] = count;
  }
  
  return records;
};

var getBinary = (n, powerOf2, largestDigitIndex) => {
  let binary = '';
  // let count = 0;
  let largestPower = powerOf2[powerOf2.length - 1];
  if (largestPower < n) {
    while(largestPower < n) {
      let nextPower = largestPower * 2;
      powerOf2.push(nextPower);
      
      largestPower = powerOf2[powerOf2.length - 1];
    }
    
    if (largestPower === n) return getBinary(n, powerOf2, powerOf2.length - 1);
    else return getBinary(n, powerOf2, powerOf2.length - 2);
  } else {
    if (largestDigitIndex === undefined) {
      let closestPowerIndex;
      powerOf2.some((power, index) => {
        if (power === n) {
          closestPowerIndex = index;
          return true;
        } else if (power > n) {
          closestPowerIndex = index - 1;
          return true;
        }
      });
      
      binary = binary + '1' + getBinary(n % powerOf2[closestPowerIndex], powerOf2, closestPowerIndex - 1);
      // ++count;
    } else if (largestDigitIndex > 0) {
      let nextBinaryDigit = (n / powerOf2[largestDigitIndex]) >= 1 ? 1 : 0;
      let nextN = n % powerOf2[largestDigitIndex];
      
      binary = binary + nextBinaryDigit + getBinary(nextN, powerOf2, largestDigitIndex - 1);
      
      // let value = nextBinaryDigit === 1 ? 1 : 0;
      // count += value;
    } else {
      if (n === 1) {
        binary += '1';
        // ++count;
        return binary;
      } else {
        binary += '0';
        return binary;
      }
    }
  }

  return binary;
}

